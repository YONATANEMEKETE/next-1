'use client';

import React from 'react';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { FaWallet } from 'react-icons/fa6';
import { IoChatbox } from 'react-icons/io5';
import { IoIosNotifications } from 'react-icons/io';
import profile from '../public/profile.jpg';
import Image from 'next/image';
import { Input } from './ui/input';
import { useSidebar } from '@/data/SidebarStore';

const Header = () => {
  const { openSidebar } = useSidebar();

  return (
    <nav className="flex items-center justify-between max-w-[1100px mx-auto px-4 md:px-10 pt-4 md:pt-12 h-16 bg-text">
      <div className="flex items-center gap-4">
        <Button
          variant="secondary"
          size={'icon'}
          className="rounded-sm size-12 lg:hidden"
          onClick={() => openSidebar()}
        >
          <Menu className="text-accent size-8" />
        </Button>
        <div className="hidden md:flex items-center gap-2">
          <Input type="text" placeholder="Search" className="min-w-[400px]" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <Button variant={'secondary'} size={'icon'} className="rounded-full">
            <FaWallet className="text-accentV size-6" />
          </Button>
          <Button variant={'secondary'} size={'icon'} className="rounded-full">
            <IoIosNotifications className="text-accentV size-8" />
          </Button>
          <Button variant={'secondary'} size={'icon'} className="rounded-full">
            <IoChatbox className="text-accentV size-6" />
          </Button>
        </div>
        <div className="size-fit rounded-full overflow-hidden cursor-pointer">
          <Image
            src={profile}
            alt="profile"
            width={40}
            height={40}
            className="md:size-16 h-auto"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
