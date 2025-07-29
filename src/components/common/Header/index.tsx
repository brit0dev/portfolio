import {forwardRef} from 'react';
import type {SectionProps} from '@/types/common';

const Header = forwardRef<HTMLElement, SectionProps>(({isScrolled}, ref) => {
  return (
    <header
      ref={ref}
      className="w-full h-[calc(100vh-72px)] snap-start bg-primary font-instrument"
    >
      <div
        className={`relative flex items-center h-full w-full p-8 bg-background-header rounded-b-xl transition-all duration-200 ${
          isScrolled ? 'shadow-none' : 'shadow-sm'
        }`}
      >
        <div className="ml-30">
          <h1 className="text-[3.5rem] font-semibold leading-11">
            <span className="opacity-35 text-text-light">Hi</span>
            , Matheus Brito <br />
            <span className="text-[2rem]">
              Fullstack &lt;dev
              <span className="text-secondary-darker">/</span>
              &gt;
            </span>
          </h1>
        </div>
        <div
          className={`absolute left-40 -bottom-1.5 w-4 h-4 bg-background-header rotate-45 rounded-sm transition-opacity duration-200 ${
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
