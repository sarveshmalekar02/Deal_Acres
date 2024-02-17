'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProgressBar from '../ProgressBar/ProgressBar';

import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Card from '../Card/page'



type UserType = 'owner' | 'agent' | 'builder';


const Details = () => {
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
                router.push('/components/PropertyProfile');  //Navigation for owner
                break;
            case 'agent':
                router.push('/components/PropertyProfile'); // Navigation for agent
                break;
            case 'builder':
                router.push('/components/PropertyProfile'); // Navigation for builder
                break;
            default:
                toast.error('Invalid user type');
                break;
        }
        

    };


    return (
        <>
            <ProgressBar status1={true} status2={false} status3={false} status4={false} status5={false} />
            <div className=" min-h-screen  sm:px-4 md:px-8 lg:px-16 xl:px-20">
                <div className=" max-w-full md:max-w-4xl pr-5 mx-auto flex flex-col md:flex-row gap-4">
                    <div className=" rounded-3xl    mb-36 -mt-11 md:mr-14 -ml-7   ">
                        <Card title={'An Accurate Location is the most essential as it helps you to connect the perfect buyer or tenant'} src={'/map.svg'} alt={'map'} width={141} height={171} />

                    </div>

                    <div className=' w-full md:w-5/6 mt-1    '>
                        <div className="border-4 border-blue-200 mt-28 mb-20 md:p-5 rounded-2xl">
                            <h1 className="text-xl font-bold mb-4 mt-1">Your Property Location?</h1>
                            <div className='mb-6'>
                                <input className="hover:border-blue-600 border-4 border-blue-100 mt-1 px-4 py-2 rounded-lg mb-4 w-full" type="tel" placeholder="State" />
                                <input className="hover:border-blue-600 border-4 border-blue-100 mt-1 px-4 py-2 rounded-lg mb-4 w-full" type="tel" placeholder="City" />
                                <input className="hover:border-blue-600 border-4 border-blue-100 mt-1 px-4 py-2 rounded-lg mb-4 w-full" type="tel" placeholder="Name of Project / Property" />
                                <input className="hover:border-blue-600 border-4 border-blue-100 mt-1 px-4 py-2 rounded-lg mb-4 w-full" type="tel" placeholder="Area / Sector" />


                                {(selectedUser === 'owner' || selectedUser === 'agent') && (
                                    <div>

                                        <input className="hover:border-blue-600 border-4 border-blue-100 mt-1 px-4 py-2 rounded-lg mb-4 w-full" type="tel" placeholder="House No. (Optional)" />
                                    </div>)}


                            </div>

                            <button className="bg-blue-600 hover:bg-blue-800 text-white py-3 px-36 mt-auto text-lg font-semibold rounded-lg shadow-md transition duration-300 ease-in-out self-center" onClick={handleContinueClick}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;
