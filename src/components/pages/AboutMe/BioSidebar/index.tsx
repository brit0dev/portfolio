import EmailIcon from '@/components/common/icons/links/EmailIcon';
import LocationIcon from '@/components/common/icons/links/LocationIcon';
import PhoneIcon from '@/components/common/icons/links/PhoneIcon';
import React from 'react';
import SocialList from '../SocialList';

const BioSidebar: React.FC = () => {
  return (
    <div className="grid flex-1 md:grid-cols-[1fr_auto_auto] xl:grid-cols-1 xl:grid-rows-[auto_auto_1fr] md:col-span-2 xl:col-span-1  bg-background-light shadow rounded-2xl">
      <div
        id="bio-image"
        className="relative xs:min-w-90 h-[320px] max-md:rounded-t-2xl md:rounded-l-2xl xl:rounded-bl-none xl:rounded-t-2xl overflow-hidden"
      >
        <img
          src="profile.jpg"
          alt="Profile picture"
          title="Profile picture"
          className="w-full h-full object-cover object-right"
        />
        <div className="hidden sm:block lg:hidden absolute bottom-1 right-1 md:left-1 z-10 ">
          <SocialList />
        </div>
      </div>
      <div id="bio-separator" className="h-0.75 bg-text-dark"></div>
      <div
        id="bio-content"
        className="relative flex flex-col max-sm:gap-y-2.5 gap-2 2xl:gap-2.5 md:max-w-110 lg:max-w-128 xl:max-w-full justify-between px-3 md:px-4 py-3 lg:px-3 xl:py-4 xl:px-4"
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
              <span>+55 (81) 9 8168-8979</span>
            </li>
          </ul>
          <div className="flex justify-end sm:hidden lg:flex relative md:absolute xl:relative bottom-0 right-0  lg:translate-y-[65%] lg:translate-x-[5%] xl:translate-y-1 xl:translate-x-1 col-start-1 col-span-2 lg:col-start-2 lg:col-span-1 xl:col-start-1 xl:col-span-2 row-start-2">
            <SocialList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioSidebar;
