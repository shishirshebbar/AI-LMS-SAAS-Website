import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <div className="p-3 shadow-md bg-gray-200 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center">
      <Link href={'/Dashboard'}>
        <Image
          src={'/weblogo.png'}
          alt="logo"
          width={60}
          height={60}
          className='cursor-pointer'
        />
        </Link>
        <Link href={'/Dashboard'}>
          <h2 className="font-bold text-2xl ml-2 cursor-pointer">EduAI</h2>
        </Link>
      </div>

      {/* Right Section */}
      <div>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
