import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js"

const app = express();


app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());



app.use("/api/auth",authRouter)




export default app ; 



//app.js documentation

/*
|--------------------------------------------------------------------------
| app.js
|--------------------------------------------------------------------------
|
| Purpose:
| Creates and configures the Express application.
|
| Why Do We Need This File?
|
| This file keeps application setup separate
| from server startup logic.
|
| This makes the project:
| - cleaner
| - modular
| - scalable
|
|
| What Do We Usually Configure Here?
|
| - express app
| - middlewares
| - routes
| - request parsing
|
|
| Middlewares Used
|
| express.json()
| → Parses JSON request body
|
| morgan("dev")
| → Logs API requests in terminal
|
| cookieParser()
| → Reads browser cookies
|
*/


// Import express
import express from "express";


// Import request logger middleware
import morgan from "morgan";


// Import cookie parser middleware
import cookieParser from "cookie-parser";


// Import authentication routes
import authRouter from "./routes/auth.routes.js";



// Create express app
const app = express();



// Parse JSON request body
app.use(express.json());


// Show API logs in terminal
app.use(morgan("dev"));


// Parse cookies
app.use(cookieParser());



/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| All authentication routes start with:
|
| /api/auth
|
| Example:
| /api/auth/register
| /api/auth/login
|
*/

app.use("/api/auth", authRouter);



// Export app
export default app;