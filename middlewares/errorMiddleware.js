const errormiddleware=(err,req,res,next)=>{
    console.log(err);

    const defaultError={
        statusCode:500,
        message:err,
    }
    // res.status(500).send({
    //     success:false,
    //     message:"somthing went wrong",
    //     err,
    // });
     
    //missing field
    if(err.name == "ValidationError")
    {
        defaultError.statusCode=400,
        defaultError.message= Object.values(err.errors).map((item)=> item.message).join(",");
    }

    if(err.code && err.code==11000)
    {
        defaultError.statusCode=400,
        defaultError.message=`${Object.keys(err.keyValue)} field has to be unique`;
    }
    res.status(defaultError.statusCode).json({message:defaultError.message});
}
export default errormiddleware;