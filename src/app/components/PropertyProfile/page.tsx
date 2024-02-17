'use client'

import React, { useEffect } from "react";
import Image from "next/image";
import ProgressBar from "../ProgressBar/ProgressBar";
import Link from "next/link";
import Circle from "./Circle";
import Checkbox from '../CheckBox/CheckBox';
import { useState } from 'react';
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Card from '../Card/page'
import BathroomSizes from "./Bathroom";
import Bedroom from "./Bedroom";
import Balconies from "./Balconies";



type UserType = 'owner' | 'agent' | 'builder';

const handleCheckboxChange = (label: string) => {

};

const Page: React.FC<{}> = () => {
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

        const storedRole = localStorage.getItem('selectedRole');
        if (storedRole === 'commercial') {
        switch (selectedUser) {
            case 'owner':
                router.push('/Commercial/PhotoUpload');  //Navigation for owner
                break;
            case 'agent':
                router.push('/components/PhotoUpload'); // Navigation for agent
                break;
            case 'builder':
                router.push('/components/Brokerage'); // Navigation for builder
                break;
            default:
                toast.error('Invalid user type');
                break;
        }
    }
        else {
            // If commercial is not selected then else is for residential
            switch (selectedUser) {
                case 'owner':
                    router.push('/components/PhotoUpload');
                    break;
                case 'agent':
                    router.push('/components/PhotoUpload');
                    break;
                case 'builder':
                    router.push('/components/PhotoUpload');
                    break;
                default:
                    toast.error('Invalid user type');
                    break;
            }
        }


    };

    return (
        <>
            <ProgressBar status1={true} status2={true} status3={false} status4={false} status5={false} />
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col-reverse md:p-20 lg:flex-row items-center lg:items-start w-11/12 justify-center py-8  gap-20 ">
                    <div className="border-blue-200 border-4 w-full md:w-5/12 max-w-2xl rounded-2xl p-4 lg:ml-12 lg:mr-0 py-5 pr-11  -mt-12">
                        <p className="font-semibold text-lg lg:text-2xl -mr-4">Now, tell us about your property</p>
                        <p className="font-semibold text-xl">Describe Your Property</p>
                        <p className="text-sm sm:text-lg  pt-1 -mr-3" style={{ lineHeight: '1' }}>
                            Write several things which can describe your property appropriately.
                        </p>
                        <div className="flex flex-col mt-6  ">
                            <input type="text" className="border-4 rounded-lg border-blue-200 py-24  px-4" />
                        </div>
                        <div className="space-y-4 mt-5">
                            <h2 className="font-bold text-lg pb-1 " >Add Room Details</h2>
                            <div className="flex pb-1">
                            <Circle label={"1"} id={"1"} onChange={() => handleCheckboxChange('1')} />
                            <Circle label={"2"} id={"2"} onChange={() => handleCheckboxChange('2')} />
                            <Circle label={"3"} id={"3"} onChange={() => handleCheckboxChange('3')} />
                            <Circle label={"4"} id={"4"} onChange={() => handleCheckboxChange('4')} />
                            <Circle label={"5"} id={"5"} onChange={() => handleCheckboxChange('5')} />
                            </div>
                            
                            {selectedUser === 'builder' && (
                                <Bedroom/>
                            )}
                            <h2 className="font-bold text-lg pb-1 ">Number of Bathrooms</h2>

                            <div className="flex pb-1">
                            <Circle label={"1"} id={"21"} onChange={() => handleCheckboxChange('1')} />
                            <Circle label={"2"} id={"22"} onChange={() => handleCheckboxChange('2')} />
                            <Circle label={"3"} id={"23"} onChange={() => handleCheckboxChange('3')} />
                            <Circle label={"4"} id={"24"} onChange={() => handleCheckboxChange('4')} />
                            <Circle label={"5"} id={"25"} onChange={() => handleCheckboxChange('5')} />
                            </div>

                            {selectedUser === 'builder' && (
                            <BathroomSizes/>
                            )}


                            <h2 className="font-bold text-lg pb-1 ">Number of Balconies</h2>
                            
                            <div className="flex pb-1">
                            <Circle label={"1"} id={"31"} onChange={() => handleCheckboxChange('1')} />
                            <Circle label={"2"} id={"32"} onChange={() => handleCheckboxChange('2')} />
                            <Circle label={"3"} id={"33"} onChange={() => handleCheckboxChange('3')} />
                            <Circle label={"4"} id={"34"} onChange={() => handleCheckboxChange('4')} />
                            <Circle label={"5"} id={"35"} onChange={() => handleCheckboxChange('5')} />
                            </div>
                            {selectedUser === 'builder' && (
                            <Balconies/>
                            )}

                            
                            <h2 className="font-bold text-lg pb-  ">Other Rooms</h2>
                            <div className=" flex flex-wrap space-y-5">

                                <span className="space-x-2">
                                    <Checkbox id="Pooja Room" label="Pooja Room" onChange={() => handleCheckboxChange('Pooja Room')} />
                                    <Checkbox id="Study Room" label="Study Room" onChange={() => handleCheckboxChange('Study Room')} />
                                </span>
                                <span className='space-x-2'>
                                    <Checkbox id="Servant Room" label="Servant Room" onChange={() => handleCheckboxChange('Servant Room')} />
                                    <Checkbox id="Store Room" label="Store Room" onChange={() => handleCheckboxChange('Store Room')} />
                                </span>
                            </div>
                            <h2 className="font-bold text-lg scroll-pb-24">Furnished</h2>
                            <div className="  flex flex-wrap">
                                <span className="space-x-1">
                                    <Checkbox id="Fully Furnished" label="Fully Furnished" onChange={() => handleCheckboxChange('Fully Furnished')} />
                                    <Checkbox id="Unfurnished" label="Unfurnished" onChange={() => handleCheckboxChange('Unfurnished')} />

                                     {selectedUser === 'builder' && (
                                        <div className="mt-5  ">
                                    <Checkbox id="Semi Furnished" label="Semi Furnished" onChange={() => handleCheckboxChange('Semi Furnished')} />
                                    </div>
                                     )}

                                </span>

                            </div>
                            <div className="flex items-center">
                                <h2 className="font-bold text-lg ">Reverse Parking</h2>
                                <span className="text-sm pl-4 ">(Optional)</span>
                            </div>
                            <div className="flex flex-wrap ">
                                <p className="text-lg pl-1 inline">Covered Parking</p>

                                <span>    <input type="checkbox" className="peer hidden" id="covered" value='1' />
                                    <label htmlFor="covered"
                                        className="peer-checked:bg-blue-500 focus:border-blue-500 border-2 cursor-pointer border-blue-400 p-1 ml-2 rounded-full  px-3  " >1</label>
                                </span>
                                <span>    <input type="checkbox" className="peer hidden" id="covered2" value='2' />
                                    <label htmlFor="covered2"
                                        className="peer-checked:bg-blue-500 focus:border-blue-500 border-2 cursor-pointer border-blue-400 p-1 ml-2 rounded-full  px-3 " >2</label>
                                </span>

                            </div>
                            <div className="flex flex-wrap">
                                <p className="text-lg pl-1 inline ">Open Parking</p>
                                <div className="pl-5">
                                    <input type="checkbox" className="peer hidden" id="open" value='1' />
                                    <label htmlFor="open"
                                        className="peer-checked:bg-blue-500 focus:border-blue-500 border-2 cursor-pointer border-blue-400 p-1 ml-2 rounded-full  px-3 " >1</label>
                                    <span>    <input type="checkbox" className="peer hidden" id="open2" value='2' />
                                        <label htmlFor="open2"
                                            className="peer-checked:bg-blue-500 focus:border-blue-500 border-2 cursor-pointer border-blue-400 p-1 ml-1 rounded-full px-3  " >2</label>
                                    </span>

                                </div>
                            </div>

                            <p className="font-bold text-lg  ">Flooring Details</p>
                            <div className="">
                                <p className="text-lg -mt-4">Total no. of floors</p>
                                <input type="text" placeholder={"Total Floors"} className="border-4 rounded-lg border-blue-200 py-2 px-4 mb-2" />
                                <input type="text" placeholder={"Property on Floor"} className="border-4 rounded-lg border-blue-200 py-2 px-4 " />
                            </div>

                            <h2 className="font-bold text-lg ">Availability Status</h2>
                            <div className="flex flex-wrap">

                                <Checkbox id="eady To Move" label="Ready To Move" onChange={() => handleCheckboxChange('eady To Move')} />
                                <Checkbox id="Under Construction" label="Under Construction" onChange={() => handleCheckboxChange('Under Construction')} />

                            </div>
                            <h2 className="font-bold text-lg  ">Age of Property</h2>
                            <div className="flex flex-wrap pb-6 space-x-1 -mr-2">
                                
                                
                                {(selectedUser === 'agent' || selectedUser === 'builder') && (
                                    <div className="mb-5">
                                        <Checkbox id="New Construction" label="New Construction" onChange={() => handleCheckboxChange('New Construction')} />
                                    </div>)}
                                
                                
                                <Checkbox id="0-1 Years" label="0-1 Years" onChange={() => handleCheckboxChange('0-1 Years')} />
                                <Checkbox id="1-5 Years" label="1-5 Years" onChange={() => handleCheckboxChange('1-5 Years')} />
                                <Checkbox id="5-10 Years" label="5-10 Years" onChange={() => handleCheckboxChange('5-10 Years')} />
                                <Checkbox id="10+ Years" label="10+ Years" onChange={() => handleCheckboxChange('10+ Years')} />

                            </div>


                            <button style={{ paddingLeft: '8.4rem' }} className="bg-blue-600 hover:bg-blue-800 text-white py-3 px-36 -ml-1 mt-auto text-lg font-semibold rounded-lg shadow-md transition duration-300 ease-in-out self-center" onClick={handleContinueClick}>Continue</button>

                        </div>
                    </div>

                    <div className="flex flex-col -mt-36">
                        <div className="flex flex-col items-center justify-center rounded-3xl mt-2 mr-8  ">
                            <Card title={"Describe your property in brief so the buyer or renter can easily get to know how your property is what makes your property different from others."}
                                src={"/home.svg"} alt={"home"} width={141} height={171} />
                        </div>
                        <div className="bg-blue-200 flex flex-col items-center justify-center rounded-3xl md:px-14 ml-5 mr-12 mt-5">
                            <Image className="pt-5" src="/smiley.webp" alt="smiley" width={90} height={100} />
                            <h1 className="text-lg lg:text-2xl text-center pb-7 pt-2">You Are Almost There</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
