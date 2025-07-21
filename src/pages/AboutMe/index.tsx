import EducationCard from '@/components/pages/AboutMe/EducationCard';
import {forwardRef} from 'react';
import type {SectionProps} from '@/types/common';
import type {Education} from '@/types/pages/aboutme';
import SectionHeader from '@/components/common/SectionHeader';
import HandIcon from '@/components/common/icons/ui/HandIcon';
import Stack from '@/components/pages/AboutMe/Stack';

import ArchitecturesIcon from '@/assets/ArchitecturesIcon.svg';
import DatabaseIcon from '@/assets/DatabaseIcon.svg';
import FrameworksIcon from '@/assets/FrameworksIcon.svg';
import LanguagesIcon from '@/assets/LanguagesIcon.svg';

const AboutMe = forwardRef<HTMLElement, SectionProps>(({isScrolled}, ref) => {
  const educationCards: Education[] = [
    {
      education: 'Formação 1',
      acronym: 'UFPE',
      fullName: 'Universidade Federal de Pernambuco',
      courseType: 'Graduação',
      initialYear: 1999,
      finalYear: 2004,
    },
    {
      education: 'Formação 2',
      acronym: 'UFPE',
      fullName: 'Universidade Federal de Pernambuco',
      courseType: 'Graduação',
      initialYear: 2000,
      finalYear: 2005,
    },
    {
      education: 'Course 1',
      acronym: 'UFPE',
      fullName: 'Universidade Federal de Pernambuco',
      courseType: 'Graduação',
      initialYear: 1999,
      finalYear: 2004,
    },
    {
      education: 'Course 2',
      acronym: 'UFPE',
      fullName: 'Universidade Federal de Pernambuco',
      courseType: 'Graduação',
      initialYear: 1999,
      finalYear: 2004,
    },
    {
      education: 'Formação 1',
      acronym: 'UFPE',
      fullName: 'Universidade Federal de Pernambuco',
      courseType: 'Graduação',
      initialYear: 1999,
      finalYear: 2004,
    },
    {
      education: 'Formação 2',
      acronym: 'UFPE',
      fullName: 'Universidade Federal de Pernambuco',
      courseType: 'Graduação',
      initialYear: 2000,
      finalYear: 2005,
    },
    {
      education: 'Course 1',
      acronym: 'UFPE',
      fullName: 'Universidade Federal de Pernambuco',
      courseType: 'Graduação',
      initialYear: 1999,
      finalYear: 2004,
    },
    {
      education: 'Course 2',
      acronym: 'UFPE',
      fullName: 'Universidade Federal de Pernambuco',
      courseType: 'Graduação',
      initialYear: 1999,
      finalYear: 2004,
    },
  ];
  const stackList = [
    {
      topic: 'Languages',
      symbol: LanguagesIcon,
      stackList: ['Java', 'Typescript', 'Javascript', 'Python', 'C (Beginner)'],
    },
    {
      topic: 'Database',
      symbol: DatabaseIcon,
      stackList: [
        'Postgresql',
        'MongoDB',
        'Redis',
        'TypeORM',
        'Hibernate',
        'Mongoose',
      ],
    },
    {
      topic: 'Frameworks/Libs',
      symbol: FrameworksIcon,
      stackList: [
        'ReactJS',
        'React Native',
        'Spring Boot',
        'Node.js',
        'Express.js',
        'Tailwind',
        'Bootstrap',
      ],
    },
    {
      topic: 'Architecture',
      symbol: ArchitecturesIcon,
      stackList: ['Test-Driven Development', 'Domain Driven Design'],
    },
  ];
  return (
    <section
      ref={ref}
      id="about-me"
      className="min-h-[calc(100vh-72px)] snap-start"
    >
      <SectionHeader
        isOnPage={isScrolled}
        icon={{SVGComp: HandIcon, offSet: {top: '25%'}}}
        dashed
      >
        Sobre Mim
      </SectionHeader>
      <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] md:grid-rows-[repeat(3,auto)] p-6 gap-0.5">
        <div className="grid content-start grid-col-1 md:grid-cols-2 md:col-span-2 xl:grid-cols-1 xl:col-span-1 xl:row-span-2">
          <div className="my-3 mx-6 rounded-2xl h-[320px] overflow-hidden">
            <img
              src="https://ellun.com.br/wp-content/uploads/2020/06/shutterstock_374227048.jpg"
              alt="Foto de exemplo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 p-2 ">
            <h3 className="font-bold text-xl mb-2">Bio</h3>
            <p>
              Sou um desenvolvedor fullstack apaixonado por criar soluções
              inovadoras e eficientes. Com experiência em diversas tecnologias,
              busco constantemente aprimorar minhas habilidades e contribuir
              para projetos desafiadores.
            </p>
          </div>
        </div>
        <div className="max-xl:col-span-2 flex flex-col p-1">
          <div className="relative max-h-58 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-4 p-2">
              {educationCards.map((item, index) => (
                <EducationCard key={index} {...item} />
              ))}
            </div>
            <button className="absolute bottom-2 right-0.25 z-10 flex items-center bg-[#574E35] border-[1px] hover:border-[#574E35] transition-all border-[#D3C296] shadow-md rounded-lg overflow-hidden text-white">
              <span className="bg-[#fff] py-0.5 px-2.5 rounded-md font-semibold text-[#574E35]">
                Exibir Mais
              </span>
              <span className="px-2.5 text-l font-medium">+</span>
            </button>
            <div className="absolute bottom-0 left-0 right-0 h-18 bg-gradient-to-t via-white from-white to-transparent"></div>
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-start-2 xl:row-start-2">
          <h3 className="font-bold text-2xl mb-2 font-instrument">
            <span className="text-orange-200">#</span> Tech Stack
          </h3>
          <div className="flex flex-col gap-2 px-2 lg:px-6 py-1">
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
