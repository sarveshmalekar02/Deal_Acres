import Image from "next/image";
import styles from '@/app/styles/first.module.css'
import Bathroom from './components/PropertyProfile/Bathroom'

import PropertyFormSecond from "./components/PropertyFormSecond"

import Selection from "./components/Selection";


export default function Home() {
  return (
    <div>

      <>
        <div className="min-h-screen py-1 px-4 md:px-8 mb-20">
          <div className="max-w-4xl mt-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* First grid */}
            <Selection />


            {/* Second grid */}
            <div className="bg-blue-100 ml-5 mr-5 md:p-10 rounded-3xl mb-16 border border-gray-300">
              <h1 className="text-2xl font-semibold -ml-5 pt-8 mb-6">Post property Ad to <br /> sell or rent online for <span className="text-black font-bold">FREE</span> </h1>
              <div className="ml-2 text-xl">
                <div className="mb-40">
                  <div>
                    <ul className="marker:text-black list-disc pl-2">
                      <li>Advertise For FREE</li>
                      <li>Sell 10 X faster</li>
                      <li>Connect with genuine buyer</li>
                      <li>Get unlimited enquiries</li>
                    </ul>
                  </div>
                </div>
              </div>
              <Image className="-mt-16 pl-2" src="/houseTour.jpeg" alt="house" height={40} width={260} />
            </div>
          </div>
        </div>

        <div className="md:mx-14 -mt-12">
          <h1 className="md:mx-36 pl-20 py-3 tracking-tight pr-10 text-[25px] pb-12 text-black rounded-md font-bold justify-center flex">STEP BY STEP GUIDE FOR FREE PROPERTY LISTING</h1>
        </div>

        <div className="md:mx-14">
          <div className="grid grid-cols-1 md:grid-cols-3 md:mx-28">

            <div className="pr-14 pb-20">
              <Image className="md:-m-5 pb-2" src="https://media.canva.com/1/image-resize/1/200_200_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9qcnU3US9NQUZzVlNqcnU3US8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAMLZYF7JNqjsp4rywYH7wiJ9hyDMsTeVNQYvczvtBsYK&exp=1707433062&x-canva-quality=thumbnail&csig=AAAAAAAAAAAAAAAAAAAAAAU0_RzAcCF7fRstTCm1SugWw267HRxcIXFffHq1BQn9" alt="" width={150} height={100} />
              <h1 className="font-bold text-[18px] pb-3">Step 1 : Add proper detail</h1>
              <p className="text-[17px]">Start filling the form with a few basic details like type of property, Area, Location, etc.</p>
            </div>
            <div className="pr-14 pb-16">
              <Image className="md:-m-5 pb-2" src="https://media.canva.com/1/image-resize/1/200_200_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9lNGk2US9NQUZzVlhlNGk2US8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAALl-zjtztDa5lAu03lmKodH1vUzRFIGnSQ7YMQaHto2R&exp=1707433085&x-canva-quality=thumbnail&csig=AAAAAAAAAAAAAAAAAAAAAApT882vtuP9jheum-IoTDL-DuIF5-n5D63katCL2ET2" alt="" width={150} height={100} />
              <h1 className="font-bold text-[18px] pb-3">Step 2 : Add Images & Videos</h1>
              <p className="text-[17px]">Upload your property images or videos either from your Mobile or Desktop.</p>
            </div>
            <div className="pr-14 pb-16">
              <Image className="md:-m-5 pb-2" src="https://media.canva.com/1/image-resize/1/200_200_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9jcUZtRS9NQUZzVmRjcUZtRS8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAItZDV17u0gJ_tRnz38M6NFgBJd6N89eIDjTuz_dteUF&exp=1707431436&x-canva-quality=thumbnail&csig=AAAAAAAAAAAAAAAAAAAAAJT-ASoTNyOirPN9Bu50YtKWmXMwpQxrHjhz1bJ-JH8F" alt="" width={150} height={100} />
              <h1 className="font-bold text-[18px] pb-3">Step 3 : Add Pricing</h1>
              <p className="text-[17px]">Upload the expected price of your property, and now it is ready to post..</p>
            </div>
          </div>
        </div>

        <div className="mb-44">
          <div className=" relative ">
            <Image src="/room.webp" alt="home" layout="responsive" width={1800} height={300} className="max-h-[450px]" />
            <div className="absolute -inset-y-44 top-56 md:mx-36  border-2 rounded-lg border-blue-300 bg-white border-b-4 pb-1 ">
              <h1 className="text-center mb-2 font-semibold text-2xl md:text-4xl mt-3">Why Choose Deal Acres?</h1>
              <p className="text-lg md:text-xl mx-4 mb-6 " style={{ lineHeight: '1.3' }}>
                Deal Acres is the only place where you can sell your property easily and quickly. If you are looking for one of the top free property listing sites in India, Deal Acres came first. When it comes to the free property listing it becomes difficult to pick one that will actually help you rent or sell your residential or commercial property, then Deal Acres is one of the friendliest and fastest-growing real estate website in India today, with some of the simple and easy facilities for uploading your property.
              </p>
              <p className="text-lg md:text-xl mx-4 mb-6" style={{ lineHeight: '1.3' }}>
                Property listing is the best way to reach out to potential customers who need to buy a home or home for rent. Homebuyers or tenants can shortlist the best among the pool of the real estate listing.
              </p>
              <p className="text-lg md:text-xl mx-4" style={{ lineHeight: '1.3' }}>
                So, a builder, an owner, or an agent does need not spend hours selling the house online or trying a hand at the online rental. Listing property is a process of a few minutes and you are done. Deal Acres has traffic and thousands of prospective homebuyers and tenants who visit the website every day. Sell your property quickly with Deal Acres.
              </p>
            </div>
          </div>
        </div>

        <PropertyFormSecond />
      </>






    </div>
  );
}
