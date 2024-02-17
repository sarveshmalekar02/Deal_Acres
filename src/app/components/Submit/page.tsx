'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card from "../Card2/page";

const Submit = () => {
  return (
    <>
   
    <div className="flex flex-col items-center justify-center py-20 mb-24 px-6">
      <div className="border-4 rounded-xl flex flex-col sm:py-16 py-4 sm:px-36 -ml-9 px-10 pr-8 mb-16 items-center relative justify-center border-blue-200">
        <Image
          src="/cross.svg"
          className="top-0 absolute bg-blue-200 right-0"
          alt="cross"
          width={15}
          height={35}
        />
        <Image src="/blueTick.svg" alt="success" width={100} height={100} />
        <h1 className="italic text-3xl lg:text-4xl font-extrabold pt-2 -mb-2">
          SUBMITTED
        </h1>
      </div>

      <div className="border-4 rounded-xl flex flex-col sm:py-10 py-4 sm:px-32 mr-3 -mt-7 ml-2 items-center relative justify-center border-blue-200">
        <Image
          src="/cross.svg"
          className="top-0 absolute bg-blue-200 right-0"
          alt="cross"
          width={15}
          height={25}
        />

        <h1 className="text-2xl lg:text-3xl -mt-3 text-center font-bold">
          How was your Experience?
        </h1>
        <div className="flex flex-col lg:flex-row py-5 justify-center">
          <Image
            src="/review.svg"
            className="cursor-pointer"
            alt="angry"
            height={500}
            width={300}
          />
        </div>
        <Link href={'/'} prefetch={false}>
          <button className="cursor-pointer bg-blue-600 text-3xl sm:text-3xl mt-1 font-bold py-2 px-4 rounded-2xl text-white">
            Submit
          </button>
        </Link>
      </div>
    </div>
      
    </>
  );
};

export default Submit;
