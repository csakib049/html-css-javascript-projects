import { Router } from "express";
import * as authController from "../controllers/auth.controller.js"

const authRouter = Router();



authRouter.post("/register",authController.register)

authRouter.post("/login",authController.login)

authRouter.post("/get-me",authController.getMe)

authRouter.post("/refresh-token",authController.refreshToken)

authRouter.post("/logout",authController.logout)

authRouter.post("/logout-all",authController.logoutAll)





export default authRouter;




//auth.routes.js documentation




/*
|--------------------------------------------------------------------------
| auth.routes.js
|--------------------------------------------------------------------------
|
| Purpose:
| This file contains all authentication related API routes.
|
| What Is A Route?
| Routes define backend API endpoints.
|
| Example:
| - /register
| - /login
| - /logout
| - /refresh-token
|
| Routes decide:
| - which URL should run
| - which controller should execute
| - which logic should handle request
|
|
| Why Do We Need This File?
|
| Instead of writing all routes inside one file,
| we separate routes by feature.
|
| This makes project:
| - cleaner
| - scalable
| - easier to maintain
| - easier to debug
|
|
| What Do We Usually Do Inside This File?
|
| - Create express router
| - Define authentication routes
| - Connect controllers
| - Organize API endpoints
|
|
| Authentication Routes In This File
|
| POST /register
| → Create new user account
|
| POST /login
| → Login existing user
|
| POST /get-me
| → Get current logged in user
|
| POST /refresh-token
| → Create new access token
|
| POST /logout
| → Logout current device
|
| POST /logout-all
| → Logout from all devices
|
|
| Request Flow Example
|
| Frontend Request
|        ↓
| auth.routes.js
|        ↓
| auth.controller.js
|        ↓
| Database / Token Logic
|        ↓
| Response Sent Back
|
*/


// Import Router from express
import { Router } from "express";


// Import all authentication controllers
import * as authController from "../controllers/auth.controller.js";



// Create router object
const authRouter = Router();



/*
|--------------------------------------------------------------------------
| Register Route
|--------------------------------------------------------------------------
|
| Endpoint:
| POST /register
|
| Purpose:
| Creates new user account.
|
*/

authRouter.post(

  "/register",

  authController.register

);




/*
|--------------------------------------------------------------------------
| Login Route
|--------------------------------------------------------------------------
|
| Endpoint:
| POST /login
|
| Purpose:
| Authenticates user and returns tokens.
|
*/

authRouter.post(

  "/login",

  authController.login

);




/*
|--------------------------------------------------------------------------
| Get Current User Route
|--------------------------------------------------------------------------
|
| Endpoint:
| POST /get-me
|
| Purpose:
| Returns current logged in user data.
|
*/

authRouter.post(

  "/get-me",

  authController.getMe

);




/*
|--------------------------------------------------------------------------
| Refresh Token Route
|--------------------------------------------------------------------------
|
| Endpoint:
| POST /refresh-token
|
| Purpose:
| Creates new access token using refresh token.
|
*/

authRouter.post(

  "/refresh-token",

  authController.refreshToken

);




/*
|--------------------------------------------------------------------------
| Logout Route
|--------------------------------------------------------------------------
|
| Endpoint:
| POST /logout
|
| Purpose:
| Logs out current device/session.
|
*/

authRouter.post(

  "/logout",

  authController.logout

);




/*
|--------------------------------------------------------------------------
| Logout All Devices Route
|--------------------------------------------------------------------------
|
| Endpoint:
| POST /logout-all
|
| Purpose:
| Logs out user from all devices.
|
*/

authRouter.post(

  "/logout-all",

  authController.logoutAll

);




// Export router
export default authRouter;