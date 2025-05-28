import React, { useContext, useState } from 'react';
import Text from '../AllSmallComponent/Text';
import Group22 from '../assets/Group22.png';
import QuesLogo from '../assets/QuesLogo.png';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Context } from '../App';
import SummeryApi from '../summeryApi';

function Home_Image() {
  const [data, setData] = useState({ name: "", email: "", password: "", cpassword: "" });
  const [showSignup, setShowSignup] = useState(true);
  const navigate = useNavigate();
const {AuthUserDetail}=useContext(Context);

  const handelData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handelSignup = async (e) => {
     try {
 
      const res = await fetch(SummeryApi.signUp.url, {
        method: SummeryApi.signUp.method,
        headers: { 'Content-Type': 'application/json' },
        credentials:'include',
        body: JSON.stringify(data),
      });
      // console.log(res)

       const result = await res.json();
      //  console.log(result)
      if (result.success) {
        toast.success('Signup successful. Please login.');
        setShowSignup(true);
        navigate('/');
      } else {
        toast.error('Signup failed/already register');
      }
    } catch (err) {
      toast.error('Signup failed.');
      console.error('Signup error:', err);
    }
  };

  const handelLogin = async (e) => {
     try {
       const res = await fetch(SummeryApi.Login.url, {
        method: SummeryApi.Login.method,
        credentials:'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        AuthUserDetail();
        toast.success('Login successful');
        navigate('/create');
      } else {
        toast.error('Login failed');
      }
    } catch (err) {
      toast.error('Login failed');
      console.error('Login error:', err);
    }
  };

  return (
    <div className='flex items-center h-[100vh] w-[100vw]'>
      {/* Left Side Image */}
      <div className="w-[64vw] bg-[linear-gradient(231.62deg,_#C37EFF_-26.53%,_#3A0B63_117.16%)] h-[100vh]">
        <img src="/Group.png" alt="Group Background" className="w-full h-screen object-cover" />
        <div className='absolute top-[3vw] left-[3vw]'>
          <div className='flex flex-col w-[35vw]'>
            <img src={QuesLogo} alt="QuesLogo" className="w-[12rem] h-[2.5rem] object-contain mb-[6vh]" />
            <Text fonts='Poppins' fontWeight='100' TextSize='5rem' color='#FFFFFF' Line_height='109%' letterSpaceing='10.26px' TextChildrem='Your podcast will no longer be just a hobby.' />
            <div className='w-[26vw] mt-[4vh]'>
              <Text fonts='Poppins' fontWeight='100' TextSize='1.7rem' color='#FFFFFF' Line_height='109%' letterSpaceing='10.26px' TextChildrem='Supercharge Your Distribution using our AI assistant!' />
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div className='w-[36vw] h-[100vh] flex items-center flex-col overflow-y-auto'>
        <img src={Group22} className="w-[5rem] h-[11.8rem] object-contain mt-4" alt="Group22" />
        <div className='flex flex-col items-center mt-[-3rem]'>
          <Text fonts='Roboto' fontWeight='100' TextSize='2.7rem' color='#7E22CE' Line_height='109%' letterSpaceing='10.26px' TextChildrem='Welcome to ' />
          <Text fonts='Roboto' fontWeight='600' TextSize='2.7rem' color='#7E22CE' Line_height='109%' letterSpaceing='10.26px' TextChildrem='Ques.AI' />
        </div>

        {showSignup ? (
          <form onSubmit={handelLogin} className='flex flex-col items-center mt-[2rem]'>
            <input type="text" placeholder="Email Address" name='email' value={data.email} onChange={handelData}
              className="px-[1.8rem] w-[28vw] text-[1.1rem] font-semibold py-[.5rem] border-[1.28px] border-[#DBDBDB] bg-[#FFFFFF] rounded-[.5vw]
" />
            <input type='password' placeholder="Password" name='password' value={data.password} onChange={handelData}
              className="px-[1.8rem] w-[28vw] text-[1.1rem] font-semibold py-[.5rem] border-[1.28px] border-[#DBDBDB] bg-[#FFFFFF] rounded-[.5vw]
 mt-4" />
            <div className='flex justify-between w-[28vw] mt-1'>
              <Text fonts='Roboto' fontWeight='300' TextSize='.7rem' TextChildrem='Remember me' color='black' />
              <Text fonts='Roboto' fontWeight='300' TextSize='.7rem' TextChildrem='Forgot password?' color='#085FCE' />
            </div>
            <button type='submit' className="px-[1.8rem] w-[28vw] text-[1.1rem] font-semibold py-[.5rem] bg-[#7E22CE] text-white rounded-[.5vw]
 mt-6">Login</button>
          </form>
        ) : (
          <form onSubmit={handelSignup} className='flex flex-col items-center mt-[2rem]'>
            <input type="text" placeholder="Name" name='name' value={data.name} onChange={handelData}
              className="px-[1.8rem] w-[28vw] text-[1.1rem] font-semibold py-[.5rem] border-[1.28px] border-[#DBDBDB] bg-[#FFFFFF] rounded-[.5vw]
" />
            <input type="text" placeholder="Email Address" name='email' value={data.email} onChange={handelData}
              className="px-[1.8rem] w-[28vw] text-[1.1rem] font-semibold py-[.5rem] border-[1.28px] border-[#DBDBDB] bg-[#FFFFFF] rounded-[.5vw]
 my-[.7rem]" />
            <input type="password" placeholder="Password" name='password' value={data.password} onChange={handelData}
              className="px-[1.8rem] w-[28vw] text-[1.1rem] font-semibold py-[.5rem] border-[1.28px] border-[#DBDBDB] bg-[#FFFFFF] rounded-[.5vw]
" />
            <input type='password' placeholder="Confirm Password" name='cpassword' value={data.cpassword} onChange={handelData}
              className="px-[1.8rem] w-[28vw] text-[1.1rem] font-semibold py-[.5rem] border-[1.28px] border-[#DBDBDB] bg-[#FFFFFF] rounded-[.5vw]
 mt-[.7rem]" />
            <div className='flex justify-end w-[28vw] mt-1 cursor-pointer' onClick={() => setShowSignup(true)}>
              <Text fonts='Roboto' fontWeight='500' TextSize='.7rem' TextChildrem='Already registered? Login' color='red' />
            </div>
            <button type='submit' className="px-[1.8rem] w-[28vw] text-[1.1rem] font-semibold py-[.5rem] bg-[#7E22CE] text-white rounded-[.5vw]
 mt-6">Signup</button>
          </form>
        )}

        <div className='flex justify-between items-center w-[27vw] my-[1.6rem]'>
          <div className='w-[12.5vw] h-[1px] bg-[#DBDBDB]' />
          <Text fonts='Roboto' fontWeight='500' TextSize='1rem' TextChildrem='or' color='black' />
          <div className='w-[12.5vw] h-[1px] bg-[#DBDBDB]' />
        </div>

        <div className='"mt-2 w-[28vw] flex items-center justify-between text-[1.4rem] font-semibold py-[.5rem] border-[1.28px] border-[#DBDBDB] rounded-[.5vw] bg-[#FFFFFF]"
'>
          <div className='flex items-center'>
            <img src='google.png' className='w-[1.8rem] h-[1.9rem] object-contain ml-[1rem] mr-[.7rem]' alt="Google" />
            <Text fonts='Roboto' fontWeight='500' TextSize='1rem' TextChildrem='Continue with Google' color='black' />
          </div>
        </div>

        {showSignup ? (
          <div className='flex items-center mt-3'>
            <Text fonts='Roboto' fontWeight='100' TextSize='.8rem' TextChildrem='Don’t have an account?' color='black' />
            <div className='pl-1 cursor-pointer' onClick={() => setShowSignup(false)}>
              <Text fonts='Roboto' fontWeight='600' TextSize='.8rem' TextChildrem='Create Account' color='#005AD5' />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home_Image;
