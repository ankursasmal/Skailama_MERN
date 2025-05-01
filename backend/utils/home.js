let homeget=async(req,res)=>{
    try{
    res.json({
        mess:"data come ",
        success:true,
        error:false,
        status:200
     } )
    }
    
    catch(e){
        res.json({
            mess:e.message,
            success:false,
            error:true,
            status:400
        })
    }
}
module.exports=homeget;