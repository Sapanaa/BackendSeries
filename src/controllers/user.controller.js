// asynchandler is the file that contains the asyncHandler function we donnot need to have try catch in every file

import asyncHandler from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "ok",
    })   
})  
export {registerUser};