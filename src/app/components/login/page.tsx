'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/styles/first.module.css';
import Card from '../Card/page';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

type UserType = 'owner' | 'agent' | 'builder';

function Login() {
    const router = useRouter();
    const [selectedUser, setSelectedUser] = useState<UserType | null>(null);


    useEffect(() => {
        const storedUser = localStorage.getItem('selectedUser');
        if (storedUser) {
            setSelectedUser(storedUser as UserType);
        }
    }, []);



    const handleVerifyLogin = () => {
       
        
       
        const verificationSuccess = true;

        if (verificationSuccess) {
            // Redirect to the UserPage
            router.push('/components/UserPage');
        } else {
            // Display error message if verification fails
            toast.error('Verification failed. Please try again.');
        }
    };

    return (
        <>
            <div className="md:px-8 mb-20 flex flex-grow flex-col md:flex-row">
                <div className="md:w-3/4">
                    <div className="md:mx-36 -mt-12 w-full md:w-3/4 flex-grow-0">
                        <Card src={'/login.webp'} alt={'login'} title='Your Phone number gives access to your account.' width={141} height={171} />
                    </div>
                </div>
                <div className="md:w-8/12 md:mx-24  mt-5">
                    <div className="border-4 border-blue-300 mr-10 mt-24 mb-24 md:p-8 rounded-2xl">
                        <div className="-ml-4">
                            <div className="-mt-2">
                                <h1 className="text-xl font-bold">Welcome back,</h1>
                                <h1 className="text-xl mb-3">Your number is registered with us. Please login to continue</h1>
                                <label className="block text-lg mb-2">+91-XXXXXXXXXX</label>
                            </div>
                            <label className="block text-2xl font-semibold mb-2">Enter Your OTP</label>
                            <div className="flex space-x-3 mb-2 mr-14">
                                <input className="border border-black w-2/4 h-12 pr-3 inline-block"></input>
                                <input className="border border-black w-2/4 h-12 pr-3 inline-block"></input>
                                <input className="border border-black w-2/4 h-12 pr-3 inline-block"></input>
                                <input className="border border-black w-2/4 h-12 pr-3 inline-block"></input>
                            </div>
                            <p className="text-sm m-1 "><a href="#" className="text-blue-500">Resend OTP</a></p>
                        </div>
                        <div className="mt-10 -ml-4">
                            <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-4 px-28 mt-auto mb-4 rounded-lg shadow-md transition duration-300 ease-in-out self-center"
                                style={{ paddingLeft: '6.8rem', paddingRight: '8rem' }} onClick={handleVerifyLogin}>
                                Verify & Login
                            </button>
                            <Link href={'/components/UserPage'} prefetch={false}>
                                <button className={`hover:bg-blue-400 text-blue-700 font-bold py-4 px-32 mb-4 mt-auto rounded-lg transition duration-300 ease-in-out self-center border-blue-500 ${styles.border}`} style={{ paddingLeft: '5rem' }}>
                                    Login via - E-mail
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;