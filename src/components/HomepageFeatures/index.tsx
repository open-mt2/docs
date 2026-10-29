import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type ProjectItem = {
  title: string;
  icon: ReactNode;
  description: ReactNode;
  docsUrl: string;
  githubUrl: string;
  githubLabel: string;
};

function BookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15.5A2.5 2.5 0 0 0 17.5 16H4z" />
      <path d="M4 5.5V21h13.5" />
      <path d="M8 7.5h8M8 11h6" />
    </svg>
  );
}

function BranchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      <circle cx="6" cy="5" r="2.25" />
      <circle cx="18" cy="6" r="2.25" />
      <circle cx="6" cy="19" r="2.25" />
      <path d="M6 7.25v9.5M8.25 12h4.5A5.25 5.25 0 0 0 18 6.75" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      <path d="m12 3 9 4.5-9 4.5-9-4.5z" />
      <path d="m3 12 9 4.5 9-4.5" />
      <path d="m3 16.5 9 4.5 9-4.5" />
    </svg>
  );
}

function CubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z" />
      <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="18"
      height="18"
      fill="currentColor"
      aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

const ProjectList: ProjectItem[] = [
  {
    title: 'Client',
    icon: <LayersIcon />,
    description:
      'A cross-platform, modern Metin2 client split into focused engine packages.',
    docsUrl: '/client/',
    githubUrl: 'https://github.com/orgs/open-mt2/repositories?q=pkg_',
    githubLabel: 'Browse client packages on GitHub',
  },
  {
    title: 'Server',
    icon: <BranchIcon />,
    description:
      'Linux server services, networking, and the tooling that keeps them running.',
    docsUrl: '/server/',
    githubUrl: 'https://github.com/orgs/open-mt2/repositories',
    githubLabel: 'Browse OpenMT2 repositories on GitHub',
  },
  {
    title: 'Neoeter',
    icon: <CubeIcon />,
    description:
      'The Eter packages refactored into a cleaner, more maintainable architecture.',
    docsUrl: '/neoeter/',
    githubUrl: 'https://github.com/orgs/open-mt2/repositories',
    githubLabel: 'Browse OpenMT2 repositories on GitHub',
  },
  {
    title: 'Other Projects',
    icon: <BookIcon />,
    description:
      'Supporting tools, libraries, and experiments from the OpenMT2 ecosystem.',
    docsUrl: '/other-projects/',
    githubUrl: 'https://github.com/orgs/open-mt2/repositories',
    githubLabel: 'Browse all OpenMT2 repositories on GitHub',
  },
];

function ProjectCard({
  title,
  icon,
  description,
  docsUrl,
  githubUrl,
  githubLabel,
}: ProjectItem) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.icon}>{icon}</span>
        <a
          className={styles.githubLink}
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={githubLabel}
          title={githubLabel}>
          <GitHubIcon />
        </a>
      </div>
      <Heading as="h3" className={styles.cardTitle}>
        {title}
      </Heading>
      <p className={styles.cardText}>{description}</p>
      <Link className={styles.cardCta} to={docsUrl}>
        Explore docs
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionIntro}>
          <Heading as="h2" className={styles.sectionTitle}>
            Explore the projects
          </Heading>
          <p className={styles.sectionText}>
            Documentation and repositories for every part of the OpenMT2
            ecosystem.
          </p>
        </div>
        <div className={styles.grid}>
          {ProjectList.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
