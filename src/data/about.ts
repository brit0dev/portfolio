import type {Education} from '@/types/pages/aboutme';
import ArchitecturesIcon from '@/assets/ArchitecturesIcon.svg';
import DatabaseIcon from '@/assets/DatabaseIcon.svg';
import FrameworksIcon from '@/assets/FrameworksIcon.svg';
import LanguagesIcon from '@/assets/LanguagesIcon.svg';

export const educationCards: Education[] = [
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

export const stackList = [
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
