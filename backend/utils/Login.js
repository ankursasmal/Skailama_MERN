 require('dotenv').config();
 let bcript=require('bcryptjs');
let connections=require('../db/contection')
 let jwt=require('jsonwebtoken');
const UserModels = require('../model/userModel');

const login=async(req,res)=>{
    try{
        let {email,password}=req.body;
         if(email=='' ||password==''){
            throw new Error('fill the form properly')
        }
         
         let data=await UserModels.findOne({email:email});
        //  console.log(data)
            let isMatch=await bcript.compare(password,data.password);
              if(!isMatch){
                throw new Error('not login succes')
            }
            if(!data){
                throw new Error('not login succes')
 }
            
        let tokon= jwt.sign({_id:data._id},process.env.SECRET_KEY,{expiresIn:'30d'});
        //    console.log(tokon);
        res.cookie('jwt',tokon,{expiresIn:'3d',httpOnly:true,secure:true});
        return res.status(200).json({ message: 'Login successful', success: true });


    }
    catch(e){
console.log('login not success');
res.status(400).json({mess:'login not success',e:e.message,success:false})
    }
}

module.exports=login