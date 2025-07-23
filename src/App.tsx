import {useRef} from 'react';

import Header from '@/components/common/Header';
import AboutMe from '@/pages/AboutMe';
import Projects from '@/pages/Projects';
import {useSectionScrollStatus} from '@/hooks/useSectionScrollStatus';

function App() {
  const headerRef = useRef<HTMLElement>(null);
  const aboutMeRef = useRef<HTMLElement>(null);

  const {aboutMeScroll, projectsScroll} = useSectionScrollStatus({
    headerRef,
    aboutMeRef,
  });

  return (
    <div className="bg-background text-base-dark">
      <Header ref={headerRef} isScrolled={aboutMeScroll} />
      <AboutMe ref={aboutMeRef} isScrolled={aboutMeScroll} />
      <Projects isScrolled={projectsScroll} />
    </div>
  );
}

export default App;
