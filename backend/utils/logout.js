

let Logout=async(req,res)=>{
    try{
        res.clearCookie('jwt');
         res.status(200).json({
            success:true,
            data:[],
            error:false
        })
    }
    catch(e){
        console.log('not authorize');
        res.status(404).json({mess:'not authorize',
            e:e.message,
            success:false,
         })
    }
}
 module.exports=Logout