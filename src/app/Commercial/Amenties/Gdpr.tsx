'use client'

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

type UserType = 'owner' | 'agent' | 'builder';

const Gdpr = () => {
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
                    router.push('/components/Submit');
                    break;
                case 'agent':
                    router.push('/components/Submit');
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
            case 'owner':
                router.push('/components/Submit');
                break;
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
    }
    };
    return (
        <div>
            <div className="flex flex-col max-w-7xl justify-center w-11/12 mx-auto ">

                <h1 className='font-bold  text-[25px] -mt-4 ml-28'>GDPR Agreement</h1>
                <span className="pl-28 flex items-center mt-2">
                    <input type='checkbox' className="h-6 w-6 mr-2  " />
                    <label className="text-lg">I agree to this website "Deal Acres" storing my submitted information; see more details below.</label>
                </span>
                <div className="bg-blue-50 text-lg  rounded-lg p-4 pt-2 ml-24 mt-4 mr-20 pb-0 mb-10">
                    The data based on a search query on Deal Acres has been made available
                    for information/advertisement purposes. No warranty is implied for its
                    accuracy. Nothing contained herein will be deemed to constitute any
                    sort of legal advice, solicitation, marketing, offer of sale, an
                    invitation to offer, or an invitation to get by the developer/builder
                    or any other entity. You are advised to visit the relevant RERA
                    website. And get more information about the builder and property
                    directly. Before deciding on the project content displayed on
                    dealacres.com. If you have any queries contact Deal Acres at
                    contact@dealacres.com.
                </div>

                <button className="mb-36 bg-blue-600 hover:bg-blue-800 flex justify-center items-center w-10/12 text-white py-3 md:mx-24 pr-16  mt-auto text-lg font-semibold rounded-md shadow-md self-center" onClick={handleContinueClick}>Post Property</button>

            </div>
        </div>
    )
}

export default Gdpr
