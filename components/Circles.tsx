import React from 'react';
import { cn } from '../lib/utils';

type CircleProps = {
  className: string;
};

const Circles = ({ className }: CircleProps) => {
  return (
    <div
      className={cn(
        'size-36 rounded-full bg-accentV opacity-20 absolute z-0',
        className
      )}
    ></div>
  );
};

export default Circles;
