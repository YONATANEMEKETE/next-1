import { allProducts } from '@/data/data';
import Image from 'next/image';
import React from 'react';
import { FaCartShopping, FaStar } from 'react-icons/fa6';
import { Button } from './ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Allproducts = () => {
  const stars = [1, 2, 3, 4, 5];
  const pages = [1, 2, 3];

  return (
    <main className="pb-10 px-4 md:px-10 max-w-[1100px] mx-auto">
      <h1 className="text-2xl md:text-3xl  text-accent font-bold font-sans mb-6 md:mb-10 lg:mb-16">
        All Products
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4 mb-6 md:mb-10 lg:mb-16">
        {allProducts.map((product) => (
          <div
            key={product.id}
            className="relative flex flex-col flex-1  min-w-[300px] lg:w-[400px h-[350px] bg-cardBg p-4 
            rounded-lg cursor-pointer hover:shadow-xl transition-all duration-300"
          >
            <div className="basis-3/4 grid place-content-center">
              <Image
                src={product.image}
                alt={product.name}
                width={150}
                height={150}
                className="h-auto"
              />
            </div>

            <div className="flex items-center justify-between basis-1/4">
              <div className="space-y-1">
                <p className="text-lg text-accent font-sans font-semibold">
                  {product.name}
                </p>
                <div className="flex items-center gap-1">
                  {stars.map((star) => (
                    <FaStar
                      key={star}
                      className={`${
                        star !== 5 ? 'text-rating' : 'text-input'
                      } size-4`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-lg text-accentV font-sans font-semibold">
                {product.price}
              </p>
            </div>

            <div className="size-fit absolute top-4 right-4">
              <FaCartShopping className=" size-6 text-input " />
            </div>

            {product.button && (
              <Button
                variant={'default'}
                size="lg"
                className="rounded-md bg-accent absolute w-[60%] left-1/2 -translate-x-1/2 top-24 text-lg text-text font-sans font-bold px-12 py-6 hover:bg-accentV"
              >
                Buy Now
              </Button>
            )}
          </div>
        ))}
      </div>
      <div className="size-fit mx-auto flex items-center gap-1">
        <Button
          variant={'secondary'}
          size={'icon'}
          className="rounded-lg size-fit p-2"
        >
          <ArrowLeft className="text-accent size-8" />
        </Button>
        {pages.map((page) => (
          <Button
            key={page}
            variant={`${page === 1 ? 'default' : 'secondary'}`}
            size={'icon'}
            className={`rounded-md size-12 text-2xl ${
              page === 1 ? 'text-text' : 'text-accent'
            } `}
          >
            {page}
          </Button>
        ))}
        <Button
          variant={'secondary'}
          size={'icon'}
          className="rounded-lg size-fit p-2 "
        >
          <ArrowRight className="text-accent size-8" />
        </Button>
      </div>
    </main>
  );
};

export default Allproducts;
