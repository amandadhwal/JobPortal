const errormiddleware=(err,req,res,next)=>{
    console.log(err),
    res.status(500).send({
        success:false,
        message:"somthing went wrong",
        err,
    });
}
export default errormiddleware;