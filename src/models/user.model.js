import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"; //encrytion of password
import bcrypt from "bcrypt"; //encryption of password


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true //for searching in db optimized way
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
        index: true
  
    },
    username: {
        type: String, //cloudinary url
        required: true,      
    },
    coverImage: {
        type: String,
      

    },
    watchHistory: [{
        type: Schema.Types.ObjectId,
        ref: "Video"
    }
    ],
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    refreshToken: {
        type: String
    }
}, {timestamps: true}); 


userSchema.pre("save", async function (next) {
    if(!this.isModified("password")){
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});
userSchema.methods.isPasswordCorrect = async function (Password) {
    return await bcrypt.compare(Password, this.password);

}
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            __id : this._id,
            username: this.username,
            email: this.email,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefereshToken = function () {
}

export const user = mongoose.model("User", userSchema)