import { categories } from '@/data/data';
import Image from 'next/image';
import React from 'react';
import Circles from './Circles';

const Categories = () => {
  return (
    <main className="mt-10 pt-10 px-4 md:px-10 max-w-[1100px] mx-auto">
      <h1 className="text-2xl md:text-3xl  text-accent font-bold font-sans mb-6 md:mb-10 lg:mb-16">
        Categories
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-x-2 gap-y-4 border mx-auto">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative grow overflow-hidden min-w-[300px]   h-[150px] bg-accent rounded-lg px-4 py-4"
          >
            <h1 className="text-lg text-text font-sans font-normal">
              {category.name}
            </h1>
            <Image
              src={category.image}
              alt={category.name}
              width={80}
              height={80}
              className="absolute right-8 top-1/2 -translate-y-1/2 opacity-80"
            />
            <Circles className={category.circle1} />
            <Circles className={category.circle2} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Categories;
