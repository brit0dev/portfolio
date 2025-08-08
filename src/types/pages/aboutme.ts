export type EducationStatus =
  | 'Completed'
  | 'In progress'
  | 'Partially Completed';

export type Education = {
  education: string;
  acronym: string;
  fullName: string;
  courseType: string;
  initialYear: number;
  finalYear: number;
  status: EducationStatus;
};

export type EducationCardProps = {
  data: Education;
  expand?: boolean;
};
