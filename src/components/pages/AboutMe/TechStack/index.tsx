import React from 'react';
import Stack from '../Stack';
import {stackList} from '@/data/about.ts';

const TechStack: React.FC = () => {
  return (
    <div>
      <h3 className="font-bold text-2xl mb-2 font-instrument">
        <span className="text-orange-200">#</span> Tech Stack:
      </h3>
      <div className="flex flex-col gap-2 lg:grid lg:grid-cols-2 lg:gap-4 xl:flex xl:flex-col xl:gap-2 px-1.5 2xl:px-6 py-1">
        {stackList.map((stack, index) => (
          <Stack key={index} {...stack} />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
