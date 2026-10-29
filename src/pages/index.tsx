import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

const githubUrl = "https://github.com/openMT2";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const logoUrl = useBaseUrl("/img/logo.svg");

  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.inner}>
          <span className={styles.eyebrow}>Open source · Metin2 files</span>
          <Heading as="h1" className={styles.title}>
            <img
              className={styles.heroLogo}
              src={logoUrl}
              alt={siteConfig.title}
              width={184}
              height={184}
            />
          </Heading>
          <p className={styles.subtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--lg",
                styles.button,
                styles.primaryButton,
              )}
              to="/docs/intro"
            >
              Read the docs
            </Link>
            <Link
              className={clsx(
                "button button--lg",
                styles.button,
                styles.secondaryButton,
              )}
              href={githubUrl}
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} documentation`}
      description={siteConfig.tagline}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
