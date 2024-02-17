'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ProgressBar from '../ProgressBar/ProgressBar'
import PriceDetails from '../Pricing/PriceDetails'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'



type UserType = 'owner' | 'agent' | 'builder';



const Brokerage:React.FC<{}> = ({}) => {
   
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
                router.push('/components/Amenties'); // Navigation for agent
                break;
            case 'builder':
                router.push('/components/Amenties'); // Navigation for builder
                break;
            default:
                toast.error('Invalid user type');
                break;
        }
    }
        else {
            // If commercial is not selected then else is for residential
            switch (selectedUser) {
                
                case 'agent':
                    router.push('/components/Amenties'); // Navigation for agent
                    break;
                case 'builder':
                    router.push('/components/Amenties'); // Navigation for builder
                    break;
                default:
                    toast.error('Invalid user type');
                    break;
            }
        }


            






        };

    return (
        <div>
            <ProgressBar status1={true} status2={true} status3={true} status4={true} status5={false} />
            <div className="min-h-screen  mb-28 ">
                <div className="max-w-4xl mx-auto  flex flex-col pt-8 md:flex-row gap-28">
                    <div className="-mx-28">
                        <div className="border-4 border-blue-300 pt-12 mb-4  md:px-8 mr-24 rounded-2xl" style={{ marginLeft: '5.9rem' }}>
                            <div className="-ml-3">

                               
                                    <PriceDetails />
                            <h1 className="text-lg font-semibold mb-4 mt-1 -ml-1">Do You Charge Brokerage</h1>

                            <div className="flex flex-row flex-wrap pb-4  ">
                                <span className="">
                                    <input type='checkbox' />
                                    <label className="ml-1 ">Yes</label>
                                </span>
                                <span className="pl-24">
                                    <input type='checkbox' />
                                    <label className="ml-1">No</label>
                                </span>
                                <div className='mt-3'>
                                <span className=" pt-3 ">
                                    <input type='checkbox' />
                                    <label className="ml-1 ">Fixed Charges</label>
                                </span>
                                <span className=" pt-3 pl-5">
                                    <input type='checkbox' />
                                    <label className="ml-1">Percentage of Price</label>
                                </span>
                                </div>
                                <div className="relative my-5">
                                <input type="text" className="pl-16 pr-5  py-4 border-4 text-xs placeholder:text-black placeholder:opacity-60  border-blue-100 rounded-lg" placeholder="Enter Brokerage Charges" />
                                <div
                                    className="absolute inset-y-0 left-0 pl-3    flex items-center    pointer-events-none"
                                >
                                    <Image src="/rupee.webp" alt="rupee" width={15} height={20} className="mr-8 pr-1" />
                                    </div>
                                </div>
                                
                                <span className=" pb-3">
                                    <input type='checkbox' />
                                    <label className="ml-1">Brokerage Negotiable</label>
                                </span>
                            </div>
                            <button className="bg-blue-600 hover:bg-blue-800 text-white mb-12 py-3 px-36  mt-auto text-lg font-semibold rounded-lg shadow-md transition duration-300 ease-in-out self-center" onClick={handleContinueClick} >Continue</button>
                        </div>
                    </div>
                    </div>



                    <div className="-mt-24 ">
                        <div className=" -mr-6  rounded-3xl tracking-wider" style={{paddingRight:'0.8rem'}}>
                   
                       <div className="bg-blue-200 md:mx-5 mt-24 border-2 rounded-lg border-blue-200">
                            <h1 className="text-[19px] font-normal pr-2 md:mt-24 ml-10">Mention the Expected price of your property with your Brokerage Charges.</h1>
                            <Image className="md:mx-28 md:my-14 flex flex-row flex-none items-center" src='/coins.webp' alt='coins' width={141} height={171} />
                            <div className="flex flex-col items-center md:my-24">
                                <h1 className="text-lg font-bold">Need Help?</h1>
                                <h2 className="text-lg">You Can Email Us</h2>
                                <a href="mailto:contact@dealacres.com" className="text-lg text-blue-500 hover:underline p-0">Contact@dealacres.com</a>
                            </div>
                        </div>
                       
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Brokerage
