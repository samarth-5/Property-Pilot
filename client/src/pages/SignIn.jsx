import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {signInStart,signInSuccess,signInFailure} from '../redux/user/userSlice.js';
import OAuth from '../components/OAuth.jsx';

export default function SignIn() {
  const [formData,setFormData]=useState({});
  //const [error,setError]=useState(null);
  //const [loading,setLoading]=useState(false);
  const {loading,error} = useSelector((state)=>state.user);

  const navigate=useNavigate();
  const dispatch=useDispatch();

  const handleChange=(e)=>{
    setFormData(
      {
        ...formData,
        [e.target.id]:e.target.value,
      }
    );
  };
  //console.log(formData);

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      //setLoading(true);
      dispatch(signInStart());
      const res=await fetch('/api/auth/signin',
      {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData),
      });
      const data=await res.json();
      if(data.success === false)
      {
        //setLoading(false);
        //setError(data.message);
        dispatch(signInFailure(data.message));
        return;
      }
      //setLoading(false);
      //setError(null);
      dispatch(signInSuccess(data));
      navigate('/');
      //console.log(data);
    }
    catch(err){
      //setLoading(false);
      //setError(err.message);
      dispatch(signInFailure(err.message));
    }    
  }

  return (
    <div  className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>
        Sign In
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="email" placeholder='Email' className='border p-3 rounded-lg' id='email' onChange={handleChange} />
        <input type="password" placeholder='Password' className='border p-3 rounded-lg' id='password' onChange={handleChange} />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-70'>
          {loading ? 'Loading...' : 'Sign In'}
        </button>

        <OAuth />
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Don't have an account?</p>
        <Link to={"/sign-up"}>
          <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
};