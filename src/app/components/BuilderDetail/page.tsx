'use client'

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import CheckBox from '../CheckBox/CheckBox';

const page = () => {
    type UserType = 'owner' | 'agent' | 'builder';


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
            case 'agent':
                router.push('/components/Submit'); // Navigation for agent
                break;
            case 'builder':
                router.push('/components/Submit'); // Navigation for builder
                break;
            default:
                toast.error('Invalid user type');
                break;
        }

    };


    const handleCheckboxChange = (label: string) => {

    };

    return (
        <div>
            <div className='   space-y-3'>
                <h1 className=' font-semibold text-xl pt-1 '>Before you post... Let Buyers know who you are</h1>
                <h2 className=' '>These Details will help serious buyers to connect with you </h2>
                        <h1 className=' font-semibold pt-1 '>Are you a RERA Registered?</h1>
                        <div className='space-x-2  '>
                            <CheckBox label='Yes' id={'Yes'} onChange={() => handleCheckboxChange('Yes')} ></CheckBox>
                            <CheckBox label='I have Applied' id={'I have Applied'} onChange={() => handleCheckboxChange('I have Applied')} ></CheckBox>
                            <CheckBox label='Not Applicable' id={'Not Applicable'} onChange={() => handleCheckboxChange('Not Applicable')} ></CheckBox>
                        </div>
                        <h1 className=' font-semibold  '>RERA Number</h1>
                        <input type="text" placeholder='Enter your RERA number' className='rounded-lg border-blue-200 border-2 p-2 pr-24' />
                        <h1 className=' font-semibold  '>License Type</h1>
                        <div className='space-x-2  '>
                            <CheckBox label='Individual' id={'Individual'} onChange={() => handleCheckboxChange('Individual')} ></CheckBox>
                            <CheckBox label='Firm' id={'Firm'} onChange={() => handleCheckboxChange('Firm')} ></CheckBox>
                        </div>
                       
                    </div>
           
        </div>
    )
}

export default page
