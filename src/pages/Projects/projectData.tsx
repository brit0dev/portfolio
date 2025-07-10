import {
  JSIcon,
  NextIcon,
  GithubIcon,
  FigmaIcon,
  ExternalLinkIcon,
} from '../../components/icons';
import type {Project} from '../../types/pages/projects';

export const projects: Project[] = [
  {
    title: 'Social Dogs',
    description: 'A social network for dogs.',
    images: [
      '/SocialDogs/home.png',
      '/SocialDogs/postfeed.png',
      '/SocialDogs/login.png',
    ],
    tags: ['CSSModules', 'JWT', 'CSSModules', 'JWT'],
    area: ['FrontEnd', 'Design'],
    technologies: [
      {name: 'Next.js', icon: NextIcon},
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
        link: 'https://github.com/brit0dev/socialdogsnext',
        icon: GithubIcon,
      },
    ],
  },
  {
    title: 'Alura Crypto',
    description: 'Description for project 2.',
    images: ['/AluraCrypto/project.png'],
    tags: ['TagA', 'TagB'],
    area: ['FrontEnd'],
    technologies: [{name: 'React', icon: JSIcon}],
    view: [
      {type: 'demo' as const, link: 'https://example.com/demo2', icon: ExternalLinkIcon},
      {
        type: 'github' as const,
        link: 'https://github.com/user/project2',
        icon: GithubIcon,
      },
    ],
  },
  {
    title: 'Project 3',
    description: 'Description for project 3.',
    images: [
      'https://picsum.photos/seed/project3-1/400/300',
      'https://picsum.photos/seed/project3-2/400/300',
      'https://picsum.photos/seed/project3-3/400/300',
    ],
    tags: ['TagC', 'TagD'],
    area: ['BackEnd'],
    technologies: [{name: 'Node.js', icon: JSIcon}],
    view: [
      {
        type: 'github' as const,
        link: 'https://github.com/user/project3',
        icon: GithubIcon,
      },
    ],
  },
  {
    title: 'Project 4',
    description: 'Description for project 4.',
    images: [
      'https://picsum.photos/seed/project4-1/400/300',
      'https://picsum.photos/seed/project4-2/400/300',
      'https://picsum.photos/seed/project4-3/400/300',
    ],
    tags: ['TagE', 'TagF'],
    area: ['FullStack'],
    technologies: [
      {name: 'React', icon: JSIcon},
      {name: 'Node.js', icon: JSIcon},
    ],
    view: [
      {type: 'demo' as const, link: 'https://example.com/demo4', icon: ExternalLinkIcon},
    ],
  },
  {
    title: 'Project 5',
    description: 'Description for project 5.',
    images: [
      'https://picsum.photos/seed/project5-1/400/300',
      'https://picsum.photos/seed/project5-2/400/300',
      'https://picsum.photos/seed/project5-3/400/300',
    ],
    tags: ['TagG', 'TagH'],
    area: ['Design'],
    technologies: [{name: 'Figma', icon: JSIcon}],
    view: [
      {type: 'figma' as const, link: 'https://figma.com/file/project5', icon: FigmaIcon},
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
    area: ['FrontEnd', 'Design'],
    technologies: [
      {name: 'Vue.js', icon: JSIcon},
      {name: 'Sass', icon: JSIcon},
    ],
    view: [
      {type: 'demo' as const, link: 'https://example.com/demo6', icon: ExternalLinkIcon},
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
      {type: 'demo' as const, link: 'https://example.com/demo8', icon: ExternalLinkIcon},
      {
        type: 'github' as const,
        link: 'https://github.com/user/project8',
        icon: GithubIcon,
      },
    ],
  },
  {
    title: 'Project 9',
    description: 'Description for project 9.',
    images: [
      'https://picsum.photos/seed/project9-1/400/300',
      'https://picsum.photos/seed/project9-2/400/300',
      'https://picsum.photos/seed/project9-3/400/300',
    ],
    tags: ['TagO', 'TagP'],
    area: ['FrontEnd'],
    technologies: [{name: 'Svelte', icon: JSIcon}],
    view: [
      {type: 'demo' as const, link: 'https://example.com/demo9', icon: ExternalLinkIcon},
    ],
  },
  {
    title: 'Project 10',
    description: 'Description for project 10.',
    images: [
      'https://picsum.photos/seed/project10-1/400/300',
      'https://picsum.photos/seed/project10-2/400/300',
      'https://picsum.photos/seed/project10-3/400/300',
    ],
    tags: ['TagQ', 'TagR'],
    area: ['Design'],
    technologies: [{name: 'Adobe XD', icon: JSIcon}],
    view: [
      {
        type: 'figma' as const,
        link: 'https://figma.com/file/project10',
        icon: FigmaIcon,
      },
    ],
  },
];
