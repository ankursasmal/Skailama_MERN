 let bcrypt=require('bcryptjs');
let connections=require('../db/contection');
const UserModels = require("../model/userModel");

const signup=async(req,res)=>{

    try{
        let payload=req.body;
         if(payload.name =='' ||payload.email ==''  || payload.password =='' ||payload.cpassword ==''){
throw new Error ('field properly');
        }
if(payload.password !== payload.cpassword){
    throw new Error ('field proper passsword');

}

let user=await UserModels.findOne({email:payload.email});
if(user){
    throw new Error ('already register');

}

let newPassword=await bcrypt.hash(payload.password,10);
// console.log(newPassword)

let newUser={...payload,password:newPassword,role:'GENERAL'};
 
let userData=await new UserModels(newUser);

// console.log(userData)
    let data=await  userData.save();   
        res.json({
            mess:"data come",
            success:true,
            error:false,
            status:201,
            data:data
         } )
    }
    catch(e){
        res.json({
            mess:"data not come",
            success:false,
            error:true,
            status:400
         } )
    }
}
module.exports=signup