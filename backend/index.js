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
 const allowedOrigins = [
   'http://localhost:5173',   
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PATCH', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
 
app.use("/",rout);

connections.then(()=>{
  app.listen(PORT,()=>{
    console.log(`server running ${PORT} ,Db connect`);
})
}).catch(()=>{
     console.log(`server running ${PORT}`,`Db Not connect`);

})
