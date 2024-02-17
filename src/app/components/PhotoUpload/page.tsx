'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ProgressBar from '../ProgressBar/ProgressBar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Card from '../../components/Card/page'




type UserType = 'owner' | 'agent' | 'builder'; // Define UserType type


const Photo = () => {


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
                    router.push('/Commercial/Amenties');
                    break;
                case 'agent':
                    router.push('/components/Brokerage'); // Navigation for agent
                    break;
                case 'builder':
                    router.push('/components/Brokerage'); // Navigation for builder
                    break;
                default:
                    toast.error('Invalid user type');
                    break;
            }
        }   else if(storedRole === 'plot') {
            switch (selectedUser) {
                case 'owner':
                    router.push('/components/Amenties');
                    break;
                default:
                    toast.error("Owner details are required for plot owners");
                    break;
            }
    } 
        
        else {
            switch (selectedUser) {
                case 'owner':
                    router.push('/components/Amenties');  //Navigation for owner
                    break;
                case 'agent':
                    router.push('/components/Brokerage'); // Navigation for agent
                    break;
                case 'builder':
                    router.push('/components/Brokerage'); // Navigation for builder
                    break;
                default:
                    toast.error('Invalid user type');
                    break;
            }
        }
    };

    return (
        <div>
            <ProgressBar status1={true} status2={true} status3={true} status4={false} status5={false} />

            <div className="min-h-screen px-4 -ml-12 md:px-8 mb-28">
                <div className="max-w-full md:max-w-4xl mx-auto grid  md:grid-cols-2 gap-10">
                    {/* First grid */}
                    <div className="  rounded-3xl -mt-20 ">
                        <Card title={'Click Perfact picture of your property so the renter or buyer see the best image of your property.'}
                            src={'/camera.webp'} alt={'camera'} width={170} height={200} />
                    </div>

                    {/* Second grid */}
                    <div className="">
                        <div className="border-4 border-blue-300 mt-28 mb-28 ml-4 md:-mr-4 md:p-8 rounded-2xl flex flex-col">
                            <div className="-ml-4">
                                <div className="-mt-2">
                                    <h1 className="text-xl font-bold">Add Media</h1>
                                </div>
                                <div className="bg-blue-50 flex flex-col items-center justify-center w-auto h-auto my-5 p-8 py-10 rounded-3xl">
                                    <Image src="/cloud.png" alt="add" width={60} height={30} />
                                    <h1 className="font-bold">Drag & Drop Image Here</h1>
                                    <p>Uploaded photo is maximum is of 2MB</p>
                                    <button className="px-4 mt-4 cursor-pointer bg-blue-600 hover:bg-blue-800 text-xl font-semibold flex justify-center items-center rounded-lg text-white">
                                        Upload Media
                                    </button>
                                </div>
                                <p className="text-sm -mt-3 ml-1">At least add 3 images of your property for good visibility and high response.</p>
                            </div>
                            <div className="mt-7 -ml-4">
                                <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-4 px-36 ml-2 mt-auto mb-4 rounded-lg shadow-md transition duration-300 cursor-pointer ease-in-out self-center" onClick={handleContinueClick}>
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Photo;
