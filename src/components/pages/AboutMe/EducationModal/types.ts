import type {Education} from '@/types/pages/aboutme';

export type EducationModalProps = {
  educationList: Education[];
  onClose: () => void;
};
