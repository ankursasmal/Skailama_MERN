let jwt =require('jsonwebtoken');
const UserModels = require('../model/userModel');
 
let auth=async(req,res,next)=>{
    try{
let tokon=req.cookies.jwt ;

 let verifiedUser= jwt.verify(tokon,process.env.SECRET_KEY);
 
let user=await UserModels.findOne({_id:verifiedUser._id});
// console.log('verifiedUser',user);

 req.tokon=tokon;
   req.user=user;
 next();
    }
    catch(e){
        res.status(404).json({
            mess:'not auth ',
            success:false,
            error:true,
            e:e.message || e
        })
    }
}
module.exports=auth;