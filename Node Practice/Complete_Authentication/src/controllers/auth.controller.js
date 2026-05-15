import userModel from "../models/user.model.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import config from "../config/config.js";
import sessionModel from "../models/session.model.js";





export async function register(req, res) {
  const { username, email, password } = req.body;
  try {
    const isAlreadyRegistered = await userModel.findOne({
      $or: [
        { username },
        { email }
      ]
    });

    if (isAlreadyRegistered) {
      return res.status(409).json({
        message: "User or email already exists"
      });
    }

    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");

    const user = await userModel.create({
      username,
      email,
      password: hashedPassword
    });


    const refreshToken = jwt.sign(
      { id: user._id },
      config.JWT_SECRET,
      { expiresIn: "7d" }
    )


    const refreshTokenHash = crypto.createHash("sha256").update(password).digest("hex");


    const session = await sessionModel.create({
      user: user._id,
      refreshTokenHash,
      ip: req.ip,
      userAgent: req.header["user-agent"]
    })



    const accessToken = jwt.sign(
      { id: user._id, sessionId: session._id },
      config.JWT_SECRET,
      { expiresIn: "15m" }
    );




    res.cookie("refreshToken", refreshToken, {
      httpOnly: true, //JavaScript in the browser CANNOT access this cookie.
      secure: true,
      sameSite: "strict",//Helps prevent CSRF attacks
      maxAge: 7 * 24 * 60 * 60 * 1000 //7days
    })




    res.status(201).json({
      message: "User registered successfully",
      user: {
        username: user.username,
        email: user.email,
      },
      accessToken
    });




  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message
    });
  }
}

export async function getMe(req, res) {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // ← typo: authrization → authorization

    if (!token) {
      return res.status(401).json({
        message: "Token not found"
      });
    }

    const decoded = jwt.verify(token, config.JWT_SECRET);

    const user = await userModel.findById(decoded.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      message: "user fetched successfully",
      user: {
        username: user.username,
        email: user.email,
      }
    });

  } catch (error) {
    res.status(401).json({                      // ← handle invalid/expired token
      message: "Invalid or expired token",
      error: error.message
    });
  }
}


export async function refreshToken(req, res) {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({
      message: "Refresh token not found.."
    })
  }


  const decoded = jwt.verify(refreshToken, config.JWT_SECRET)


  const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");

  const session = await sessionModel.findOne({
    refreshTokenHash,
    revoked: false
  })


  if (!session) {
    return res.status(401).json({
      message: "Invalid refresh token"
    })
  }


  const accessToken = jwt.sign({
    id: decoded.id
  }, config.JWT_SECRET,
    {
      expiresIn: "15m"
    }
  )


  const newRefeshToken = jwt.sign({
    id: decoded.id
  }, config.JWT_SECRET,
    {
      expiresIn: "7d"
    }
  )



  const newRefeshTokenHash = newRefeshTokenHash;
  await session.save();



  res.cookie("refreshToken", newRefreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000 //7days
  })



  res.status(200).json({
    message: "Access token refresh successfully",
    accessToken
  })



}


export async function logout(req, res) {

  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    res.status(400).json({
      message: "Refresh token not found"
    })
  }


  const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");


  const session = await sessionModel.findOne({
    refreshTokenHash,
    revoked: false
  })


  if (!session) {
    return res.status(400).json({
      message: "Invalid refresh token"
    })
  }


  session.revoked = true;
  await session.save();

  res.clearCookie("refreshToken")


  res.status(200).json({
    message: "Logged out successfully"
  })



}


export async function logoutAll(req, res) {

  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(400).json({
      message: "Refresh token not found"
    })
  }

  const decoded = jwt.verify(refreshToken, config.JWT_SECRET);

  await sessionModel.updateMany({
    user: decoded.id,
    revoked: false
  }, {
    revoked: true
  })


  res.clearCookies("refreshToken")

  res.status(200).json({
    message: "Logged out from all device successfully . "
  })



}


export async function login(req, res) {

  const { email, password } = req.body;

  const user = await userModel.findOne({ email })

  if (!user) {
    return res.status(401).json({
      message: "Invalid email or password"
    })
  }


  const hashedPassword = crypto.createHash("sha256").update(password).digit("hex");

  //“Is the newly hashed password equal to the password stored in the database?”
  const isPasswordValid = hashedPassword === user.password;

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid email or password"
    })
  }


  const refreshToken = jwt.sign(
    { id: user._id },
    config.JWT_SECRET,
    { expiresIn: "7d" }
  )


  const refreshTokenHash = crypto.createHash("sha256").update(password).digest("hex");


  const session = await sessionModel.create({
    user: user._id,
    refreshTokenHash,
    ip: req.ip,
    userAgent: req.header["user-agent"]
  })



  const accessToken = jwt.sign(
    { id: user._id, sessionId: session._id },
    config.JWT_SECRET,
    { expiresIn: "15m" }
  );


  res.cookie("refreshToken", refreshToken, {
    httpOnly: true, //JavaScript in the browser CANNOT access this cookie.
    secure: true,
    sameSite: "strict",//Helps prevent CSRF attacks
    maxAge: 7 * 24 * 60 * 60 * 1000 //7days
  })


   res.status(200).json({
    mesage:"Logged in successfully",
    user:{
      username:user.username,
      email:user.email
    },
    accessToken,
   })


}







//auth.controller.js  documentation 

/*
|--------------------------------------------------------------------------
| auth.controller.js
|--------------------------------------------------------------------------
|
| Purpose:
| This file handles authentication and session related logic.
|
| What Is Authentication?
| Authentication means verifying user identity.
|
| Example:
| - user registration
| - user login
| - access token generation
| - refresh token management
| - logout system
|
|
| Why Do We Need This File?
|
| Instead of writing authentication logic inside routes,
| we separate the logic into controller files.
|
| This keeps:
| - routes clean
| - authentication organized
| - project scalable
| - session management easier
|
|
| What Do We Do Inside This File?
|
| - Register user
| - Login user
| - Generate access token
| - Generate refresh token
| - Store sessions
| - Get logged in user
| - Refresh access token
| - Logout user
| - Logout from all devices
|
|
| Authentication Flow:
|
| User Login/Register
|        ↓
| Generate Access Token (short time)
|        ↓
| Generate Refresh Token (long time)
|        ↓
| Store Refresh Token Hash In Database
|        ↓
| Send Access Token + Cookie
|        ↓
| Protected Routes Use Access Token
|        ↓
| Refresh Token Creates New Access Token
|
*/


// Import user model
import userModel from "../models/user.model.js";


// Import session model
import sessionModel from "../models/session.model.js";


// Import crypto module for hashing
import crypto from "crypto";


// Import JWT package
import jwt from "jsonwebtoken";


// Import config variables
import config from "../config/config.js";



/*
|--------------------------------------------------------------------------
| Register Controller
|--------------------------------------------------------------------------
|
| Purpose:
| Registers a new user.
|
| What Happens Here?
|
| - Check existing user
| - Hash password
| - Create user
| - Generate tokens
| - Create session
| - Store refresh token hash
| - Send cookie
| - Return access token
|
*/


export async function register(req, res) {

  try {

    // Get user data from frontend
    const { username, email, password } = req.body;



    // Check if user already exists
    const isAlreadyRegistered = await userModel.findOne({

      $or: [
        { username },
        { email }
      ]

    });



    // Prevent duplicate account creation
    if (isAlreadyRegistered) {

      return res.status(409).json({
        message: "User or email already exists"
      });

    }



    /*
    |--------------------------------------------------------------------------
    | Hash Password
    |--------------------------------------------------------------------------
    |
    | Password should never be stored as plain text.
    |
    | Hashing converts password into encrypted format.
    |
    */

    const hashedPassword = crypto

      .createHash("sha256")

      .update(password)

      .digest("hex");



    // Create new user
    const user = await userModel.create({

      username,
      email,
      password: hashedPassword

    });



    /*
    |--------------------------------------------------------------------------
    | Generate Refresh Token
    |--------------------------------------------------------------------------
    |
    | Refresh token is long-lived token.
    |
    | Used for creating new access tokens
    | without forcing user to login again.
    |
    */

    const refreshToken = jwt.sign(

      {
        id: user._id
      },

      config.JWT_SECRET,

      {
        expiresIn: "7d"
      }

    );



    /*
    |--------------------------------------------------------------------------
    | Hash Refresh Token
    |--------------------------------------------------------------------------
    |
    | Instead of storing original refresh token,
    | we store hashed version for security.
    |
    */

    const refreshTokenHash = crypto

      .createHash("sha256")

      .update(refreshToken)

      .digest("hex");



    /*
    |--------------------------------------------------------------------------
    | Create Session
    |--------------------------------------------------------------------------
    |
    | Session stores:
    | - user info
    | - refresh token hash
    | - IP address
    | - browser/device info
    |
    */

    const session = await sessionModel.create({

      user: user._id,

      refreshTokenHash,

      ip: req.ip,

      userAgent: req.headers["user-agent"]

    });



    /*
    |--------------------------------------------------------------------------
    | Generate Access Token
    |--------------------------------------------------------------------------
    |
    | Access token is short-lived token.
    |
    | Used for accessing protected routes.
    |
    */

    const accessToken = jwt.sign(

      {
        id: user._id,
        sessionId: session._id
      },

      config.JWT_SECRET,

      {
        expiresIn: "15m"
      }

    );



    /*
    |--------------------------------------------------------------------------
    | Store Refresh Token In Cookie
    |--------------------------------------------------------------------------
    |
    | httpOnly:
    | Browser JavaScript cannot access cookie.
    |
    | secure:
    | Cookie only works on HTTPS.
    |
    | sameSite:
    | Helps prevent CSRF attacks.
    |
    */

    res.cookie("refreshToken", refreshToken, {

      httpOnly: true,

      secure: true,

      sameSite: "strict",

      maxAge: 7 * 24 * 60 * 60 * 1000

    });



    // Send response
    res.status(201).json({

      message: "User registered successfully",

      user: {

        username: user.username,

        email: user.email

      },

      accessToken

    });

  } catch (error) {

    // Handle server errors
    res.status(500).json({

      message: "Internal server error",

      error: error.message

    });

  }

}




/*
|--------------------------------------------------------------------------
| Get Logged In User
|--------------------------------------------------------------------------
|
| Purpose:
| Returns current logged in user information.
|
| What Happens Here?
|
| - Get token from headers
| - Verify token
| - Find user
| - Return user data
|
*/


export async function getMe(req, res) {

  try {

    // Get token from Authorization header
    const token = req.headers.authorization?.split(" ")[1];



    // Check token existence
    if (!token) {

      return res.status(401).json({
        message: "Token not found"
      });

    }



    // Verify token
    const decoded = jwt.verify(token, config.JWT_SECRET);



    // Find user
    const user = await userModel.findById(decoded.id);



    // Check user existence
    if (!user) {

      return res.status(404).json({
        message: "User not found"
      });

    }



    // Send response
    res.status(200).json({

      message: "User fetched successfully",

      user: {

        username: user.username,

        email: user.email

      }

    });

  } catch (error) {

    // Handle invalid token
    res.status(401).json({

      message: "Invalid or expired token",

      error: error.message

    });

  }

}




/*
|--------------------------------------------------------------------------
| Refresh Token Controller
|--------------------------------------------------------------------------
|
| Purpose:
| Creates new access token using refresh token.
|
| Why Is This Important?
|
| Access token expires quickly.
|
| Refresh token allows user to stay logged in
| without entering password again.
|
*/


export async function refreshToken(req, res) {

  try {

    // Get refresh token from cookie
    const refreshToken = req.cookies.refreshToken;



    // Check token existence
    if (!refreshToken) {

      return res.status(401).json({
        message: "Refresh token not found"
      });

    }



    // Verify refresh token
    const decoded = jwt.verify(

      refreshToken,
      config.JWT_SECRET

    );



    // Hash refresh token
    const refreshTokenHash = crypto

      .createHash("sha256")

      .update(refreshToken)

      .digest("hex");



    // Find valid session
    const session = await sessionModel.findOne({

      refreshTokenHash,

      revoked: false

    });



    // Check session existence
    if (!session) {

      return res.status(401).json({
        message: "Invalid refresh token"
      });

    }



    // Generate new access token
    const accessToken = jwt.sign(

      {
        id: decoded.id,
        sessionId: session._id
      },

      config.JWT_SECRET,

      {
        expiresIn: "15m"
      }

    );



    // Generate new refresh token
    const newRefreshToken = jwt.sign(

      {
        id: decoded.id
      },

      config.JWT_SECRET,

      {
        expiresIn: "7d"
      }

    );



    // Hash new refresh token
    const newRefreshTokenHash = crypto

      .createHash("sha256")

      .update(newRefreshToken)

      .digest("hex");



    // Update session
    session.refreshTokenHash = newRefreshTokenHash;

    await session.save();



    // Store new cookie
    res.cookie("refreshToken", newRefreshToken, {

      httpOnly: true,

      secure: true,

      sameSite: "strict",

      maxAge: 7 * 24 * 60 * 60 * 1000

    });



    // Send response
    res.status(200).json({

      message: "Access token refreshed successfully",

      accessToken

    });

  } catch (error) {

    res.status(401).json({

      message: "Invalid or expired refresh token",

      error: error.message

    });

  }

}




/*
|--------------------------------------------------------------------------
| Logout Controller
|--------------------------------------------------------------------------
|
| Purpose:
| Logs out current device/session.
|
| What Happens Here?
|
| - Find refresh token
| - Revoke session
| - Clear cookie
|
*/


export async function logout(req, res) {

  try {

    // Get refresh token
    const refreshToken = req.cookies.refreshToken;



    // Check token existence
    if (!refreshToken) {

      return res.status(400).json({
        message: "Refresh token not found"
      });

    }



    // Hash refresh token
    const refreshTokenHash = crypto

      .createHash("sha256")

      .update(refreshToken)

      .digest("hex");



    // Find active session
    const session = await sessionModel.findOne({

      refreshTokenHash,

      revoked: false

    });



    // Check session existence
    if (!session) {

      return res.status(400).json({
        message: "Invalid refresh token"
      });

    }



    // Revoke session
    session.revoked = true;

    await session.save();



    // Clear cookie
    res.clearCookie("refreshToken");



    // Send response
    res.status(200).json({

      message: "Logged out successfully"

    });

  } catch (error) {

    res.status(500).json({

      message: "Internal server error",

      error: error.message

    });

  }

}




/*
|--------------------------------------------------------------------------
| Logout All Devices Controller
|--------------------------------------------------------------------------
|
| Purpose:
| Logs out user from all devices.
|
| Example:
| - mobile
| - laptop
| - tablet
|
*/


export async function logoutAll(req, res) {

  try {

    // Get refresh token
    const refreshToken = req.cookies.refreshToken;



    // Check token existence
    if (!refreshToken) {

      return res.status(400).json({
        message: "Refresh token not found"
      });

    }



    // Verify token
    const decoded = jwt.verify(

      refreshToken,
      config.JWT_SECRET

    );



    // Revoke all sessions
    await sessionModel.updateMany(

      {
        user: decoded.id,
        revoked: false
      },

      {
        revoked: true
      }

    );



    // Clear cookie
    res.clearCookie("refreshToken");



    // Send response
    res.status(200).json({

      message: "Logged out from all devices successfully"

    });

  } catch (error) {

    res.status(500).json({

      message: "Internal server error",

      error: error.message

    });

  }

}




/*
|--------------------------------------------------------------------------
| Login Controller
|--------------------------------------------------------------------------
|
| Purpose:
| Authenticates existing user.
|
| What Happens Here?
|
| - Find user
| - Verify password
| - Generate tokens
| - Create session
| - Store cookie
|
*/


export async function login(req, res) {

  try {

    // Get user credentials
    const { email, password } = req.body;



    // Find user by email
    const user = await userModel.findOne({ email });



    // Check user existence
    if (!user) {

      return res.status(401).json({
        message: "Invalid email or password"
      });

    }



    // Hash incoming password
    const hashedPassword = crypto

      .createHash("sha256")

      .update(password)

      .digest("hex");



    /*
    |--------------------------------------------------------------------------
    | Password Verification
    |--------------------------------------------------------------------------
    |
    | Compare hashed password with database password.
    |
    */

    const isPasswordValid = hashedPassword === user.password;



    // Check password validity
    if (!isPasswordValid) {

      return res.status(401).json({
        message: "Invalid email or password"
      });

    }



    // Generate refresh token
    const refreshToken = jwt.sign(

      {
        id: user._id
      },

      config.JWT_SECRET,

      {
        expiresIn: "7d"
      }

    );



    // Hash refresh token
    const refreshTokenHash = crypto

      .createHash("sha256")

      .update(refreshToken)

      .digest("hex");



    // Create session
    const session = await sessionModel.create({

      user: user._id,

      refreshTokenHash,

      ip: req.ip,

      userAgent: req.headers["user-agent"]

    });



    // Generate access token
    const accessToken = jwt.sign(

      {
        id: user._id,
        sessionId: session._id
      },

      config.JWT_SECRET,

      {
        expiresIn: "15m"
      }

    );



    // Store cookie
    res.cookie("refreshToken", refreshToken, {

      httpOnly: true,

      secure: true,

      sameSite: "strict",

      maxAge: 7 * 24 * 60 * 60 * 1000

    });



    // Send response
    res.status(200).json({

      message: "Logged in successfully",

      user: {

        username: user.username,

        email: user.email

      },

      accessToken

    });

  } catch (error) {

    res.status(500).json({

      message: "Internal server error",

      error: error.message

    });

  }

}