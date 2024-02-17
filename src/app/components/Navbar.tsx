import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
      <nav className="flex items-center justify-between  md:px-28 bg-blue-600">
        <div className='-ml-28 pl-3'>
        <Link href="/">
        <Image alt="logo" width={73} height={20} src="/logo.webp"/>  
        </Link>
        </div>

        <div className="bg-blue-600  rounded-full ">
        <Image className='pl-1' alt='profile icon' width={40} height={40}  src="/icons8-male-user-24.png"/>
        </div>

      </nav>
    );
  };
  

export default Navbar
