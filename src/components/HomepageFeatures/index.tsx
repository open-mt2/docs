import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type ProjectItem = {
  title: string;
  icon: ReactNode;
  description: ReactNode;
  repo?: string;
  docsUrl?: string;
};

function PackageIcon() {
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
      aria-hidden="true"
    >
      <path d="M3 8h18v12H3z" />
      <path d="M3 8 5.5 3h13L21 8M12 3v17" />
    </svg>
  );
}

function TerminalIcon() {
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
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m7 9 3 3-3 3M13 15h4" />
    </svg>
  );
}

function TreeIcon() {
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
      aria-hidden="true"
    >
      <path d="m12 3-5 7h3l-4 6h12l-4-6h3z" />
      <path d="M12 16v5" />
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
      aria-hidden="true"
    >
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
      aria-hidden="true"
    >
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z" />
      <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
    </svg>
  );
}

function CodeIcon() {
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
      aria-hidden="true"
    >
      <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
      <path d="m14 4-4 16" />
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
      aria-hidden="true"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

const ProjectList: ProjectItem[] = [
  {
    title: "Client",
    icon: <LayersIcon />,
    description: "Cross-platform OpenMT2 game layer with an open source stack.",
    repo: "client",
    docsUrl: "/client/",
  },
  {
    title: "Devkit",
    icon: <PackageIcon />,
    description:
      "Client development kit: Docker image, build and packaging scripts.",
    repo: "devkit",
    docsUrl: "/client/building",
  },
  {
    title: "Neoeter",
    icon: <CubeIcon />,
    description: "OpenMT2 core engine.",
    repo: "neoeter",
    docsUrl: "/neoeter/",
  },
  {
    title: "Neoeter Python",
    icon: <TerminalIcon />,
    description: "CPython 2.7 host and Python bindings for the OpenMT2 client.",
    repo: "neoeter-python",
    docsUrl: "/client/",
  },
  {
    title: "Neoeter CSharp",
    icon: <CodeIcon />,
    description: "C# bindings for the OpenMT2 client and client-server packages.",
  },
  {
    title: "SpeedTree BKR",
    icon: <TreeIcon />,
    description: "SpeedTree Geometry Baker.",
    repo: "speedtreebkr",
  },
];

function ProjectCard({ title, icon, description, repo, docsUrl }: ProjectItem) {
  const githubUrl = repo ? `https://github.com/open-mt2/${repo}` : undefined;
  const githubLabel = repo ? `Open ${repo} on GitHub` : undefined;

  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.icon}>{icon}</span>
        {githubUrl && (
          <a
            className={styles.githubLink}
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={githubLabel}
            title={githubLabel}
          >
            <GitHubIcon />
          </a>
        )}
      </div>
      <Heading as="h3" className={styles.cardTitle}>
        {title}
      </Heading>
      <p className={styles.cardText}>{description}</p>
      {docsUrl ? (
        <Link className={styles.cardCta} to={docsUrl}>
          Explore docs
          <span aria-hidden="true">→</span>
        </Link>
      ) : githubUrl ? (
        <Link
          className={styles.cardCta}
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View repository
          <span aria-hidden="true">→</span>
        </Link>
      ) : (
        <span className={styles.cardStatus}>Planned</span>
      )}
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
