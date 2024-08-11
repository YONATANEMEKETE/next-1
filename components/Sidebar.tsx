'use client';

import { navs } from '@/data/data';
import React from 'react';
import { FaBagShopping } from 'react-icons/fa6';
import { Button } from './ui/button';
import { IoIosLogOut } from 'react-icons/io';
import { IoIosCloseCircle } from 'react-icons/io';
import { useSidebar } from '@/data/SidebarStore';

const Sidebar = () => {
  const { isOpen, closeSidebar } = useSidebar();

  return (
    <main
      className={`fixed lg:sticky lg:basis-1/4 flex flex-col items-center justify-between z-40 
    top-0 ${
      isOpen ? 'left-0' : '-left-full'
    } min-w-[300px] h-screen bg-accent rounded-e-[2rem] shadow-xl py-12 px-6 transition-all duration-300`}
    >
      <div className="flex items-center gap-2 mx-auto">
        <FaBagShopping className="text-3xl text-text" />
        <h1 className="text-3xl text-text font-sans font-bold">onShop</h1>
      </div>

      <div className="flex flex-col items-center gap-2">
        {navs.map((nav) => (
          <div key={nav.id} className="size-fit">
            <Button
              variant={'ghost'}
              size="lg"
              className="w-[200px] text-text text-base font-sans font-normal flex items-center justify-start gap-8 hover:bg-accentV"
            >
              <div className="text-xl text-text">{<nav.icon />}</div>
              <p className="">{nav.link}</p>
            </Button>
          </div>
        ))}
      </div>

      <Button
        variant={'ghost'}
        size={'lg'}
        className="min-w-[200px] flex items-center justify-start gap-8 hover:bg-accentV"
      >
        <IoIosLogOut className="text-2xl text-text" />
        <p className="text-text text-lg font-normal font-sans">Log Out</p>
      </Button>

      <div
        onClick={closeSidebar}
        className="size-fit absolute lg:hidden top-2 right-2 cursor-pointer"
      >
        <IoIosCloseCircle className="size-8 text-text" />
      </div>
    </main>
  );
};

export default Sidebar;
