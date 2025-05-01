require('dotenv').config();

const mongoose=require('mongoose');
  
 
const USERNAME1 = encodeURIComponent(process.env.MONGO_USER);
const PASSWORD1 = encodeURIComponent(process.env.MONGO_PASS);

// console.log(USERNAME1);

// Only export function to connect, not Promise
  const connections =  
       mongoose.connect(`mongodb+srv://${USERNAME1}:${PASSWORD1}@cluster0.sgwwiml.mongodb.net/Projects?retryWrites=true&w=majority&appName=Cluster0`).then(()=>{
        console.log('MongoDB Connected');

       })
   . catch (( )=>{
    console.error(' MongoDB Connection Failed:', error.message);

   }) 
   module.exports=connections;