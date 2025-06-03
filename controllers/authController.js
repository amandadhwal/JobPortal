import userModel from "../models/userModel.js";

export const registerController=async(req,res,next)=>
{
    // try {
        const {name,email,password} = req.body;
        if(!name)
        {
            // return res.status(400).send({message:`name is required`,success:false})
            next("name is require");
        }
        if(!email)
        {
            // return res.status(400).send({message:`email is required`,success:false})
            next("email is require");
        }
        if(!password)
        {
            // return res.status(400).send({message:`password is required`,success:false})
            next("password is require");
        }

        // const existingUser = await userModel.findOne({email})
        // if(existingUser){
        //     next("email is already register");
        //     // return res.status(200).send({message:`email is already exist`,
        //     //     success:false,
        // // })
        // }

        const user = await userModel.create({name,email,password});
        // res.status(201).send({
        //     message:`user created successfully`,
        //     success:true,
        //     user,
        // })

        //token
        const token = user.createJWT();
        res.status(200).send({
            message:"user created successfully",
            user:{
                name:user.name,
                lastname :user.lastname,
                email:user.email,
                location:user.location

            },token
        })


    // } catch (error) {
    //     next(error);
    // }

}
// export default registerController;