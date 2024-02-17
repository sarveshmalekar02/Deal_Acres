import React from 'react';
import Image from 'next/image';

const PropertyFormSecond: React.FC = () => {
  return (
    <>
      <div>
        <div className='md:mx-14 pt-8'>
          <h1 className='md:mx-96 py-3 pl-1 text-[20px] text-white rounded-md bg-blue-600 font-bold justify-center flex'>List Your Property for FREE NOW!</h1>
        </div>

        <div className='md:mx-36 py-10 pt-4'>
          <h1 className='pl-3 py-3 text-[35px] font-bold'>Everything you need to know about Deal Acres <br /> FREE Property Listing...</h1>
          <h1 className='pl-3 py-3 text-[20px] font-bold'>What is Free Property Listing?</h1>
          <p className='pl-4 text-[18px] font-normal'>It is a process where a builder, as owner or agent can list their property for free on this real estate portal. Through this, you can sell or rent your property effectively and efficiently. It is the perfect way to reach the audience who want to rent their home or buy their dream home. By doing property listing you save your time for selling or renting it.</p>
          <h1 className='py-3 pl-3 text-[20px] font-bold'>Advantages of Free Listing</h1>
          <ul className='pl-10 text-[18px] marker:text-black list-disc'>
            <li>Provide free online exposure to more buyers.</li>
            <li>A platform for selling and buying real estate.</li>
            <li>Interact with and engage potential customers in your area.</li>
            <li>Negotiate and expedite the purchase.</li>
            <li>You can save money by working as your own real estate agent.</li>
          </ul>
        </div>

        <div className='py-1 pl-2'>
          <h1 className='md:mx-36 py-3 pl-2 text-[38px] font-semibold'>Frequently Asked Questions</h1>
          <div className='md:mx-32'>
            <Image className='pb-11' src='https://media.canva.com/1/image-resize/1/1600_601_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9OTUg1Zy9NQUZzVnVOTUg1Zy8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAALOLXwV_GBsSDojRqPX8K1LUGhZdx1DuPbafeUc38Px7&exp=1707411762&x-canva-quality=screen_2x&csig=AAAAAAAAAAAAAAAAAAAAAIhv-sWDLxwVO1eZkuLBwJkgflOJq0VbYiu749bM5T2h' alt='qus' width={1000} height={600} />
          </div>
        </div>

        <div>
          <h1 className='md:mx-36 py-2 pl-3 text-[26px] font-[630]'>Interesting Reads</h1>
          <Image className='md:mx-36 pb-12' src='https://media.canva.com/1/image-resize/1/800_251_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9zNHE5WS9NQUZyQ2JzNHE5WS8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAME66DG3fmbVGMCXjtmh8mQX6iJ8dhpN_gcvluOuPqkf&exp=1707414180&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAADy7sRoxKOKzQ1yuENvwtwdsFeGrtiHlPlQdUdzMe-n5' alt='Reads' width={950} height={280} />
        </div>
      </div>
    </>
  );
};

export default PropertyFormSecond;
