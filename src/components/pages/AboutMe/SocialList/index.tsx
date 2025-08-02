import {GithubIcon} from '@/components/common/icons';
import InstagramIcon from '@/components/common/icons/links/InstagramIcon';
import LinkedInIcon from '@/components/common/icons/links/LinkedInIcon';

const SocialList = () => {
  return (
    <ul className="social-list bg-background-light max-sm:w-full flex justify-around shadow rounded-lg sm:rounded-xl xl:rounded-lg border-1 lg:border-1 xl:border-1 border-primary-dark overflow-hidden">
      <li>
        <a className="pl-1 xs:pl-3" href="/">
          <div>
            <InstagramIcon />
          </div>
          <span>Instagram</span>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/brit0dev"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div>
            <GithubIcon />
          </div>
          <span>Github</span>
        </a>
      </li>
      <li>
        <a
          className="pr-2 xs:pr-3.5"
          href="https://www.linkedin.com/in/mhenriquebrito"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div>
            <LinkedInIcon />
          </div>
          <span>LinkedIn</span>
        </a>
      </li>
    </ul>
  );
};

export default SocialList;
