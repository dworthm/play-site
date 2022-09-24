import Link from 'next/link';
import stylesProject from '../../styles/Projects.module.css';
import stylesHome from '../../styles/Home.module.css';


const Projects = () => (
  <div className={stylesHome.main}>
    <h2>
      I have a plan, Pinky...
    </h2>
    <div className={stylesProject.grid}>
      {/* think about looping through names with [name].jsx route */}
    <Link href='/projects/biteshare'>
      <a className={stylesProject.card}>
        <h2>BiteShare &rarr;</h2>
        <p>[app blurb here]</p>
      </a>
    </Link>
    <Link href='/projects/atelier'>
      <a className={stylesProject.card}>
        <h2>Atelier &rarr;</h2>
        <p>[app blurb here]</p>
      </a>
    </Link>
    <Link href='/projects/trivia'>
      <a className={stylesProject.card}>
        <h2>Trivia app &rarr;</h2>
        <p>[app blurb here]</p>
      </a>
    </Link>
    </div>
  </div>
);

export default Projects;