'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from '../Card/page';

type UserType = 'owner' | 'agent' | 'builder';

const SecondPage = () => {
    const router = useRouter();
    const [selectedUser, setSelectedUser] = useState<UserType | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('selectedUser');
        if (storedUser) {
            setSelectedUser(storedUser as UserType);
        }
    }, []);

    const handleCheckboxChange = (user: UserType) => {
        setSelectedUser(user);
    };

    const handleContinueClick = () => {
        if (!selectedUser) {
            toast.error('Please select a user type');
            return;
        }

        localStorage.setItem('selectedUser', selectedUser);

        // If commercial is selected 
        const storedRole = localStorage.getItem('selectedRole');
        if (storedRole === 'commercial') {
            switch (selectedUser) {
                case 'owner':
                    router.push('/Commercial/BasicDetails');
                    break;
                case 'agent':
                    router.push('/components/AgentDetails');
                    break;
                case 'builder':
                    router.push('/Commercial/PropertyProfile');
                    break;
                default:
                    toast.error('Invalid user type');
                    break;
            }
        } else if(storedRole === 'plot') {
                switch (selectedUser) {
                    case 'owner':
                        router.push('/Commercial/BasicDetails');
                        break;
                    default:
                        toast.error("Owner details are required for plot owners");
                        break;
                }
        }
        
        else {
            // If commercial is not selected then else is for residential
            switch (selectedUser) {
                case 'owner':
                    router.push('/components/BasicDetails');
                    break;
                case 'agent':
                    router.push('/components/AgentDetails');
                    break;
                case 'builder':
                    router.push('/components/BasicDetails');
                    break;
                default:
                    toast.error('Invalid user type');
                    break;
            }
        }
    };


    return (
        <div className="md:w-10/12 md:mx-20 flex flex-col md:flex-row mt-5">
            <div className=" pb-32 md:mx-16 md:mr-11 md:p-8 rounded-2xl">
                <div className="border-4 border-blue-300 mt-16 md:p-5 rounded-2xl flex flex-col">
                    <h1 className="text-xl font-bold mb-4 mt-14">To Continue Please let us know what you are?</h1>
                    <div className="space-y-3">
                        <span>
                            <input
                                type="radio"
                                className="peer hidden"
                                id="owner_"
                                name="role"
                                value="owner_"
                                checked={selectedUser === 'owner'}
                                onChange={() => handleCheckboxChange('owner')}
                            />
                            <label htmlFor="owner_" className="peer-checked:border-blue-500 border-4 border-blue-100 px-4 rounded-lg">
                                An Owner
                            </label>
                        </span>
                        <span>
                            <input
                                type="radio"
                                className="peer hidden"
                                id="agent_"
                                name="role"
                                value="agent_"
                                checked={selectedUser === 'agent'}
                                onChange={() => handleCheckboxChange('agent')}
                            />
                            <label htmlFor="agent_" className="peer-checked:border-blue-500 border-4 border-blue-100 px-4 rounded-lg ml-4">
                                A Agent
                            </label>
                        </span>
                        <span>
                            <input
                                type="radio"
                                className="peer hidden"
                                id="builder_"
                                name="role"
                                value="builder_"
                                checked={selectedUser === 'builder'}
                                onChange={() => handleCheckboxChange('builder')}
                            />
                            <label htmlFor="builder_" className="peer-checked:border-blue-500 border-4 border-blue-100 px-4 rounded-lg ml-4">
                                A Builder
                            </label>
                        </span>
                    </div>
                    <p className="mt-7 mb-16 text-lg">Please choose correctly, if you want to change in the future, it&apos;s done through the profile section</p>
                    <button className="bg-blue-600 hover:bg-blue-800 font-semibold text-white py-3 px-36 mt-auto mb-14 rounded-md shadow-md transition duration-300 ease-in-out self-center" onClick={handleContinueClick}>
                        Continue
                    </button>
                </div>
            </div>

            {/* Second grid */}
            <div className="m-16 md:mt-0 flex flex-grow flex-col items-center md:items-start 0">
                <div className="-mt-14 p-1 -mr-4 -ml-16 flex-grow-0">
                    <Card label="This information creates a transparency and  builds trust with buyers / tenants" src="/User.webp" alt="User" width={140} height={140} />
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default SecondPage;
