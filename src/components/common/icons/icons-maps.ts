import {
  CSS3Icon,
  CSSModulesIcon,
  ExpressJsIcon,
  FigmaTechIcon,
  HTML5Icon,
  JavaIcon,
  JSIcon,
  MongoIcon,
  MySQLIcon,
  NextIcon,
  PostgreSQLIcon,
  ReactIcon,
  SpringBootIcon,
  SpringIcon,
  StyledComponentsIcon,
  TSIcon,
} from './technologies';

import {ExternalLinkIcon, FigmaIcon, GithubIcon} from './links';

/**
 * Single Source of Truth for Technologies.
 * This structure is scalable for adding more properties like colors, categories, etc.
 */
export const TECHNOLOGIES = {
  React: {name: 'React', icon: ReactIcon},
  Typescript: {name: 'TypeScript', icon: TSIcon},
  Javascript: {name: 'JavaScript', icon: JSIcon},
  'Next.js': {name: 'Next.js', icon: NextIcon},
  HTML5: {name: 'HTML5', icon: HTML5Icon},
  CSS3: {name: 'CSS3', icon: CSS3Icon},
  'Styled Components': {name: 'Styled Components', icon: StyledComponentsIcon},
  'CSS Modules': {name: 'CSS Modules', icon: CSSModulesIcon},
  Java: {name: 'Java', icon: JavaIcon},
  'Spring Framework': {name: 'Spring Framework', icon: SpringIcon},
  'Spring Boot': {name: 'Spring Boot', icon: SpringBootIcon},
  'Express.js': {name: 'Express.js', icon: ExpressJsIcon},
  MongoDB: {name: 'MongoDB', icon: MongoIcon},
  MySQL: {name: 'MySQL', icon: MySQLIcon},
  PostgreSQL: {name: 'PostgreSQL', icon: PostgreSQLIcon},
  Figma: {name: 'Figma', icon: FigmaTechIcon},
} as const;

export const VIEW_ICONS = {
  Github: GithubIcon,
  Deploy: ExternalLinkIcon,
  Figma: FigmaIcon,
} as const;
