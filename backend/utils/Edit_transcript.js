const ProjectModel = require("../model/ProjectModel");
let connection=require('../db/contection')


// for rout.patch('/project/:projectId/file/:fileIndex',EditTranscript)

  const EditTranscript=async (req, res) => {
    const { projectId, fileIndex } = req.params;
    const { transcript } = req.body;
  
    try {
      const project = await ProjectModel.findById(projectId);
      if (!project) {
        return res.status(404).json({ success: false, message: 'Project not found' });
      }
  
      const index = parseInt(fileIndex);
      if (isNaN(index) || index < 0 || index >= project.files.length) {
        return res.status(400).json({ success: false, message: 'Invalid file index' });
      }
  
      // Update the transcript
      project.files[index].transcript = transcript;
      await project.save();
    //   console.log(project)
  
      res.json({ success: true, message: 'Transcript updated successfully' });
    } catch (err) {
      console.error('Error updating transcript:', err);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  }

module.exports=EditTranscript;