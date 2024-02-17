'use client'

import React, { useEffect } from "react";
import Image from "next/image";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Link from "next/link";
import Circle from "./Circle";
import Checkbox from '../../components/CheckBox/CheckBox';
import { useState } from 'react';
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Card from '../../components/Card/page'
import OfficeSpace from "./OfficeSpace";

import Circle2 from "../Circle2";



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

        switch (selectedUser) {
            case 'owner':
                router.push('/components/PhotoUpload');  //Navigation for owner
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
                            <h2 className="font-bold text-lg pb-1 " >Floor Number</h2>

                            <div className="pt-1 space-x-2 pb-1">
                                <Checkbox id={"Lower Basement"} label={"Lower Basement"} onChange={() => handleCheckboxChange('Lower Basement')} />
                                <Checkbox id={"Upper Basement"} label={"Upper Basement"} onChange={() => handleCheckboxChange('Upper Basement')} />
                                <Checkbox id={"Ground"} label={"Ground"} onChange={() => handleCheckboxChange('Ground')} />

                            </div>
                            <div className="flex pb-1">
                                <Circle label={"1"} id={"1"} onChange={() => handleCheckboxChange('1')} />
                                <Circle label={"2"} id={"2"} onChange={() => handleCheckboxChange('2')} />
                                <Circle label={"3"} id={"3"} onChange={() => handleCheckboxChange('3')} />
                                <Circle label={"4"} id={"4"} onChange={() => handleCheckboxChange('4')} />
                                <Circle label={"5"} id={"5"} onChange={() => handleCheckboxChange('5')} />
                            </div>

                           
                            <h2 className="font-bold text-lg pb-1 ">Number of Floors</h2>

                            <div className="flex pb-1">
                                <Circle label={"1"} id={"21"} onChange={() => handleCheckboxChange('1')} />
                                <Circle label={"2"} id={"22"} onChange={() => handleCheckboxChange('2')} />
                                <Circle label={"3"} id={"23"} onChange={() => handleCheckboxChange('3')} />
                                <Circle label={"4"} id={"24"} onChange={() => handleCheckboxChange('4')} />
                                <Circle label={"5"} id={"25"} onChange={() => handleCheckboxChange('5')} />
                            </div>

                            {selectedUser === 'builder' && (
                                <OfficeSpace />
                            )}

                            <h2 className="font-bold text-lg scroll-pb-24">Furnished</h2>
                            <div className="  flex flex-wrap">
                                <span className="space-x-1">
                                    <Checkbox id="Fully Furnished" label="Fully Furnished" onChange={() => handleCheckboxChange('Fully Furnished')} />
                                    <Checkbox id="Unfurnished" label="Unfurnished" onChange={() => handleCheckboxChange('Unfurnished')} />

                                    <div className="mt-5  ">
                                        <Checkbox id="Semi Furnished" label="Semi Furnished" onChange={() => handleCheckboxChange('Semi Furnished')} />
                                    </div>
                                </span>
                            </div>

                            <h2 className="font-bold text-lg pb-1 ">Washroom</h2>

                            <div className="flex pb-1">
                                <Circle label={"1"} id={"31"} onChange={() => handleCheckboxChange('1')} />
                                <Circle label={"2"} id={"32"} onChange={() => handleCheckboxChange('2')} />
                                <Circle label={"3"} id={"33"} onChange={() => handleCheckboxChange('3')} />
                                <Circle label={"4"} id={"34"} onChange={() => handleCheckboxChange('4')} />
                                <Circle label={"5"} id={"35"} onChange={() => handleCheckboxChange('5')} />
                            </div>


                            <div className=" flex flex-row items-center space-x-1">
                                <h2 className="font-bold text-lg  mr-16 ">Corner Shop</h2>

                                <Circle2 id="41" label="" onChange={() => handleCheckboxChange('')} />
                                <p className="inline"> Yes
                                </p>
                                <Circle2 id="42" label="" onChange={() => handleCheckboxChange('')} />
                                <p>No
                                </p>
                            </div>


                            <div className=" flex flex-row items-center space-x-1">
                                <h2 className="font-bold text-lg   ">Is Main Road Facing</h2>

                                <Circle2 id="51" label="" onChange={() => handleCheckboxChange('')} />
                                <p className="inline"> Yes
                                </p>
                                <Circle2 id="52" label="" onChange={() => handleCheckboxChange('')} />
                                <p>No
                                </p>
                            </div>

                            <div className=" flex flex-row items-center space-x-1">
                                <h2 className="font-bold text-lg   ">Personal Washroom</h2>

                                <Circle2 id="61" label="" onChange={() => handleCheckboxChange('')} />
                                <p className="inline"> Yes
                                </p>
                                <Circle2 id="62" label="" onChange={() => handleCheckboxChange('')} />
                                <p>No
                                </p>
                            </div>

                            <div className=" flex flex-row items-center space-x-1">
                                <h2 className="font-bold text-lg mr-6  ">Pantry/ Cafeteria</h2>
                                <Circle2 id="71" label="" onChange={() => handleCheckboxChange('')} />
                                <p> Yes</p>
                                <Circle2 id="72" label="" onChange={() => handleCheckboxChange('')} />
                                <p>No</p>
                            </div>


                            <h1 className="font-bold text-lg mr-6  ">Area</h1>
                            <h1 className="font-bold text-sm mr-6  ">Carpet Area</h1>


                            <div className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    className="border-2 border-blue-200 rounded-md px-3  w-28"
                                    placeholder=""

                                />
                                <p className="border-2 border-blue-200 rounded-md px-1  ">Sq-ft</p>


                            </div>

                            <h1 className="font-bold text-sm mr-6  ">Super Area</h1>


                            <div className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    className="border-2 border-blue-200 rounded-md px-3  w-28"
                                    placeholder=""

                                />
                                <p className="border-2 border-blue-200 rounded-md px-1  ">Sq-ft</p>


                            </div>





                            <div className=" flex flex-row items-center mr-3 space-x-24">

                                <label className="text-sm">Available From</label>

                            </div>


                            <div className="relative  ">
                                <input type="text" className="border-b w-28 border-gray-500 focus:outline-none focus:border-blue-500" placeholder="Month" />


                                <input type="text" className="ml-16 border-b w-28 border-gray-500 focus:outline-none focus:border-blue-500" placeholder="Year" />

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

                            <div className=" flex flex-row items-center space-x-1">
                                <h2 className="font-bold text-lg   ">Currently Leased Out</h2>

                                <Circle2 id="41" label="" onChange={() => handleCheckboxChange('')} />
                                <p className="inline"> Yes
                                </p>
                                <Circle2 id="42" label="" onChange={() => handleCheckboxChange('')} />
                                <p>No
                                </p>
                            </div>

                            <p className="text-xs">To whom has the property been leased <br />Please specify whether your property has be leased to a company or an individual</p>

                            <div className=" flex flex-row items-center mr-3 space-x-24">

                                <label className="text-sm">Monthly Rent</label>
                                <label className="text-sm">Leased On</label>
                            </div>


                            <div className="relative  ">
                                <input type="text" className="border-b w-28 border-gray-500 focus:outline-none focus:border-blue-500" />

                                <div
                                    className="absolute inset-y-0 left-0  flex items-center    pointer-events-none"
                                >
                                    <Image src="/rupee.webp" alt="rupee" width={14} height={20} className="mr-8 pr-1" />
                                </div>
                                <input type="text" className="ml-16 border-b w-28 border-gray-500 focus:outline-none focus:border-blue-500" placeholder="DD/MM/YYYY" />

                            </div>








                            <div className=" flex flex-row items-center space-x-1">
                                <h2 className="font-bold text-lg  mr-10 ">Assured Returns</h2>

                                <Circle2 id="41" label="" onChange={() => handleCheckboxChange('')} />
                                <p className="inline"> Yes
                                </p>
                                <Circle2 id="42" label="" onChange={() => handleCheckboxChange('')} />
                                <p>No
                                </p>
                            </div>

                            <label className="pt-2 text-sm ">Rate Of Return</label>
                            <div className="relative -mt-3 ">
                                <input type="text" className="w-28 border-b  border-gray-500 focus:outline-none focus:border-blue-500" placeholder="Ex - 5 %" />

                            </div>

                            <div className=" ">
                                <h1 className='font-bold text-lg  '>Price Details</h1>
                            </div>
                            <div className="relative ">
                                <input type="text" className="pl-16 pr-20  py-3  border-4 text-sm sm:text-sm placeholder:text-black placeholder:opacity-60  border-blue-100 rounded-lg" placeholder="Expected Price" />

                                <div
                                    className="absolute inset-y-0 left-0 pl-3    flex items-center    pointer-events-none"
                                >
                                    <Image src="/rupee.webp" alt="rupee" width={15} height={20} className="mr-8 pr-1" />

                                </div>
                            </div>
                            <div className="relative ">
                                <input
                                    type="text"
                                    className="pl-16 py-3 mt-1 border-4 mr-8 text-sm sm:text-sm placeholder:text-black placeholder:opacity-60  border-blue-100 rounded-lg"
                                    placeholder="Price per Sq.Yd."
                                />
                                <div
                                    className="absolute inset-y-0 left-0 pl-3 flex items-center    pointer-events-none"
                                >
                                    <Image src="/rupee.webp" alt="rupee" width={15} height={20} className="mr-8 pr-1" />

                                </div>
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
