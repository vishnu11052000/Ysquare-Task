const express=require('express');
const uuidv4=require('uuid').v4;
const   bcrypt=require('bcrypt');
const router=express.Router();
const jwt=require('jsonwebtoken');
const userRegister=require('../model/authModel');



const JWT_SECRET_KEY = 'klasjflk3kkj3o090932iofjo!@iop2jiojj';

//register
router.post('/register',async(req,res)=>{
    console.log('request',req.body);

    try {
        const {name,email,password}= req.body
        if(!name || !email || !password){
            return res.status(400).json({
                message:"All fields are required"
            })
        }

        const existmail=await userRegister.findOne({email})
        if(existmail){
            return res.status(400).json({
                message:"User email is already exists"
            })
        }
        else{

            const saltRound=10;
            const hashpassowrd=await bcrypt.hash(password,saltRound)
            const user=await userRegister.create({id:uuidv4(),name,email,password:hashpassowrd})
            user.save()
            return res.status(200).json({
                message:'User Registered Successfully'
            })
        }
    } catch (error) {   
        return res.status(400).json({
            message:error.message
        })
    }
})




//login
router.post('/login',async(req,res)=>{
    try {
        const{email,password}=req.body;
        const existingData=await userRegister.findOne({email});

        // if(existingData){
        //     const isPasswordValid=await bcrypt.compare(password,existingData.password);
        //     if(isPasswordValid){
        //         const token =jwt.sign({id :existingData._id},JWT_SECRET_KEY,{expiresIn:'5h'});
        //         return  res.status(200).json({
        //             message:existingData,
        //             token
        //         })
        //     }
        //     else{
        //         return res.status(400).json({
        //             message:'User not Found'
        //         })
        //     }
        // }
        if (!existingData) {
            return res.status(400).json({
                success: false,
                message: 'User not found'
            });
        }

        const isPasswordValid = await bcrypt.compare(password, existingData.password);
        if (!isPasswordValid || isPasswordValid.length <6 ) {
            return res.status(400).json({
                success: false,
                message: 'Invalid password'
            });
        }

        const token = jwt.sign({ id: existingData._id }, JWT_SECRET_KEY, { expiresIn: '3m' });

        return res.status(200).json({
            success: true,
            message: 'Login successful',
            token
        });
    }
   catch (error) {
          return res.status(500).json({
           ErrorMessage :error.message
          })
    }
})



module.exports=router;