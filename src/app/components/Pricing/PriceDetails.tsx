import React from 'react'
import Image from 'next/image'

const PriceDetails = () => {
    return (
        <div>
            <div className=" ">
                                <h1 className='font-bold text-xl sm:text-2xl -mt-4'>Price Details</h1>
                            </div>
                            <div className="relative my-2">
                                <input type="text" className="pl-16 pr-20  py-3  border-4 text-sm sm:text-sm placeholder:text-black placeholder:opacity-60  border-blue-100 rounded-lg" placeholder="Expected Price" />

                                <div
                                    className="absolute inset-y-0 left-0 pl-3    flex items-center    pointer-events-none"
                                >
                                    <Image src="/rupee.webp" alt="rupee" width={15} height={20} className="mr-8 pr-1" />

                                </div>
                            </div>
                            <div className="relative my-2">
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
                            <div className="flex flex-row flex-wrap py-3">
                                <span className="">
                                    <input type='checkbox' />
                                    <label className="ml-1">All Inclusive Price</label>
                                </span>
                                <span className="pl-8 ">
                                    <input type='checkbox' />
                                    <label className="ml-1">Price Negotiable</label>
                                </span>
                                <span className=" pt-3">
                                    <input type='checkbox' />
                                    <label className="ml-1">Tax and Govt. Charges Excluded</label>
                                </span>
                            </div>
        </div>
    )
}

export default PriceDetails
