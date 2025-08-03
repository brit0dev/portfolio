import {
  JSIcon,
  NextIcon,
  GithubIcon,
  FigmaIcon,
  ExternalLinkIcon,
  ReactIcon,
} from '@/components/common/icons';
import type {Project} from '@/types/pages/projects';

export const projects: Project[] = [
  {
    title: 'Social Dogs',
    description: 'A social network for dogs.',
    images: [
      '/SocialDogs/home.png',
      '/SocialDogs/postfeed.png',
      '/SocialDogs/login.png',
    ],
    tags: [
      'CSSModules',
      'JWT',
      'Javascript',
      'Typescript',
      'Next.js',
      'ReactJS',
    ],
    area: ['FrontEnd'],
    technologies: [
      {name: 'Next.js', icon: NextIcon},
      {name: 'CSS Modules', icon: JSIcon},
      {name: 'javascript', icon: JSIcon},
    ],
    view: [
      {
        type: 'demo' as const,
        link: 'https://socialdogs.britodev.com',
        icon: ExternalLinkIcon,
      },
      {
        type: 'github' as const,
        link: 'https://github.com/brit0dev/social-dogs',
        icon: GithubIcon,
      },
    ],
  },
  {
    title: 'Alura Crypto',
    description: 'The first challenge of Oracle ONE.',
    images: ['/AluraCrypto/project.png'],
    tags: ['HTML', 'Javascript', 'CSS3', 'OracleOne', 'Alura'],
    area: ['FrontEnd'],
    technologies: [
      {name: 'HTML', icon: JSIcon},
      {name: 'CSS3', icon: JSIcon},
      {name: 'Javascript', icon: JSIcon},
    ],
    view: [
      {
        type: 'demo' as const,
        link: 'https://brit0dev.github.io/challenge-alura-oracle-one-01/',
        icon: ExternalLinkIcon,
      },
      {
        type: 'github' as const,
        link: 'https://github.com/brit0dev/challenge-alura-oracle-one-01',
        icon: GithubIcon,
      },
    ],
  },
  {
    title: 'Github Explorer',
    description: 'A frontend for github issues.',
    images: [
      '/GithubPages/dashboard.png',
      '/GithubPages/search.png',
      '/GithubPages/repository.png',
    ],
    tags: [
      'Typescript',
      'React',
      'StyledComponents',
      'GithubAPI',
      'GoStackBootcamp',
    ],
    area: ['Design', 'FrontEnd'],
    technologies: [
      {name: 'Typescript', icon: JSIcon},
      {name: 'Styled Components', icon: JSIcon},
      {name: 'React', icon: ReactIcon},
    ],

    view: [
      {
        type: 'github' as const,
        link: 'https://github.com/brit0dev/githubpages',
        icon: GithubIcon,
      },
    ],
  },
  {
    title: 'Fintech Dashboard',
    description: 'A dashboard to monitor sells of a fintech product.',
    images: [
      '/FintechReact/sells.png',
      '/FintechReact/home.png',
      '/FintechReact/logo.png',
    ],
    tags: ['React', 'Typescript', 'CSSModules', 'APIConsume'],
    area: ['FullStack'],
    technologies: [
      {name: 'React', icon: ReactIcon},
      {name: 'Typescript', icon: JSIcon},
      {name: 'CSSModules', icon: JSIcon},
    ],
    view: [
      {
        type: 'github' as const,
        link: 'https://github.com/brit0dev/fintech-front-end_react',
        icon: GithubIcon,
      },
    ],
  },
  {
    title: 'LinkedIn Cover v1.0',
    description: 'Description for project 5.',
    images: ['LinkedInCoverV1/cover.png'],
    tags: ['Figma', 'Cover', 'Banner', 'LinkedIn', 'Braun'],
    area: ['Design'],
    technologies: [{name: 'Figma', icon: JSIcon}],
    view: [
      {
        type: 'figma' as const,
        link: 'https://figma.com/file/project5',
        icon: FigmaIcon,
      },
    ],
  },
  {
    title: 'Project 6',
    description: 'Description for project 6.',
    images: [
      'https://picsum.photos/seed/project6-1/400/300',
      'https://picsum.photos/seed/project6-2/400/300',
      'https://picsum.photos/seed/project6-3/400/300',
    ],
    tags: ['TagI', 'TagJ'],
    area: ['Design'],
    technologies: [
      {name: 'Vue.js', icon: JSIcon},
      {name: 'Sass', icon: JSIcon},
    ],
    view: [
      {
        type: 'demo' as const,
        link: 'https://example.com/demo6',
        icon: ExternalLinkIcon,
      },
      {
        type: 'github' as const,
        link: 'https://github.com/user/project6',
        icon: GithubIcon,
      },
    ],
  },
  {
    title: 'Project 7',
    description: 'Description for project 7.',
    images: [
      'https://picsum.photos/seed/project7-1/400/300',
      'https://picsum.photos/seed/project7-2/400/300',
      'https://picsum.photos/seed/project7-3/400/300',
    ],
    tags: ['TagK', 'TagL'],
    area: ['BackEnd'],
    technologies: [{name: 'Python', icon: JSIcon}],
    view: [
      {
        type: 'github' as const,
        link: 'https://github.com/user/project7',
        icon: GithubIcon,
      },
    ],
  },
  {
    title: 'Project 8',
    description: 'Description for project 8.',
    images: [
      'https://picsum.photos/seed/project8-1/400/300',
      'https://picsum.photos/seed/project8-2/400/300',
      'https://picsum.photos/seed/project8-3/400/300',
    ],
    tags: ['TagM', 'TagN'],
    area: ['FullStack'],
    technologies: [
      {name: 'Angular', icon: JSIcon},
      {name: 'Firebase', icon: JSIcon},
    ],
    view: [
      {
        type: 'demo' as const,
        link: 'https://example.com/demo8',
        icon: ExternalLinkIcon,
      },
      {
        type: 'github' as const,
        link: 'https://github.com/user/project8',
        icon: GithubIcon,
      },
    ],
  },
];
