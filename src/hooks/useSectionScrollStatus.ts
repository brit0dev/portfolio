import {useState, useEffect} from 'react';

type UseSectionScrollStatusParams = {
  headerRef: React.RefObject<HTMLElement | null>;
  aboutMeRef: React.RefObject<HTMLElement | null>;
};

export const useSectionScrollStatus = ({
  headerRef,
  aboutMeRef,
}: UseSectionScrollStatusParams) => {
  const [aboutMeScroll, setAboutMeScroll] = useState(false);
  const [projectsScroll, setProjectsScroll] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;

      if (!headerRef.current || !aboutMeRef.current) return;
      const headerHeight = headerRef.current.offsetHeight;
      const aboutMeHeight = aboutMeRef.current.offsetTop;
      const projectsHeight = aboutMeHeight + headerHeight;

      if (headerHeight && scrollY > headerHeight * 0.8) setAboutMeScroll(true);
      if (headerHeight && scrollY < headerHeight * 0.8) setAboutMeScroll(false);

      if (projectsHeight && scrollY > projectsHeight * 0.8)
        setProjectsScroll(true);
      if (projectsHeight && scrollY < projectsHeight * 0.8)
        setProjectsScroll(false);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return {aboutMeScroll, projectsScroll};
};
