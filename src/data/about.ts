import type {Education} from '@/types/pages/aboutme';
import ArchitecturesIcon from '@/assets/ArchitecturesIcon.svg';
import DatabaseIcon from '@/assets/DatabaseIcon.svg';
import FrameworksIcon from '@/assets/FrameworksIcon.svg';
import LanguagesIcon from '@/assets/LanguagesIcon.svg';

export const educationCards: Education[] = [
  {
    education: 'Estatística',
    acronym: 'UFPE',
    fullName: 'Universidade Federal de Pernambuco',
    courseType: 'Graduação',
    initialYear: 2024,
    finalYear: 2028,
    status: 'In progress',
  },
  {
    education: 'Oracle ONE - Backend',
    acronym: 'Oracle',
    fullName: 'By Oracle in Alura platform',
    courseType: 'Education Program',
    initialYear: 2024,
    finalYear: 2025,
    status: 'Completed',
  },
  {
    education: 'Física',
    acronym: 'UFPE',
    fullName: 'Universidade Federal de Pernambuco',
    courseType: 'Graduação',
    initialYear: 2019,
    finalYear: 2022,
    status: 'Partially Completed',
  },
  {
    education: 'Projetão',
    acronym: 'UFPE',
    fullName: 'An extension project at CIn',
    courseType: 'Graduação',
    initialYear: 2022,
    finalYear: 2022,
    status: 'Completed',
  },
  {
    education: 'GoStack Bootcamp',
    acronym: 'RocketSeat',
    fullName: 'RocketSeat Bootcamp',
    courseType: ' Bootcamp',
    initialYear: 2021,
    finalYear: 2021,
    status: 'Completed',
  },
  {
    education: 'Intro to Python Programming',
    acronym: 'Google',
    fullName: 'Program by Google at udacity',
    courseType: 'Course',
    initialYear: 2019,
    finalYear: 2019,
    status: 'Completed',
  },
  {
    education: 'Javascript and the DOM',
    acronym: 'Udacity',
    fullName: 'Course at Udacity',
    courseType: 'Course',
    initialYear: 2019,
    finalYear: 2019,
    status: 'Completed',
  },
  {
    education: 'Intro to javascript',
    acronym: 'Udacity',
    fullName: 'Introductory course at Udacity',
    courseType: 'Course',
    initialYear: 2019,
    finalYear: 2019,
    status: 'Completed',
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
