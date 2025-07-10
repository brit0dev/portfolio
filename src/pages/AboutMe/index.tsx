import EducationCard from '../../components/EducationCard';
import {forwardRef} from 'react';
import type {SectionProps} from '../../types/common';
import type {Education} from '../../types/pages/aboutme';

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

  return (
    <section
      ref={ref}
      id="about-me"
      className="min-h-[calc(100vh-72px)] snap-start"
    >
      <h2 className="text-3xl bg-orange-200 h-18 flex items-center">
        Sobre Mim
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-[38%_62%]">
        <div className="flex flex-col">
          <div className="my-6 mx-12 rounded-2xl h-[320px] overflow-hidden">
            <img
              src="https://ellun.com.br/wp-content/uploads/2020/06/shutterstock_374227048.jpg"
              alt="Foto de exemplo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 p-4">
            <h3 className="font-bold text-xl mb-2">Bio</h3>
            <p>
              Sou um desenvolvedor fullstack apaixonado por criar soluções
              inovadoras e eficientes. Com experiência em diversas tecnologias,
              busco constantemente aprimorar minhas habilidades e contribuir
              para projetos desafiadores.
            </p>
          </div>
        </div>
        <div className="flex flex-col p-3">
          <div className="relative max-h-64 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-4">
              {educationCards.map((item) => EducationCard(item))}
            </div>
            <button className="absolute bottom-2 right-0.25 z-10 flex items-center bg-[#574E35] border-[1px] hover:border-[#574E35] transition-all border-[#D3C296] shadow-md rounded-lg overflow-hidden text-white">
              <span className="bg-[#fff] py-0.5 px-2.5 rounded-md font-semibold text-[#574E35]">
                Exibir Mais
              </span>
              <span className="px-2.5 text-l font-medium">+</span>
            </button>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t via-white from-white to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutMe;
