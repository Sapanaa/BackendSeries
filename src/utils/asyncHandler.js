const asyncHandler = (requestHandler) => {(req, res, next) =>{
    return Promise.resolve(requestHandler(req, res, next)).catch(() => next(err));
}
};
export {asyncHandler}

/*
const asyncHandler = (fn) => async(req, res, next) => {
    try{
        await fn(req, res, next);
    } catch (err) {
        res.status(err.code || 500).json({message: err.message});
    }

};*/