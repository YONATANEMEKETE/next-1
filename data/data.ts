import category1 from '../public/category1.png';
import category2 from '../public/category2.png';
import category3 from '../public/category3.png';
import backpack from '../public/backpack.png';
import sweater from '../public/sweater.png';
import shirt from '../public/shirt.png';
import headphone from '../public/headphone.png';
import bag from '../public/bag.png';
import jacket from '../public/jacket.png';
import { IoHome } from 'react-icons/io5';
import { FaShoppingBasket } from 'react-icons/fa';
import { IoWallet } from 'react-icons/io5';
import { FaCartShopping } from 'react-icons/fa6';
import { FaUserTie } from 'react-icons/fa';
import { IoSettings } from 'react-icons/io5';

export const categories = [
  {
    id: 1,
    name: 'All Products',
    image: category1,
    circle1: '-left-4 top-2',
    circle2: 'left-4 top-6',
  },
  {
    id: 2,
    name: 'Lifestyle',
    image: category2,
    circle1: 'left-[40%] -top-16',
    circle2: 'right-2 -top-8',
  },
  {
    id: 3,
    name: 'Fashion',
    image: category3,
    circle1: 'left-24 top-2',
    circle2: 'left-1/4 -bottom-8',
  },
];

export const allProducts = [
  {
    id: 1,
    name: 'Stylish Backpack',
    image: backpack,
    price: '$20.00',
    button: false,
  },
  {
    id: 2,
    name: 'Casual Sweater',
    image: sweater,
    price: '$25.00',
    button: true,
  },
  {
    id: 3,
    name: 'Cotton Shirt',
    image: shirt,
    price: '$15.00',
    button: false,
  },
  {
    id: 4,
    name: 'Wireless Headphone',
    image: headphone,
    price: '$30.00',
    button: false,
  },
  {
    id: 5,
    name: 'Leather Jacket',
    image: jacket,
    price: '$35.00',
    button: false,
  },
  {
    id: 6,
    name: 'Fancy Bag',
    image: bag,
    price: '$40.00',
    button: false,
  },
];

type NavItem = {
  id: number;
  link: string;
  icon: React.ReactNode;
};
export const navs = [
  {
    id: 1,
    link: 'Home',
    icon: IoHome,
  },
  {
    id: 2,
    link: 'Categories',
    icon: FaShoppingBasket,
  },
  {
    id: 3,
    link: 'Cart',
    icon: FaCartShopping,
  },
  {
    id: 4,
    link: 'User Profile',
    icon: FaUserTie,
  },
  {
    id: 5,
    link: 'Wallet',
    icon: IoWallet,
  },
  {
    id: 6,
    link: 'Settings',
    icon: IoSettings,
  },
];
