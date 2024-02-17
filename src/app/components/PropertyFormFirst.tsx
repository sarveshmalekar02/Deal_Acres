import React from 'react';
import PropertyFormSecond from './PropertyFormSecond';
import Image from 'next/image';
import Link from 'next/link';


const PropertyForm = () => {
  return (
    <>

      <div className=" min-h-screen py-1 px-4 md:px-8 mb-20">
        <div className=" max-w-4xl mt-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 ">

          {/* First grid */}
          <div className=''>
            <div className="border-4  border-blue-300 mt-16 mb-24 -ml-3 md:p-6 rounded-2xl flex flex-col ">
              <div className='-ml-2'>
                <h1 className="text-2xl font-bold ">Post Your Property for free</h1>
                <h2 className="text-sm font-semibold mb-3">Add Basic Details</h2>
                <label className="block text-[15px] font-bold mb-2">Looking For.....</label>
                <div className="space-y-2">
                  <button className=" hover:border-blue-600 border-4 border-blue-100 p-1 px-9 rounded-lg">Sell</button>
                  <button className=" hover:border-blue-600 border-4  border-blue-100 p-1 px-9 rounded-lg ml-2 ">Rent</button>
                  <label className="block text-[15px] pr-2 font-bold mb-2">Property Type</label>
                  <button className=" hover:border-blue-600 border-4  border-blue-100 p-1 px-4 rounded-lg ">Residential</button>
                  <button className=" hover:border-blue-600 border-4  border-blue-100 p-1 px-4 rounded-lg ml-5 ">Commercial</button>
                  <button className=" hover:border-blue-600 border-4  border-blue-100 p-1 rounded-lg ">Flat/Apartment</button>
                  <button className=" hover:border-blue-600 border-4  border-blue-100 p-1  rounded-lg ml-1 ">Villa</button>
                  <button className=" hover:border-blue-600 border-4  border-blue-100 p-1 rounded-lg ml-1 ">Plot</button>
                </div>
                <button className=" hover:border-blue-600 border-4  border-blue-100 text-[14px] p-1 rounded-lg  ">Independent House</button>
                <button className=" hover:border-blue-600 border-4  border-blue-100 text-[14px] p-1 m-1 rounded-lg ml-1 ">Builder Floor</button>

                <div className="pt-1 ml-2">
                  <h2 className="text-sm font-semibold mb-3">Add Basic Details</h2>
                  <input className=" hover:border-blue-600 border-4  border-blue-100 -mt-1 px-24 py-2 -ml-1 rounded-lg " type="tel" placeholder="Phone Number"></input>

                </div>

                <p className="text-xs mt-7 m-1 ">Are you a Registered User? <a href="/Login" className="text-blue-500">Login</a></p>
              </div>
              <div>
                <Link href="/login" className="text-blue-500">
                <button className="bg-blue-600 hover:bg-blue-800 text-white py-1 px-44 mt-auto  rounded-md shadow-md transition duration-300 ease-in-out self-center ">
                  Start Now
                </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Second grid */}
          <div className="bg-blue-100  ml-5 mr-5 md:p-10 rounded-3xl  mb-16 border border-gray-300">
            <h1 className="text-2xl font-semibold -ml-5 pt-8 mb-6">Post property Ad to <br /> sell or rent online for <text className=" text-black font-bold">FREE</text> </h1>
            <div className="ml-2 text-xl  ">
              <div className="mb-40">
                <div >
                  <ul className='marker:text-black list-disc pl-2'>
                    <li>Advertise For FREE</li>
                    <li>Sell 10 X faster</li>
                    <li>Connect with genuine buyer</li>
                    <li>Get unlimited enquiries</li>
                  </ul>
                </div>
              </div>
            </div>
            <Image className='pt-14 pl-8' src="/deal_acres/public/download.jpg" alt="house" height={100} width={300} />


          </div>
        </div>
      </div>




      <div className='md:mx-14 -mt-12'  >
        <h1 className='md:mx-36 pl-20 py-3 pr-10  text-[25px] pb-12 text-black rounded-md  font-bold justify-center flex'>STEP BY STEP GUIDE FOR FREE PROPERTY LISTING

        </h1>
      </div>

      <div className='md:mx-9'>
        <div className='grid grid-cols-3 md:mx-28 '>

          <div className='pr-14 pb-20'><Image className='md:-m-5 pb-2' src='/public/form.webp' alt='form' width={141} height={171} />
            <h1 className='font-bold text-[18px] pb-3'>Step 1 : Add proper detail</h1>
            <p className='text-[17px]'>Start filling the form with a few basic details like type of property, Area, Location, etc.</p>
          </div>

          <div className='pr-14 pb-16'><Image className='md:-m-5 pb-2' src='/public/media.webp' alt='media' width={141} height={171} />
            <h1 className='font-bold text-[18px] pb-3'>Step 2 : Add Images & Videos</h1>
            <p className='text-[17px]'>Upload your property images or videos either from your Mobile or Desktop.</p>
          </div>

          <div className='pr-14 pb-16'><Image className='md:-m-5 pb-2' src='/public/FirstHome.webp' alt='home1' width={141} height={171} /><h1 className='font-bold text-[18px] pb-3'>Step 3 : Add Pricing</h1>
            <p className='text-[17px]'>Upload the expected price of your property, and now it is ready to post..</p>
          </div>
        </div>


        <Image src='/room.webp' alt='home' layout='responive' width={1800} height={900} />
      </div>


      <div className='pl-2'>

        <div className='md:mx-36  py-10  border-2 rounded-lg border-blue-300 border-b-4 pb-1' >
          <h1 className='justify-center flex mb-2 font-[600] text-[40px]'>Why Choose Deal Acres?</h1>
          <p className='pl-4 text-[19px] font-normal ml-4 mr-3' >Deal Acres is the only place where you can sell your property easily and quickly. If you are looking for one of the top free property listing sites in India, Deal Acres came first. When it comes to the free property listing it becomes difficult to pick one that will actually help you rent or sell your residential or commercial property, then Deal Acres is one of the friendliest and fastest-growing real estate website in India today, with some of the simple and easy facilities for uploading your property.</p>

          <p className='pl-4 pt-5 text-[19px] font-normal ml-4 mr-3'> Property listing is the best way to reach out to potential customers who need to buy a home or home for rent. Homebuyers or tenants can shortlist the best among the pool of the real estate listing.</p>

          <p className='pl-4 pt-5 text-[19px] font-normal ml-4 mr-3'>So, a builder, an owner, or an agent does need not spend hours selling the house online or trying a hand at the online rental. Listing property is a process of a few minutes and you are done. Deal Acres has traffic and thousands of prospective homebuyers and tenants who visit the website every day. Sell your property quickly with Deal Acres.</p>
        </div>
      </div>






      <PropertyFormSecond />

    </>
  );
};

export default PropertyForm;
