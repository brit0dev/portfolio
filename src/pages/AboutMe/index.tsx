import EducationCard from '@/components/pages/AboutMe/EducationCard';
import {forwardRef} from 'react';

import type {SectionProps} from '@/types/common';

import {educationCards, stackList} from '@/data/about.ts';

import Stack from '@/components/pages/AboutMe/Stack';
import SectionHeader from '@/components/common/SectionHeader';
import SocialList from '@/components/pages/AboutMe/SocialList';
import HandIcon from '@/components/common/icons/ui/HandIcon';
import LocationIcon from '@/components/common/icons/links/LocationIcon';
import PhoneIcon from '@/components/common/icons/links/PhoneIcon';
import EmailIcon from '@/components/common/icons/links/EmailIcon';

import {useIsMobile} from '@/hooks/useIsMobile';

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
          <div className="grid px-2 flex-1 xl:px-3 py-2 xl:py-3 md:grid-cols-[1fr_auto] gap-2 xl:grid-cols-1 md:col-span-2 xl:col-span-1  bg-background-light shadow rounded-2xl">
            <div
              id="bio-image"
              className="relative xs:min-w-90 rounded-2xl h-[320px] overflow-hidden"
            >
              <img
                src="https://ellun.com.br/wp-content/uploads/2020/06/shutterstock_374227048.jpg"
                alt="Foto de exemplo"
                className="w-full h-full object-cover"
              />
              <div className="hidden sm:block lg:hidden absolute bottom-1 right-1 md:left-1 z-10 ">
                <SocialList />
              </div>
            </div>
            <div
              id="bio-content"
              className="relative flex flex-col max-sm:gap-y-2.5 gap-2 2xl:gap-2.5 md:max-w-110 lg:max-w-126 xl:max-w-full justify-center px-1 md:px-2 py-1"
            >
              <div className="flex flex-col justify-between">
                <p className="indent-3">
                  <span className="font-semibold">I'm Matheus Brito</span>, 27
                  years old, passionate about technology since I was 13, when I
                  started building websites. Since then, I’ve developed skills
                  across frontend and backend development, as well as
                  electronics and embedded systems. I chose to fully focus on
                  software development — a field where I combine logic,
                  creativity, and purpose.
                </p>
                <p className="indent-3 mt-4 md:hidden row-start-3 lg:block md:mt-0 2xl:mt-4">
                  I’m actively seeking junior or mid-level opportunities, always
                  driven by growth, collaboration, and continuous learning.
                </p>
              </div>
              <div className="h-1.25 rounded-4xl border-1 border-text-primary bg-background-light md:col-span-2"></div>
              <div className="grid grid-cols-[1fr_auto] grid-rows-[auto_auto] max-sm:gap-y-2.5">
                <ul className="contact-list grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] px-1 sm:row-span-2 xl:row-span-1">
                  <li>
                    <div>
                      <LocationIcon />
                    </div>
                    <span>
                      <strong>Recife</strong>, Pernambuco, Brasil.
                    </span>
                  </li>
                  <li>
                    <div>
                      <EmailIcon />
                    </div>
                    <span>mhenriquebrito1@gmail.com</span>
                  </li>
                  <li>
                    <div>
                      <PhoneIcon />
                    </div>
                    <span>+55 (81) 9 99889959</span>
                  </li>
                </ul>
                <div className="flex justify-end sm:hidden lg:flex relative md:absolute xl:relative bottom-0 right-0  lg:translate-y-[65%] lg:translate-x-[5%] xl:translate-y-[0.25rem] xl:translate-x-[0.5rem] col-start-1 col-span-2 lg:col-start-2 lg:col-span-1 xl:col-start-1 xl:col-span-2 row-start-2">
                  <SocialList />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="education-container" className="flex-col p-1">
          <h3 className="font-bold text-2xl mb-2 font-instrument">
            <span className="text-orange-200">#</span> Escolaridade:
          </h3>
          <div className="relative max-h-58 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-4 p-1 xs:p-2">
              {educationCards.map((item, index) => (
                <EducationCard key={index} {...item} />
              ))}
            </div>
            <button className="absolute bottom-2 right-0.25 z-10 flex items-center bg-button-text border-[1px] hover:border-button-text transition-all border-button-border shadow-md rounded-lg overflow-hidden text-white">
              <span className="bg-button py-0.5 px-2.5 rounded-md font-semibold text-button-text hover:text-text-primary hover:transition">
                Exibir Mais
              </span>
              <span className="px-2.5 text-l font-medium">+</span>
            </button>
            <div className="absolute bottom-0 left-0 right-0 h-18 bg-gradient-to-t via-background from-background to-transparent"></div>
          </div>
        </div>
        <div
          id="tech-stack-container"
          className=" max-xl:mb-10 xl:col-start-2 xl:row-start-2"
        >
          <h3 className="font-bold text-2xl mb-2 font-instrument">
            <span className="text-orange-200">#</span> Tech Stack:
          </h3>
          <div className="flex flex-col gap-2 lg:grid lg:grid-cols-2 lg:gap-4 xl:flex xl:flex-col xl:gap-2 px-1.5 2xl:px-6 py-1">
            {stackList.map((stack, index) => (
              <Stack key={index} {...stack} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutMe;
