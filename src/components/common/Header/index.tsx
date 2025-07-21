import {forwardRef} from 'react';
import type {SectionProps} from '@/types/common';

const Header = forwardRef<HTMLElement, SectionProps>(({isScrolled}, ref) => {
  return (
    <header
      ref={ref}
      className="w-full h-[calc(100vh-72px)] snap-start bg-orange-200 font-instrument"
    >
      <div
        className={`relative flex items-center h-full w-full p-8 bg-[#FDF6E4] rounded-xl transition-all duration-200 ${
          isScrolled ? 'shadow-none' : 'shadow-sm'
        }`}
      >
        <div>
          <h1 className="text-4xl font-bold">
            Matheus Henrique <br />
            <span className="text-2xl">Fullstack &lt;dev/&gt;</span>
          </h1>
        </div>
        <div
          className={`absolute left-34 -bottom-1.5 w-4 h-4 bg-[#FDF6E4] rotate-45 rounded-sm transition-opacity duration-200 ${
            isScrolled
              ? 'opacity-0'
              : 'shadow-[2px_2px_2px_rgb(10,10,10,0.1)] opacity-100'
          }`}
        ></div>
      </div>
    </header>
  );
});

export default Header;
