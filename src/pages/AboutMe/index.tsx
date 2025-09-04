import {forwardRef} from 'react';

import {useIsMobile} from '@/hooks/useIsMobile';
import type {SectionProps} from '@/types/common';

import HandIcon from '@/components/common/icons/ui/HandIcon';

import SectionHeader from '@/components/common/SectionHeader';
import BioSidebar from '@/components/pages/AboutMe/BioSidebar';
import TechStack from '@/components/pages/AboutMe/TechStack';
import Education from '@/components/pages/AboutMe/Education';

const AboutMe = forwardRef<HTMLElement, SectionProps>(({isScrolled}, ref) => {
  const isMobile = useIsMobile();

  return (
    <section
      ref={ref}
      id="about-me"
      className={`min-h-[calc(100vh-72px)] ${!isMobile && 'snap-start'}`}
    >
      <SectionHeader
        isOnPage={isScrolled}
        icon={{SVGComp: HandIcon, offSet: {top: '25%'}}}
        dashed
      >
        Sobre mim
      </SectionHeader>
      <div className="md:max-w-220 lg:max-w-285 xl:max-w-full m-auto grid grid-cols-1 xl:grid-cols-[minmax(33rem,37%)_1fr] md:grid-rows-[repeat(3,auto)] items-start pt-4 xs:pt-6 pb-3 px-1 xs:px-3 2xl:px-6 max-xl:gap-y-5 gap-0.5 2xl:gap-x-2.5">
        <div
          id="bio-container"
          className="flex w-full justify-center px-1 xs:px-2.5 lg:px-4 xl:row-span-2"
        >
          <BioSidebar />
        </div>
        <div id="education-container" className="relative flex-col p-1">
          <Education />
        </div>
        <div
          id="tech-stack-container"
          className=" max-xl:mb-10 xl:col-start-2 xl:row-start-2"
        >
          <TechStack />
        </div>
      </div>
    </section>
  );
});

export default AboutMe;
