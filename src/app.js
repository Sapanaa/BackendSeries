import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

//cors for cross origin request which allows us to make request from one domain to another
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}
))

//.use is used for the configuration
app.use(express.json({limit: '16kb'})); //after filling the form
app.use(express.urlencoded({extended: true, limit: '16kb'})); //encoded data
app.use(express.static('public')); //file and folder storage that will make the public assest folder
app.use(cookieParser()); //access the cookie from the user that is logged in server can only access the cookie

//routes import
import userRouter from "./routes/user.routes.js";


//routes declaration
app.use("/api/v1/users", userRouter);
//http://localhost:8000/api/v1/users/
export default app;