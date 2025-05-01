 const coneection=require('../db/contection');
const UserModels = require("../model/userModel");

// get file uploadeded data
const userDetail = async (req, res) => {
    try {
       const { _id } = req.user;
       const idString = _id.toString();
       
       const UploadData = await UserModels.findOne({_id:idString});
  
      if (!UploadData) {
        throw new Error('Project not found');
      }
//   console.log(UploadData)
      
  res.status(200).json({
        mess: "user data adataa",
        success: true,
        error: false,
        data: UploadData,
      });
  
    } catch (e) {
      console.error(e);
      res.status(500).json({
        mess: "user data failed",
        success: false,
        error: true,
      });
    }
  };


module.exports = {userDetail};
