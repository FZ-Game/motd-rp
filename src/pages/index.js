import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageSection1 from '@site/src/components/HomepageSection1';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">歡迎來到 F.Z. DarkRP伺服器</h1>
        <p className="hero__subtitle">第一次遊玩嗎?</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/rules">
            了解遊玩規則
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageSection1 />
      </main>
    </Layout>
  );
}
