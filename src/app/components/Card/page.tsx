import React from 'react';
import Image, { ImageProps } from 'next/image';

const Page: React.FC<{ title: string, src: string, alt: string, width: number, height: number }> = ({ title,src,alt,width,height}) => {



    return (
        
                <div className="  bg-blue-200  md:mx-5  mt-24 border-2 rounded-lg border-blue-200">
                    <h1 className='text-[19px] font-normal pr-2  md:mt-24 ml-10'>{title}</h1>
                    <Image className='  md:mx-28  md:my-14 flex flex-row flex-none items-center' src={src} alt={alt} width={width} height={height} ></Image>

                    <div className='flex flex-col items-center md:my-24'>
                        <h1 className=' text-lg font-bold'>Need Help?</h1>
                        <h2 className=' text-lg'>You Can Email Us </h2>
                        <a href="mailto:contact@dealacres.com" className="text-lg text-blue-500 hover:underline p-0">Contact@dealacres.com</a>
                    </div>

                </div>

        
    );
};

export default Page;
