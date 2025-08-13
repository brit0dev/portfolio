import {useEffect, useState} from 'react';
import EducationCard from '../EducationCard';
import type {EducationModalProps} from './types';

const EducationModal = ({educationList, onClose}: EducationModalProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(onClose, 300); // Animation duration
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    setIsAnimating(true);
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isAnimating
          ? 'backdrop-blur-[0.625rem] bg-background-light/70 transition-all duration-200 ease-out'
          : 'backdrop-blur-none bg-background-light/0'
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative flex flex-col bg-background rounded-lg shadow-[0px_0px_20px_1px] shadow-gray-500/30 border-primary border-1 w-11/12 max-h-[90vh] transform transition-all duration-300 ease-in-out overflow-hidden ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-primary/20">
          <h2 className="text-2xl font-bold text-text-primary">
            Education History
          </h2>
          <button
            onClick={handleClose}
            className="bg-background-light shadow-md rounded-full w-7 h-7 text-text-secondary hover:text-text-primary text-3xl leading-none"
          >
            <div className="-translate-y-[0.16rem]">&times;</div>
          </button>
        </div>

        <div className="overflow-y-auto p-6 min-h-[80vh]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 auto-rows-[9.5rem] gap-4 p-1 xs:p-2">
            {educationList.map((education, index) => (
              <EducationCard key={index} data={education} expand={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationModal;
