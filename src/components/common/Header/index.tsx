import {forwardRef} from 'react';
import type {SectionProps} from '@/types/common';
import {useIsMobile} from '@/hooks/useIsMobile';

const Header = forwardRef<HTMLElement, SectionProps>(({isScrolled}, ref) => {
  const isMobile = useIsMobile();

  return (
    <header
      ref={ref}
      className={`w-full h-[calc(100dvh-4rem)] xs:h-[calc(100dvh-4.5rem)] ${!isMobile && 'snap-start'}  bg-primary font-instrument`}
    >
      <div
        className={`relative z-10 flex items-center h-full w-full p-8 bg-background-header rounded-b-xl transition-all duration-200 ${
          isScrolled ? 'shadow-none' : 'shadow-sm'
        }`}
      >
        <div className=" ml:5 sm:ml-10 lg:ml-20 xl:ml-30">
          <h1 className="text-[2.75rem] xs:text-[3.5rem] font-semibold leading-10 xs:leading-14">
            <span className="opacity-35 text-text-light">Hi</span>
            , Matheus Brito <br />
            <span className="text-2xl xs:text-[2rem]">
              Fullstack &lt;dev
              <span className="text-secondary-darker">/</span>
              &gt;
            </span>
          </h1>
        </div>
        <div
          className={`absolute z-10 left-30 xs:left-40 -bottom-1.5 w-4 h-4 bg-background-header rotate-45 rounded-sm transition-opacity duration-200 ${
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
