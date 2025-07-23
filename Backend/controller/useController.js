import validator from "validator"
import userModel from '../models/useModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const createToken =(id)=>{
   return jwt.sign({id}, process.env.JWT_SECRET)

}
//route for user login

    const loginuser =async(req,res)=>{
        try{
            const {email , password} =req.body;

            const user = await userModel.findOne({email});


            if(!user){
                return res.json({success:false , message:"user doesnt exists"})

            }
            const isMatch =await bcrypt.compare(password , user.password);

            if(isMatch){
                const token = createToken(user._id)
                res.json({success:true , token})
            }
            else{
                res.json({success:false , message :"invalid credentials"})
            }
        }
        catch(error){

        }

    }



//route for user registration

const registeruser = async(req ,res)=>{

    try{
        const{name , email , password } =req.body;

        const exists = await userModel.findOne({email})

        

if(exists){
    return res.json({success:false , message:"user already exists"})
}
if(!validator.isEmail(email)){
     return res.json({success:false , message:"please enter valid email"})

}
if(password.length <8){
     return res.json({success:false , message:"password must be more than 8 characters"})

}
//hasing youe passwrd
const salt = await bcrypt.genSalt(10)
const hashedPassword = await  bcrypt.hash(password,salt)


const newUser = new userModel({
    name,
    email,
    password:hashedPassword
})

const user = await newUser.save();

const token =createToken(user._id)

res.json({success:true ,token})
//validating email and format sreong password

}
    catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

//route for admin login
const adiminlogin = (req , res )=>{

    
        const {email , password} =req.body
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})
        }
        else{
            res.json({success:false,message:"invalid adminlogin"})
        }
    
    }


export {loginuser,registeruser ,adiminlogin }