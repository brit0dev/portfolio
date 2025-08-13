import {
  JSIcon,
  GithubIcon,
  FigmaIcon,
  ExternalLinkIcon,
  ReactIcon,
  TSIcon,
  CSSModulesIcon,
  HTML5Icon,
  CSS3Icon,
  StyledComponentsIcon,
  FigmaTechIcon,
} from '@/components/common/icons';
import type {Project} from '@/types/pages/projects';

export const projects: Project[] = [
  {
    title: 'Social Dogs',
    description: [
      'A social network for dogs.',
      'This project was created during the ReactJS course by Origamid, with the goal of building a photo-sharing platform inspired by Instagram — but entirely focused on dogs.',
      'I built key features like secure login using JWT authentication, a live feed of recent dog photos, modal-based post viewing with comments, and full post pages including image, description, and feedback. I also added a user dashboard for managing personal posts and checking individual post statistics.',
      'The project helped me solidify many essential React concepts, including Hooks like useState, useEffect, and useReducer, the use of custom hooks, form handling, navigation with React Router, and shared state with the Context API. I also worked with CSS Modules for scoped styling and PropTypes for type checking, all within a functional component structure.',
      'All the backend data came from an API provided by Origamid. A live demo is linked in the project section.',
    ],
    images: [
      '/SocialDogs/home.png',
      '/SocialDogs/postfeed.png',
      '/SocialDogs/login.png',
      '/SocialDogs/myaccount.png',
      '/SocialDogs/statistics.png',
    ],
    tags: [
      {text: 'CSSModules', link: 'projects?tag=CSSModules'},
      {text: 'JWT', link: 'projects?tag=JWT'},
      {text: 'Javascript', link: 'projects?tag=Javascript'},
      {text: 'Typescript', link: 'projects?tag=Typescript'},
      {text: 'Next.js', link: 'projects?tag=Next.js'},
      {text: 'ReactJS', link: 'projects?tag=ReactJS'},
    ],
    area: ['FrontEnd'],
    technologies: [
      {name: 'React', icon: ReactIcon},
      {name: 'CSS Modules', icon: CSSModulesIcon},
      {name: 'Javascript', icon: JSIcon},
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
    description: [
      'Encryption App – Oracle ONE Final Challenge (Phase 1)',
      ' Developed as the final challenge of the first phase of the Oracle ONE program, this project applied foundational concepts such as programming logic and basic front-end development.',
      ' The solution is a Caesar cipher encoder/decoder built with HTML, CSS, and JavaScript. I implemented responsive design, applied the BEM CSS methodology, and introduced minor improvements to the original UI design.',
    ],
    images: ['/AluraCrypto/project.png'],
    tags: [
      {text: 'HTML', link: 'projects?tag=HTML'},
      {text: 'Javascript', link: 'projects?tag=Javascript'},
      {text: 'CSS3', link: 'projects?tag=CSS3'},
      {text: 'BEMCSS', link: 'projects?tag=BEMCSS'},
      {text: 'ResponsiveDesign', link: 'projects?tag=ResponsiveDesign'},
      {text: 'OracleOne', link: 'projects?tag=OracleOne'},
      {text: 'Alura', link: 'projects?tag=Alura'},
    ],
    area: ['FrontEnd'],
    technologies: [
      {name: 'HTML5', icon: HTML5Icon},
      {name: 'CSS3', icon: CSS3Icon},
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
    description: [
      'A frontend for github issues.',
      ' Front-end application for browsing issue lists from GitHub repositories. Initially developed during the GoStack Bootcamp, the project was later extended with new features and design improvements implemented independently.',
      ' Built with React, TypeScript, and Styled Components, it consumes the GitHub API to retrieve and display repository data through a responsive and intuitive interface.',
    ],
    images: [
      '/GithubPages/dashboard.png',
      '/GithubPages/search.png',
      '/GithubPages/repository.png',
    ],
    tags: [
      {text: 'Typescript', link: 'projects?tag=Typescript'},
      {text: 'React', link: 'projects?tag=React'},
      {text: 'StyledComponents', link: 'projects?tag=StyledComponents'},
      {text: 'GithubAPI', link: 'projects?tag=GithubAPI'},
      {text: 'GoStackBootcamp', link: 'projects?tag=GoStackBootcamp'},
    ],
    area: ['Design', 'FrontEnd'],
    technologies: [
      {name: 'Typescript', icon: JSIcon},
      {name: 'Styled Components', icon: StyledComponentsIcon},
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
    description: [
      'A dashboard to monitor sales of a fintech product.',
      ' Sales monitoring dashboard for a fintech, developed during the React course by Origamid.',
      ' Built with React, TypeScript, and CSS Modules, the project focuses on data visualization techniques using libraries such as Recharts, applying concepts related to dashboard UI and chart integration in React applications.',
    ],
    images: [
      '/FintechReact/sells.png',
      '/FintechReact/home.png',
      '/FintechReact/logo.png',
    ],
    tags: [
      {text: 'Typescript', link: 'projects?tag=Typescript'},
      {text: 'React', link: 'projects?tag=React'},
      {text: 'CSSModules', link: 'projects?tag=CSSModules'},
      {text: 'Recharts', link: 'projects?tag=Recharts'},
      {text: 'APIConsume', link: 'projects?tag=APIConsume'},
    ],
    area: ['FrontEnd'],
    technologies: [
      {name: 'React', icon: ReactIcon},
      {name: 'Typescript', icon: TSIcon},
      {name: 'CSS Modules', icon: CSSModulesIcon},
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
    description: [
      'First linkedin cover. Inspired by Braun Design.',
      ' Minimalist LinkedIn cover design created using Figma, inspired by the Braun design aesthetic. The visual style contrasts neutral tones with vibrant accents to achieve a clean and modern look.',
      ' Three variations of the design were created, each with subtle differences in layout and composition.',
    ],
    images: ['LinkedInCoverV1/cover.png'],
    tags: [
      {text: 'Figma', link: 'projects?tag=Figma'},
      {text: 'Cover', link: 'projects?tag=Cover'},
      {text: 'Banner', link: 'projects?tag=Banner'},
      {text: 'LinkedIn', link: 'projects?tag=LinkedIn'},
      {text: 'Braun', link: 'projects?tag=Braun'},
    ],
    area: ['Design'],
    technologies: [{name: 'Figma', icon: FigmaTechIcon}],
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
    description: ['Description for project 6.'],
    images: [
      'https://picsum.photos/seed/project6-1/400/300',
      'https://picsum.photos/seed/project6-2/400/300',
      'https://picsum.photos/seed/project6-3/400/300',
    ],
    tags: [
      {text: 'TagI', link: 'projects?tag=TagI'},
      {text: 'TagJ', link: 'projects?tag=TagJ'},
    ],
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
    description: ['Description for project 7.'],
    images: [
      'https://picsum.photos/seed/project7-1/400/300',
      'https://picsum.photos/seed/project7-2/400/300',
      'https://picsum.photos/seed/project7-3/400/300',
    ],
    tags: [
      {text: 'TagK', link: 'projects?tag=TagK'},
      {text: 'TagL', link: 'projects?tag=TagL'},
    ],
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
    description: ['Description for project 8.'],
    images: [
      'https://picsum.photos/seed/project8-1/400/300',
      'https://picsum.photos/seed/project8-2/400/300',
      'https://picsum.photos/seed/project8-3/400/300',
    ],
    tags: [
      {text: 'TagM', link: 'projects?tag=TagM'},
      {text: 'TagN', link: 'projects?tag=TagN'},
    ],
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
