'use client'

import { useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import CheckBox from '../CheckBox/CheckBox';

import Image from 'next/image';
import Card from '../Card/page'
import BrokerDetails from '@/app/components/BrokerDetail/page'
import BuilderDetails from '../BuilderDetail/page'
import Gdpr from '../Amenties/Gdpr';


type UserType = 'owner' | 'agent' | 'builder';




const Page = () => {


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
                    router.push('/Commercial/BasicDetails');
                    break;
                case 'agent':
                    router.push('/Commercial/BasicDetails');
                    break;
                case 'builder':
                    router.push('/components/Submit');
                    break;
                default:
                    toast.error('Invalid user type');
                    break;
            }
        } else {
        switch (selectedUser) {

            case 'agent':
                router.push('/components/BasicDetails'); // Navigation for agent
                break;
            case 'builder':
                router.push('/components/Submit'); // Navigation for builder
                break;
            default:
                toast.error('Invalid user type');
                break;
        }
    }

    };



    return (
        <>
        <div className='  flex  pb-16'>
            <div className=' ml-2 w-6/12 pt-5 mx-80 pb-3'>
                <h1 className='w-2/3 p-4  md:mx-32 flex-none lg:text-2xl font-semibold tracking-wider mt-14 pt-5         '>Before listing your property <br /> buyer should know about you?</h1>
                <div className='pl-6  border-4 pb-3 rounded-xl flex-col border-blue-200 md:mx-36 w-4/6   '>
                    <div className='   space-y-3'>
                        
                        {selectedUser === 'agent' && (

                        <BrokerDetails/>
                        )}

                        {selectedUser === 'builder' && (
                            <BuilderDetails/>
                        )}

                        <h1 className=' font-semibold  '>Company Details</h1>
                        <input type="text" placeholder='Company Name' className='rounded-lg border-blue-200 border-2 p-2 pr-24' />
                        <input type="text" placeholder='Company URL(Optional) ' className='rounded-lg    border-blue-200 border-2 p-2 pr-24' />
                        <input type="text" placeholder='Company Address 1' className='rounded-lg border-blue-200 border-2 p-2 pr-24' />
                        <input type="text" placeholder='Company Address 2(Optional)' className='rounded-lg border-blue-200 border-2 p-2 pr-24' />
                        <input type="text" placeholder='City ' className='rounded-lg border-blue-200 border-2 p-2 pr-24' />

                        <h1 className=' font-semibold  '>Describe Your Company</h1>
                        <input type="text" placeholder='Write here ' className='rounded-lg border-blue-200 border-2 p-2 pb-10 pr-24 ' />
                        <h1 className=' font-semibold  '>Contact Details</h1>
                        <input type="text" placeholder='Mobile Number ' className='rounded-lg border-2 border-blue-200 p-2  pr-24 ' />
                        <input type="text" placeholder='Mobile Number(Optional) ' className='rounded-lg border-2 border-blue-200 p-2  pr-24 ' />
                        <input type="text" placeholder='Mobile Number(Optional) ' className='rounded-lg border-2 border-blue-200 p-2  pr-24 ' />
                        <input type="text" placeholder='Landline Number(Optional) ' className='rounded-lg border-2 border-blue-200 p-2  pr-24 ' />
                        <input type="text" placeholder='Landline Number(Optional) ' className='rounded-lg border-2 border-blue-200 p-2  pr-24 ' />
                    </div>
                    <div className='mt-6  -ml-2 '>
                        
                    {(selectedUser === 'owner' || selectedUser === 'agent') && (
                        <button className="bg-blue-600 hover:bg-blue-800 text-white font-medium text-lg py-3 mt-auto -ml-1 mb-2 rounded-lg shadow-md transition duration-300 ease-in-out self-center" 
                        style={{ paddingLeft: '9.5rem', paddingRight: '9rem' }}
                        onClick={handleContinueClick}>
                                Continue
                            </button>
                                )}

                       
                    </div>
                </div>
            </div>



            <div className='   flex-none md:-ml-72  mt-3 w-4/12 '>
                <Card label={'This information helps buyer to connect with you easily'} src={'/Men.webp'} alt={'Sale'} width={141} height={171}/>

            </div>


            </div>

            {(selectedUser === 'builder') && (
                <Gdpr />
            )}


</>
            

    )
}

export default Page
