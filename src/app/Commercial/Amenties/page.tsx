'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import CheckBoxList2 from '../../components/CheckBox/CheckBoxList2';
import CheckBoxList from '../../components/CheckBox/CheckBoxList';

import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Gdpr from './Gdpr';


type UserType = 'owner' | 'agent' | 'builder';



const Amenties: React.FC<{}> = () => {

    const router = useRouter();
    const [selectedUser, setSelectedUser] = useState<UserType | null>(null);
   

    useEffect(() => {
        const storedUser = localStorage.getItem('selectedUser') as UserType;
        if (storedUser && ['owner', 'agent', 'builder'].includes(storedUser)) {
            setSelectedUser(storedUser);
        }
    }, []);

    const handleContinueClick = () => {
        if (!selectedUser) {
            toast.error('Please select a user type');
            return;
        }


    


          // If commercial is selected 
          const storedRole = localStorage.getItem('selectedRole');
          if (storedRole === 'commercial') {
              switch (selectedUser) {
                  case 'owner':
                      router.push('/Commercial/BasicDetails');
                      break;
                  case 'agent':
                      router.push('/components/Submit');
                      break;
                  case 'builder':
                      router.push('/components/AgentDetails');
                      break;
                  default:
                      toast.error('Invalid user type');
                      break;
              }
          } else {
              // If commercial is not selected then else is for residential
              switch (selectedUser) {
            case 'owner':
                router.push('/components/Submit');
                break;

            case 'agent':
                router.push('/components/Submit'); // Navigation for agent
                break;
            case 'builder':
                router.push('/components/AgentDetails'); // Navigation for builder
                break;
            default:
                toast.error('Invalid user type');
                break;
        }
    }
    };

    return (
        < >
            <ProgressBar status1={true} status2={true} status3={true} status4={true} status5={false} />
            <div className='py-8 mr-4 md:mr-28'>
                <div className="flex flex-row flex- gap-7">
                    <div className="py-8 pl-4 border-4 border-blue-100 md:px-8 ml-4 md:ml-40 -mt-2 rounded-xl">
                        <div className='-ml-3 pr-14'>

                           

                            <h1 className='font-bold  sm:text-xl mt-1 pb-4'>Add Amenties and Features</h1>

                            <div className="flex flex-row gap-5">
                                <div className="flex flex-col flex-wrap">
                                    <div className="column-container -mr-3 ">
                                        <CheckBoxList />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="column-container -mr-10 ">
                                        <CheckBoxList2 />
                                    </div>
                                </div>
                            </div>


                            <div className="py-2 pb-8">
                                <p className="cursor-pointer font-semibold inline z-50 text-blue-600 text-xl">
                                    More
                                    <Image
                                        src="/arrow.png"
                                        width={15}
                                        className="inline mx-1"
                                        height={20}
                                        alt="down arrow"
                                    />
                                </p>
                            </div>



                            <h1 className='font-bold  sm:text-xl -mt-3 pb-4'>Property Facing</h1>
                            <div className="flex flex-row flex-wrap gap-5 pb-8 mr-6">
<div>
                                <span>
                                    <input type="checkbox" className="peer hidden" id="North" />
                                    <label htmlFor="North"
                                        className=" peer-checked:border-blue-600 focus:border-blue-500 cursor-pointer border-4  border-blue-100 p-1 px-6 rounded-lg ">North</label>
                                </span>
                                <span>
                                    <input type="checkbox" className="peer hidden" id="South" />
                                    <label htmlFor="South"
                                        className=" peer-checked:border-blue-600 focus:border-blue-500 border-4 cursor-pointer  border-blue-100 p-1 px-6 rounded-lg ml-2">South</label>
                                </span>

                                <span>
                                    <input type="checkbox" className="peer hidden" id="East" />
                                    <label htmlFor="East"
                                        className=" peer-checked:border-blue-600 focus:border-blue-500 cursor-pointer border-4  border-blue-100 p-1 px-6 rounded-lg ml-2 ">East</label>
                                </span>

                                </div>
                                <div>
                                <span className='-mr-5  '>
                                    <input type="checkbox" className="peer hidden" id="1" />
                                    <label htmlFor="1"
                                        className=" peer-checked:border-blue-600 focus:border-blue-500 cursor-pointer border-4  border-blue-100 p-1 px-6  rounded-lg  ">West</label>
                                </span>
                                <span>
                                    <input type="checkbox" className="peer hidden" id="2" />
                                    <label htmlFor="2"
                                        className=" peer-checked:border-blue-600 focus:border-blue-500 cursor-pointer border-4  border-blue-100 p-1 px-1 pl-1 pr-1 -mr-1 rounded-lg ml-2 ">North - East</label>
                                </span>
                                <span><input type="checkbox" className="peer hidden" id="North - West" />
                                    <label htmlFor="North - West"
                                        className=" peer-checked:border-blue-600 focus:border-blue-500 cursor-pointer border-4  border-blue-100 p-1 px-3 pl-1 pr-1 rounded-lg ml-2 ">North - West</label>
                                </span>

                                </div>
                                <div>
                                <span>
                                    <input type="checkbox" className="peer hidden" id="South-East" />
                                    <label htmlFor="South-East"
                                        className=" peer-checked:border-blue-600 focus:border-blue-500 cursor-pointer border-4  border-blue-100 p-1 px-6 pl-3 pr-3 rounded-lg  ">South-East</label>
                                </span>
                                <span>
                                    <input type="checkbox" className="peer hidden" id="South-West" />
                                    <label htmlFor="South-West"
                                        className=" peer-checked:border-blue-600 focus:border-blue-500 cursor-pointer border-4  border-blue-100 p-1 px-6 pl-3 pr-3 rounded-lg ml-2 ">South-West</label>
                                </span>
                                </div>
                            </div>


                            <h1 className='font-bold  sm:text-xl mt-1 '>Upload Floor Plan</h1>
                            <div className="flex ">
                                <div className="bg-blue-50 md:px-16 flex flex-col items-center justify-center my-8 p-6 -mr-7 rounded-lg">
                                    <Image src="/cloud.png" alt="cloud" width={60} height={100} className='mt-6' />
                                    <h2 className='font-bold  text-sm mt-1'>Drag & Drop Image Here</h2>
                                    <p className='  text-sm mt-1'>Uploaded photo is maximum is of 5MB</p>
                                    <button className="px-4 mt-4 cursor-pointer bg-blue-600 text-lg font-semibold flex justify-center items-center rounded-lg text-white">
                                        Upload Media
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='-mr-1'>
                        <div className="bg-blue-100 flex flex-col  md:mr-24 md:ml-24 rounded-3xl mt-2 border border-blue-100 ml-4 md:p-24">
                            <div className="flex flex-col  md:items-start">
                                <span className="text-2xl  pl-4 md:pl-1 pr-2 ">
                                    <ul className="list-disc flex flex-wrap ">
                                        <li className="text-lg sm:text-xl -ml-7 -mr-12 ">
                                            Mention attractive amenities  and appealing details of your
                                            property.
                                        </li>
                                        <li className="text-lg sm:text-xl -ml-7 -mr-12">
                                            Add property proximity to transit Shopping, Market Areas,
                                            and more..
                                        </li>
                                    </ul>
                                </span>
                                <div className="md:ml-auto">
                                    <Image src="/house2.webp" alt="ad" width={160} height={250} className="py-8 ml-2 pb-6 mt-3 md:pb-4" />
                                    <h1 className="font-semibold text-lg md:text-lg text-center md:text-left pl-12">Need Help?</h1>
                                    <p className="text-lg font-normal text-center md:text-left pl-7 ">You Can Email Us</p>
                                    <a
                                        href="mailto:contact@dealacres.com"
                                        className="text-lg link text-blue-600 text-center md:text-left mr-4"
                                    >
                                        contact@dealacres.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            {(selectedUser === 'builder') && (
                <div className="flex flex-col max-w-7xl justify-center w-11/12 mx-auto ">
                    <button className="mb-36 bg-blue-600 hover:bg-blue-800 flex justify-center items-center w-10/12 text-white py-3 md:mx-24 pr-16  mt-auto text-lg font-semibold rounded-md shadow-md self-center" onClick={handleContinueClick}>Continue to Property</button>
                </div>
            )}


            {(selectedUser === 'owner' || selectedUser === 'agent') && (
                <Gdpr />
            )}



        </>



    );
};

export default Amenties;
