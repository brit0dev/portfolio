import EmailIcon from '@/components/common/icons/links/EmailIcon';
import LocationIcon from '@/components/common/icons/links/LocationIcon';
import PhoneIcon from '@/components/common/icons/links/PhoneIcon';
import React from 'react';
import SocialList from '../SocialList';

const BioSidebar: React.FC = () => {
  return (
    <div className="grid px-2 flex-1 xl:px-3 py-2 xl:py-3 md:grid-cols-[1fr_auto] gap-2 xl:grid-cols-1 md:col-span-2 xl:col-span-1  bg-background-light shadow rounded-2xl">
      <div
        id="bio-image"
        className="relative xs:min-w-90 rounded-2xl h-[320px] overflow-hidden"
      >
        <img
          src="/profile.svg"
          alt="Profile picture"
          title="Profile picture"
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
            <span className="font-semibold">I'm Matheus Brito</span>, 27 years
            old, passionate about technology since I was 13, when I started
            building websites. Since then, I’ve developed skills across frontend
            and backend development, as well as electronics and embedded
            systems. I chose to fully focus on software development — a field
            where I combine logic, creativity, and purpose.
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
  );
};

export default BioSidebar;
