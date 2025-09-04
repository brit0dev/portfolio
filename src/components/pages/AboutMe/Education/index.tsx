import React, {useState} from 'react';
import {educationCards} from '@/data/about.ts';

import EducationCard from '@/components/pages/AboutMe/EducationCard';
import EducationModal from '@/components/pages/AboutMe/EducationModal';

const Education: React.FC = () => {
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);

  const handleOpenEducationModal = () => setIsEducationModalOpen(true);
  const handleCloseEducationModal = () => setIsEducationModalOpen(false);

  return (
    <div>
      <h3 className="font-bold text-2xl mb-2 font-instrument">
        <span className="text-orange-200">#</span> Escolaridade:
      </h3>
      <div className="relative max-h-58 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-4 p-1 xs:p-2">
          {educationCards.map((item, index) => (
            <EducationCard key={index} data={item} expand={false} />
          ))}
        </div>
        <button
          onClick={handleOpenEducationModal}
          className="absolute bottom-2 right-0.25 z-10 flex items-center bg-button-text border-[1px] hover:border-button-text transition-all border-button-border shadow-md rounded-lg overflow-hidden text-white"
        >
          <span className="bg-button py-0.5 px-2.5 rounded-md font-semibold text-button-text hover:text-text-primary hover:transition">
            Exibir Mais
          </span>
          <span className="px-2.5 text-l font-medium">+</span>
        </button>
        <div className="absolute bottom-0 left-0 right-0 h-18 bg-gradient-to-t via-background from-background to-transparent"></div>
      </div>
      {isEducationModalOpen && (
        <EducationModal
          educationList={educationCards}
          onClose={handleCloseEducationModal}
        />
      )}
    </div>
  );
};

export default Education;
