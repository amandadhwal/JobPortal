import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"name is required"]
        },
        lastname:{
            type:String
        },
        email:{
            type:String,
            required:[true,"email is required"],
            unique:true,
            validator:validator.isEmail,
            message: "Please provide a valid email",
        },
        password:{
            type:String,
            required:[true,"password is required"]
        },
        location:{
            type:String,
            default: "India"
        }
       
    },{timestamps:true}
);

//middleware
userSchema.pre("save",async function()
{
    const salt = await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);

});


userSchema.methods.createJWT=function(){
    return JWT.sign({userID:this._id},process.env.JWT_SECRET,{expiresIn:'1D'});
}

export default mongoose.model('User',userSchema);
