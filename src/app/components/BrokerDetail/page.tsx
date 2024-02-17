'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import {  toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckBox from '../CheckBox/CheckBox';

type value = 'continue';
const page:React.FC<{}>= () => {

  
    
   
    
    const handleCheckboxChange = (label: string) => {

    };
   
    
    const handleContinueClick = () => {
      
      
     
     
    };

    return (
        <div>
           

           <div className='   space-y-3'>
                        <h1 className=' font-semibold pt-1 '>Are you a RERA Registered?</h1>
                        <div className='space-x-2  '>
                            <CheckBox label='Yes' id={'Yes'} onChange={() => handleCheckboxChange('Yes')} ></CheckBox>
                            <CheckBox label='I have Applied' id={'I have Applied'} onChange={() => handleCheckboxChange('I have Applied')} ></CheckBox>
                            <CheckBox label='Not Applicable' id={'Not Applicable'} onChange={() => handleCheckboxChange('Not Applicable')} ></CheckBox>
                        </div>
                        <h1 className=' font-semibold  '>RERA Number</h1>
                        <input type="text" placeholder='Enter your RERA number' className='rounded-lg border-blue-200 border-2 p-2 pr-24' />
                        <h1 className=' font-semibold  '>Type of Firm</h1>
                        <div className='space-x-2  '>
                            <CheckBox label='Partnership' id={'Partnership'} onChange={() => handleCheckboxChange('Partnership')} ></CheckBox>
                            <CheckBox label='Proprietor' id={'Proprietor'} onChange={() => handleCheckboxChange('Proprietor')} ></CheckBox>
                            <CheckBox label='Company' id={'Company'} onChange={() => handleCheckboxChange('Company')} ></CheckBox>
                        </div>
                        
                    </div>

                    
        </div>
    )
}

export default page
