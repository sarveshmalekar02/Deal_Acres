'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {  toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


type value = 'rent' | 'sell' | 'residential' | 'commercial' | 'plot' ;

const Selection: React.FC<{}> = () => {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<value | null>(null); 

  const roleToPageMap: Record<value, string> = {
      rent: '/components/login',
      sell: '/components/login',
      residential: '/components/login',
      commercial: '/components/login',
      plot: '/components/login',
  };

  const handleCheckboxChange = (role: value) => {
      setSelectedRole(role);
  };

  const handleContinueClick = () => {
      if (selectedRole) {
          localStorage.setItem('selectedRole', selectedRole); // Store selected role in local storage
          router.push(`${roleToPageMap[selectedRole]}?role=${selectedRole}`); // Pass selected role
      } else {
          toast.error('Select Residential / Commercial');
      }
  };  


    return (
        <div>
            <div className=''>
              <div className="border-4 border-blue-300 mt-16 mb-24 md:p-6 rounded-2xl flex flex-col ">
                <div className='-ml-2'>
                  <h1 className="text-2xl font-bold ">Post Your Property for free</h1>
                  <h2 className="text-sm font-semibold mb-3">Add Basic Details</h2>
                  <label className="block text-[15px] font-bold mb-5">Looking For.....</label>
                  <div className="space-y-2">
                    <div>
                    <span>
                      <input type="checkbox" className="peer hidden" id="sell_" value='sell' onChange={() => handleCheckboxChange('sell')}/>
                      <label htmlFor="sell_" 
                        className="peer-checked:border-blue-600 focus:border-blue-500 border-4 cursor-pointer border-blue-100 p-1 px-9 rounded-lg mt-2" >Sell</label>
                    </span>
                    <input type="checkbox" className="peer hidden" id="rent_" value={'rent'}  onChange={() => handleCheckboxChange('rent')} />
                    <label htmlFor="rent_"
                      className="peer-checked:border-blue-600 focus:border-blue-500 cursor-pointer border-4 border-blue-100 p-1 px-9 rounded-lg ml-2 ">Rent</label>
                    </div>
                    <span className="block text-[15px] pr-2 font-bold pt-2 mb-4">Property Type</span>

                    <div className="">
                      <span>
                        <input type="radio" className="peer hidden" id="residential_" value='residential' checked={selectedRole === 'residential'} onChange={() => handleCheckboxChange('residential')} />
                        <label htmlFor="residential_" className="peer-checked:border-blue-600 focus:border-blue-500 border-4 cursor-pointer border-blue-100 p-1 px-4 rounded-xl " >Residential</label>
                      </span>
                      <input type="radio" className="peer hidden" id="commercial" value='commercial' checked={selectedRole === 'commercial'} onChange={() => handleCheckboxChange('commercial')}/>
                      <label htmlFor="commercial" className="peer-checked:border-blue-600 focus:border-blue-500 border-4 border-blue-100 cursor-pointer p-1 px-4 rounded-xl ml-5 " >Commercial</label><br />
                      <button className="hover:border-blue-600 border-4 border-blue-100 p-1 mt-4 rounded-xl">Flat/Apartment</button>
                      <button className="hover:border-blue-600 border-4 border-blue-100 p-1 rounded-xl ml-1">Villa</button>
                      <span>
                        <input type="checkbox" className="peer hidden" id="plot&land" checked={selectedRole === 'plot'} onChange={() => handleCheckboxChange('plot')}/>
                        <label htmlFor="plot&land" className="peer-checked:border-blue-600 focus:border-blue-500 cursor-pointer border-4 border-blue-100 p-1 rounded-xl ml-1 " >Plot</label>
                      </span>
                    </div>
                  </div>
                  <button className="hover:border-blue-600 border-4 border-blue-100 text-[14px] pt-1 px-2 rounded-xl">Independent House</button>
                  <button className="hover:border-blue-600 border-4 border-blue-100 text-[14px] pt-1 px-1 -mb-1 m-1 rounded-xl ml-1">Builder Floor</button>

                  <div className="pt-3 ml-2">
                    <h2 className="text-[15px] font-bold mb-3">Add Your Contact Detail</h2>
                    <input className="border-4 border-blue-100 -mt-1 px-24 py-2 -ml-1 rounded-lg" type="tel" placeholder="Phone Number" style={{ paddingLeft: '0.5rem', paddingRight: '10.5rem' }}></input>
                  </div>


                  <p className="text-xs mt-7 m-1">Are you a Registered User? <Link href="/" className="text-blue-500">Login</Link></p>
                </div>
                <div>
                         
                        <button  style={{paddingLeft:'8.4rem'}} className="bg-blue-600  hover:bg-blue-800 text-white py-3 px-36 -ml-1 mt-auto text-lg font-semibold rounded-md shadow-md transition duration-300 ease-in-out self-center"
                        onClick={handleContinueClick}>
                            Start Now
                        </button>
                        <ToastContainer />
                </div>
              </div>
            </div>
        </div>
    );
};

export default Selection
