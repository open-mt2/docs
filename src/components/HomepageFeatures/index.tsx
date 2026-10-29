import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: ReactNode;
  description: ReactNode;
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

const FeatureList: FeatureItem[] = [
  {
    title: 'Clear, practical guides',
    icon: <BookIcon />,
    description: (
      <>
        Step-by-step documentation for setting up, running, and extending
        OpenMT2 without digging through the source first.
      </>
    ),
  },
  {
    title: 'Built in the open',
    icon: <BranchIcon />,
    description: (
      <>
        Open source from the ground up. Browse the code, report issues, and
        contribute improvements back to the project.
      </>
    ),
  },
  {
    title: 'Made for contributors',
    icon: <LayersIcon />,
    description: (
      <>
        A tidy structure, consistent conventions, and examples that make it
        easy to add new pages and keep the docs current.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={styles.col}>
      <article className={styles.card}>
        <span className={styles.icon}>{icon}</span>
        <Heading as="h3" className={styles.cardTitle}>
          {title}
        </Heading>
        <p className={styles.cardText}>{description}</p>
      </article>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionIntro}>
          <Heading as="h2" className={styles.sectionTitle}>
            Everything you need to get started
          </Heading>
          <p className={styles.sectionText}>
            Concise documentation for developers working with the OpenMT2
            project.
          </p>
        </div>
        <div className={styles.grid}>
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
