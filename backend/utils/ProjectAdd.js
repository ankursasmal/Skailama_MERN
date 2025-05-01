 let connections=require('../db/contection');
const ProjectModel = require('../model/ProjectModel');
 
const pojectAd=async(req,res)=>{

    try{   
         let payload=req.body;
          let {name,_id}=req.user;
         const idString = _id.toString();

        //  console.log(name,idString)
        

        if(payload.Projectname =='' ){
throw new Error ('field properly');
        }
let project=await ProjectModel.findOne({projectName:payload.projectName});
if(project){
    throw new Error ('already exist try diff name');

}
 let newProject={...payload,userId:idString,author:name};
//  console.log("newProject",newProject)
 let Data=await new ProjectModel(newProject);
//  console.log('Data',Data)

 let data=await  Data.save(); 
//  console.log('dataa',data)  
  res.json({
            mess:"data store come",
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


// for role =="GENERAL"
const UserpojectDetail = async (req, res) => {
    try {
      let { name, _id } = req.user;
      const idString = _id.toString();
      
      const project = await ProjectModel.find({ userId: idString });
  
      if (!project || project.length === 0) {
        throw new Error('No projects found');
      }
  
      res.status(200).json({
        mess: "Data fetched successfully",
        success: true,
        error: false,
        status: 200,
        data: project
      });
    } catch (e) {
      res.status(400).json({
        mess: e.message || "Data not fetched",
        success: false,
        error: true,
        status: 400
      });
    }
  };
  

// for role =="ADMIN"
const AllpojectDetail=async(req,res)=>{

    try{  
          let (_id,role)=req.user;
 if(role!=='ADMIN'){
throw new Error('Not Authentiacte');
}
 
let project=await ProjectModel.find();
if(!project){
    throw new Error (' ');

}
         res.json({
            mess:"data store come",
            success:true,
            error:false,
            status:201,
            data:project
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







module.exports={pojectAd,UserpojectDetail,AllpojectDetail}