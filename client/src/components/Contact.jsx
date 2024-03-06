import React, { useEffect, useState } from 'react'
import {Link} from'react-router-dom';

export default function Contact({listing}) {
    const [landlord,setLandlord]=useState(null);
    const [message,setMessage]=useState('');

    useEffect(()=>{
        const fetchLandlord=async()=>{
            try{
                const res=await fetch(`/api/user/${listing.userRef}`);
                const data=await res.json();
                setLandlord(data);
            }
            catch(err){
                next(err);
            }
        }
        fetchLandlord();
    },[listing.userRef])

    const onChange=(e)=>{
        setMessage(e.target.value);
    }

  return (
    <div>
        {landlord && (
            <div className='flex flex-col gap-2'>
                <p>Contact <span className='font-semibold'>{landlord.username}</span> for 
                    <span className='font-semibold'> {listing.name}</span>
                </p>
                <textarea name="message" 
                          id="message" 
                          cols="30" 
                          rows="2" 
                          value={message} 
                          placeholder='Enter your message here...' 
                          onChange={onChange}
                          className='w-full border p-3 rounded-lg'>
                </textarea>
                <Link to={`mailto:${landlord.email}?subject=Regarding${listing.name}&body=${message}`}
                      className='bg-slate-700 text-white text-center p-3 rounded-lg hover:opacity-90'>
                    Send Message
                </Link>
            </div>
        )}
    </div>
  )
}
