import type {Tags} from '../common';

export type EducationStatus =
  | 'Completed'
  | 'In progress'
  | 'Partially Completed';

export type Education = {
  education: string;
  acronym: string;
  description: string[];
  courseType: string;
  initialYear: number;
  finalYear: number;
  status: EducationStatus;
  topics?: Tags;
};

export type EducationCardProps = {
  data: Education;
  expand?: boolean;
};
