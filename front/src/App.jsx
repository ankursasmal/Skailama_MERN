 import React, { useEffect, useState } from 'react'
 
import { ToastContainer, toast } from 'react-toastify';
import { Outlet } from 'react-router-dom'
import { createContext } from 'react';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './Redux/userSlice';
import SummeryApi from './summeryApi';
const Context = createContext(null);

 function App() {

  const dispatch=useDispatch();
  
  const AuthUserDetail=async()=>{
    try{ 
      let res=await fetch(SummeryApi.User_Info.url ,{
      method:SummeryApi.User_Info.method,
      headers:{
         'Content-Type':'application/json',
      },   
      credentials:"include",
   })
 let data= await res.json();
 
if(data.success){
   dispatch(setUserDetails(data.data));
 }
 else{
  // toast.error('not authorize user');
  console.log('not authorize user' )

 }
  
 }
    catch(e){
      console.log('not authorize user',e)

      toast.error('not authorize user');
}
  }


  useEffect(()=>{
    AuthUserDetail();
  },[])




   return (
     <div   >
      <Context.Provider value={{
      AuthUserDetail, }}> 
              <ToastContainer />
<Outlet/>
 
       {/* <ViweProjectDetail/> */}
      {/* <Save_EditPage/> */}
      </Context.Provider>

      </div>
   )
 }
 
 export default App
 
 
 export {Context};
 