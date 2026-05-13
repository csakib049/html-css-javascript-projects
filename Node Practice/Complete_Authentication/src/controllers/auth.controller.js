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