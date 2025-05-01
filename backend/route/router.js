require('dotenv').config();
let express=require('express');
const homeget = require('../utils/home');
const signup = require('../utils/Signup');
const login = require('../utils/Login');
let connections=require('../db/contection')
let rout=express.Router();
let cookie=require('cookie-parser');
const auth = require('../middleware/auth');
const { UserpojectDetail, AllpojectDetail, pojectAd } = require('../utils/ProjectAdd');
const { uploadFilesDataGet, uploadFiles } = require('../utils/EditProject');
const Logout = require('../utils/logout');
const { userDetail } = require('../utils/UserDetail');
const EditTranscript = require('../utils/Edit_transcript');
const DeleteUploadFile = require('../utils/DeletUpload_file');
   
rout.use(cookie());
rout.get('/',homeget);
rout.post('/signup', signup);
rout.post('/login', login);
rout.get('/users',auth,userDetail);
rout.post('/project',auth,pojectAd);
rout.get('/project-list',auth,UserpojectDetail);
rout.get('/AllprojectList',auth,AllpojectDetail);
rout.patch('/project/:id',auth,uploadFiles);
rout.get('/project/:id',auth,uploadFilesDataGet);
rout.get('/logout',auth,Logout) 
rout.patch('/project/:projectId/file/:fileIndex',EditTranscript)
rout.put('/project/:projectId/file/:fileIndex',DeleteUploadFile)

module.exports=rout