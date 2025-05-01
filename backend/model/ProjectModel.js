const mongoose = require('mongoose');
const validator = require('validator');
const { Schema } = mongoose;

const ProjectSchema = new Schema({
  projectName: {
    type: String,
    required: true,
   },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'UserModels',
   },
  project_time: {
    type: Date,
    default: Date.now,
  },
  
  files: [
    {
      upload_link: {
        type: String,
        validate: {
          validator: function (v) {
            return validator.isURL(v);
          },
          message: props => `${props.value} is not a valid URL!`,
        },
      },
     
      transcript:{
        type:String
      },
      upload_time: {
        type: Date,
        default: Date.now,
      },
    }
  ],
  author: {
    type: String,
    trim: true,
  }
});

// Model name is 'Project'
const ProjectModel = mongoose.model('ProjectModel', ProjectSchema);

module.exports = ProjectModel;
