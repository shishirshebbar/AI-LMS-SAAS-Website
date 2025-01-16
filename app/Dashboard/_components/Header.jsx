import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <div className="p-3 shadow-md bg-gray-200 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center">
        <Image
          src={'/weblogo.png'}
          alt="logo"
          
          width={60}
          height={60}
        />
        <h2 className="font-bold text-2xl ml-2">EduAI</h2>
      </div>

      {/* Right Section */}
      <div>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
