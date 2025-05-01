const ProjectModel = require('../model/ProjectModel');
let connections=require('../db/contection');

const uploadFiles = async (req, res) => {
  try {
    const { transcript, upload_link } = req.body;
    const { id } = req.params;

    if (!upload_link || !transcript) {
      return res.status(400).json({
        mess: "Missing upload_link or transcript",
        success: false,
        error: true,
      });
    }

    const newFile = {
      upload_link,
      transcript,
      upload_time: new Date(),
    };

    const updatedProject = await ProjectModel.findByIdAndUpdate(
      id,
      { $push: { files: newFile } },
      { new: true }
    );

    if (!updatedProject) {
      throw new Error('Project not found');
    }
// console.log(updatedProject)
    res.status(200).json({
      mess: "File uploaded",
      success: true,
      error: false,
      data: updatedProject,
    });

  } catch (e) {
    console.error(e);
    res.status(500).json({
      mess: "Upload failed",
      success: false,
      error: true,
    });
  }
};





// get file uploadeded data
const uploadFilesDataGet = async (req, res) => {
    try {
       const { id } = req.params;
      const UploadData = await ProjectModel.findById({_id:id});
  
      if (!UploadData) {
        throw new Error('Project not found');
      }
//   console.log(UploadData)
      
  res.status(200).json({
        mess: "File uploaded adataa",
        success: true,
        error: false,
        data: UploadData,
      });
  
    } catch (e) {
      console.error(e);
      res.status(500).json({
        mess: "Upload failed",
        success: false,
        error: true,
      });
    }
  };


module.exports = {uploadFiles,uploadFilesDataGet};
