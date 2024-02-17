import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
      <nav className="flex items-center justify-between  md:px-28 bg-blue-600">
        <div className='-ml-28 pl-3'>
        <Link href="/">
        <Image alt="Your alt text" width={73} height={20} src="https://media.canva.com/1/image-resize/1/200_200_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9PQTVGby9NQUZybXhPQTVGby8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAMURFfbtiGetVqxxWeJdfRwydAZye-6RuO_XTVARmtFT&exp=1707394744&x-canva-quality=thumbnail&csig=AAAAAAAAAAAAAAAAAAAAAN60YE9LQJMKA88ddsVEMKxLBk1k3mPyk--gbCIQ0sW3"/>  
        </Link>
        </div>

        <div className="bg-blue-600  rounded-full ">
        <Image className='pl-1' alt='profile icon' width={40} height={40}  src="/icons8-male-user-24.png"/>
        </div>

      </nav>
    );
  };
  

export default Navbar
