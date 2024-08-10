import React from 'react';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { FaWallet } from 'react-icons/fa6';
import { IoChatbox } from 'react-icons/io5';
import { IoIosNotifications } from 'react-icons/io';

const Header = () => {
  return (
    <nav className="flex items-center justify-between px-4 h-16 bg-text">
      <Button variant="secondary" size={'icon'} className="rounded-sm size-12">
        <Menu className="text-accent size-8" />
      </Button>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <FaWallet className="text-accent size-6" />
          <IoChatbox className="text-accent size-6" />
          <IoIosNotifications className="text-accent size-8" />
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default Header;
