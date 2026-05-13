import mongoose from "mongoose";
import { refreshToken } from "../controllers/auth.controller";



const sessioSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, "User is required"]
    },
    refreshTokenHash: {
        type: String,
        required: [true, "Refresh token hash is required"]
    },
    ip: {
        type: String,
        required: [true, "Ip address is required"]

    },
    userAgent: {
        type: String,
        required: [true, "Ip address is required"]
    },
    revoked: {
        type: Boolean,
        default: false
    },{
    timestamps: true
}
})



const sessionModel = mongoose.model("session", sessionSchema)


export default sessionModel;