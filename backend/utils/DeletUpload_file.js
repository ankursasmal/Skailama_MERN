let ProjectModel = require("../model/ProjectModel");
let connection=require('../db/contection')


let DeleteUploadFile= async (req, res) => {
    const { projectId, fileIndex } = req.params;
    try {
      const project = await ProjectModel.findById(projectId);
      const index = parseInt(fileIndex);
      project.files.splice(index, 1);
      await project.save();
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Server error' });
    }
}

module.exports=DeleteUploadFile
  