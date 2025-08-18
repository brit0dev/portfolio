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
  SpringBootIcon,
  SpringIcon,
  JavaIcon,
  MongoIcon,
  ExpressJsIcon,
  MySQLIcon,
  PostgreSQLIcon,
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
    title: 'ForumHUB API',
    description: [
      'An API for managing forum posts with JWT authentication.',
      'This project was developed as part of the security challenge in the final phase of the Oracle ONE program. It is built in Java using Spring Boot as the base framework and follows the principles of Clean Architecture. The API provides secure access and management for forum posts, with authentication handled via JWT tokens.',
      'The application uses MySQL as the database for storing forum data, and Flyway is utilized for database migrations, ensuring smooth and version-controlled schema updates. The API’s code is organized following common design patterns, such as Controller, Repository, Model, and Service, which promotes maintainability and scalability.',
      'Additionally, JPA (Java Persistence API) is used for seamless integration with the MySQL database, simplifying object-relational mapping and providing an efficient way to manage data persistence.',
      'During the development, I gained experience in implementing secure authentication mechanisms, organizing code following clean architecture principles, and managing database migrations and interactions with JPA.',
    ],
    images: [
      `https://opengraph.githubassets.com/${Date.now()}/brit0dev/forumhub-api`,
    ],
    tags: [
      {text: 'Java', link: 'projects?tag=Java'},
      {text: 'SpringBoot', link: 'projectstag=SpringBoot'},
      {text: 'MySQL', link: 'projects?tag=MySQL'},
      {text: 'JPA', link: 'projects?tag=JPA'},
      {text: 'Auth', link: 'projects?tag=Auth'},
      {text: 'TokenJWT', link: 'projects?tag=TokenJWT'},
      {text: 'RestfulAPI', link: 'projects?tag=RestfulAPI'},
      {text: 'Flyway', link: 'projects?tag=Flyway'},
      {text: 'CleanArchitecture', link: 'projects?tag=CleanArchitecture'},
    ],
    area: ['BackEnd'],
    technologies: [
      {name: 'Java', icon: JavaIcon},
      {name: 'Spring Boot', icon: SpringBootIcon},
      {name: 'MySQL', icon: MySQLIcon},
    ],
    view: [
      {
        type: 'github' as const,
        link: 'https://github.com/brit0dev/forumhub-api',
        icon: GithubIcon,
      },
    ],
  },
  {
    title: 'Literalura',
    description: [
      'A CLI for managing and storing books and authors.',
      'This project was developed during the Oracle ONE program, offered by Oracle in partnership with Alura. It consists of a CLI built with Java and the Spring framework to manage authors and books retrieved from a public API.',
      'The software provides functionalities for inserting, listing, editing, and deleting records, which are stored in a PostgreSQL database. It is designed to streamline book and author management directly from the command line, offering a seamless user experience for interacting with the data.',
      'Throughout the project, I worked with Spring’s core features, such as dependency injection and repository management, and integrated with PostgreSQL to store the data. This project also helped me deepen my understanding of database management and CLI development in Java.',
    ],
    images: [
      `https://opengraph.githubassets.com/${Date.now()}/brit0dev/literalura`,
    ],
    tags: [
      {text: 'Java', link: 'projects?tag=Java'},
      {text: 'SpringBoot', link: 'projects?tag=SpringBoot'},
      {text: 'PostgreSQL', link: 'projects?tag=PostgreSQL'},
      {text: 'JPA', link: 'projects?tag=JPA'},
      {text: 'APIConsume', link: 'projects?tag=APIConsume'},
      {text: 'CleanArchitecture', link: 'projects?tag=CleanArchitecture'},
    ],
    area: ['BackEnd'],
    technologies: [
      {name: 'Java', icon: JavaIcon},
      {name: 'Spring Framework', icon: SpringIcon},
      {name: 'PostgreSQL', icon: PostgreSQLIcon},
    ],
    view: [
      {
        type: 'github' as const,
        link: 'https://github.com/brit0dev/literalura',
        icon: GithubIcon,
      },
    ],
  },
  {
    title: 'Blogado API',
    description: [
      'A simple API built to manage blog posts.',
      'This project was developed to practice creating CRUD APIs in JavaScript, focused on managing blog posts. The API follows RESTful standards and was designed using best architectural practices, including the Repository and Controller design patterns.',
      'The API was built with Express.js, a minimalist framework for Node.js, which made route creation and application structuring easier. It uses MongoDB as the database for storing posts, with Mongoose acting as the ODM (Object Data Modeling) to simplify database interaction.',
      'The API offers basic CRUD operations (Create, Read, Update, Delete), with efficient and secure endpoints for post management. The modular structure of the application ensures easy maintenance and future scalability.',
      'During development, I deepened my knowledge of asynchronous JavaScript with Promises and async/await, as well as working with middlewares for validation and error handling.',
    ],
    images: [
      `https://opengraph.githubassets.com/${Date.now()}/brit0dev/blogado-api`,
    ],
    tags: [
      {text: 'Javascript', link: 'projects?tag=Javascript'},
      {text: 'RestfulAPI', link: 'projects?tag=RestfulAPI'},
      {text: 'Express.js', link: 'projects?tag=Express.js'},
      {text: 'Mongo', link: 'projects?tag=Mongo'},
      {text: 'Mongoose', link: 'projects?tag=Mongoose'},
      {text: 'CleanArchitecture', link: 'projects?tag=CleanArchitecture'},
    ],
    area: ['BackEnd'],
    technologies: [
      {name: 'Javascript', icon: JSIcon},
      {name: 'Express.js', icon: ExpressJsIcon},
      {name: 'MongoDB', icon: MongoIcon},
    ],
    view: [
      {
        type: 'github' as const,
        link: 'https://github.com/brit0dev/blogado-api',
        icon: GithubIcon,
      },
    ],
  },
];
