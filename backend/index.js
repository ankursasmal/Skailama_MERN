require('dotenv').config();
const express=require('express');
const  rout  = require('./route/router');
const cors=require('cors')
let app=express();
let cookie=require('cookie-parser');
let connections=require('./db/contection');
const auth = require('./middleware/auth');

 const PORT=process.env.PORT || 3000;

 app.use(cookie());
 app.use(express.json());
 app.use(cors({
  origin: 'http://localhost:5173', // Allow Vite frontend
  methods: ['GET', 'POST', 'PATCH', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
 
app.use("/api",rout);

connections.then(()=>{
  app.listen(PORT,()=>{
    console.log(`server running ${PORT} ,Db connect`);
})
}).catch(()=>{
     console.log(`server running ${PORT}`,`Db Not connect`);

})
