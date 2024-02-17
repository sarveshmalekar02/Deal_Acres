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

import OfficeSpace from "./OfficeSpace";

import Circle2 from "../../Commercial/Circle2";



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

                            <div className=" flex flex-row items-center">
                                <label className="text-sm">Floor Allowed for Construction</label>
                            </div>

                            <div className="relative  ">
                                <input type="number" className=" border-b w-60 border-gray-500 focus:outline-none focus:border-blue-500" placeholder="Total Floor" />
                            </div>

                            <div className=" flex flex-row items-center">
                                <label className="text-sm">No. of Open sides</label>
                            </div>

                            <div className="relative  ">
                                <input type="number" className=" border-b w-60 border-gray-500 focus:outline-none focus:border-blue-500" placeholder="Select" />
                            </div>

                            <div className=" flex flex-row items-center">
                                <label className="text-sm">Width of road facing the plot</label>
                            </div>

                            <div className="relative  ">
                                <input type="number" className=" border-b w-60 border-gray-500 focus:outline-none focus:border-blue-500" placeholder="Road Width" />
                                <label className=" border-b w-60 border-gray-500 focus:outline-none focus:border-blue-500 ">Meters</label>
                            </div>



                            <div className=" flex flex-row items-center space-x-1">
                                <h2 className=" text-lg   ">Any Construction Done</h2>

                                <Circle2 id="41" label="" onChange={() => handleCheckboxChange('')} />
                                <p className="inline"> Yes
                                </p>
                                <Circle2 id="42" label="" onChange={() => handleCheckboxChange('')} />
                                <p>No
                                </p>
                            </div>

                            <div className=" flex flex-row items-center  space-x-1">
                                <h2 className="text-lg  mr-5 ">Boundary Wall made</h2>

                                <Circle2 id="41" label="" onChange={() => handleCheckboxChange('')} />
                                <p className="inline"> Yes
                                </p>
                                <Circle2 id="42" label="" onChange={() => handleCheckboxChange('')} />
                                <p>No
                                </p>
                            </div>


                            <h1 className="font-bold text-lg mr-6  ">Area</h1>

                            <div className=" flex flex-row items-center">
                                <label className="text-sm">Plot Area</label>
                            </div>


                            <div className="relative  ">
                                <input type="number" className=" border-b w-60 border-gray-500 focus:outline-none focus:border-blue-500" placeholder="Plot Area" />
                                <label className=" border-b  border-gray-500 focus:outline-none focus:border-blue-500 ">Sq-yrd</label>
                            </div>

                            <div className=" flex flex-row items-center">
                                <label className="text-sm">Plot Length</label>
                            </div>

                            <div className="relative  ">
                                <input type="number" className=" border-b w-60 border-gray-500 focus:outline-none focus:border-blue-500" placeholder="Plot Length" />
                                <label className=" border-b w-60 border-gray-500 focus:outline-none focus:border-blue-500 ">yrd</label>
                            </div>

                            <div className=" flex flex-row items-center">
                                <label className="text-sm">Plot Breadth</label>
                            </div>

                            <div className="relative  ">
                                <input type="number" className=" border-b w-60 border-gray-500 focus:outline-none focus:border-blue-500" placeholder="Plot Breadth" />
                                <label className=" border-b w-60 border-gray-500 focus:outline-none focus:border-blue-500 ">yrd</label>
                            </div>

                            <div className="ml-1"><input type="checkbox" className="pl-2" />This is a corner Plot</div>









                            <button style={{ paddingLeft: '8.4rem' }} className="bg-blue-600 hover:bg-blue-800 text-white py-3 px-36 -ml-1 mt-auto text-lg font-semibold rounded-lg shadow-md transition duration-300 ease-in-out self-center" onClick={handleContinueClick}>Continue</button>

                        </div>
                    </div>

                    <div className="flex flex-col -mt-36">
                        <div className="flex flex-col items-center justify-center rounded-3xl mt-2 mr-8  ">

                            <div className="bg-blue-200 md:mx-5 mt-24 border-2 rounded-lg border-blue-200">
                                <h1 className="text-[19px] font-normal pr-2 md:mt-24 ml-10">Describe your property in brief so the buyer or renter can easily get to know how your property is what makes your property different from others.</h1>
                                <Image className="md:mx-28 md:my-14 flex flex-row flex-none items-center" src='/plot.webp' alt='plot' width={141} height={171} />
                                <div className="flex flex-col items-center md:my-24">
                                    <h1 className="text-lg font-bold">Need Help?</h1>
                                    <h2 className="text-lg">You Can Email Us</h2>
                                    <a href="mailto:contact@dealacres.com" className="text-lg text-blue-500 hover:underline p-0">Contact@dealacres.com</a>
                                </div>
                            </div>
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
