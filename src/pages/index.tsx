import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img className="header-logo header-shadow" src="img/logo.png" width="200" height="auto" />
        <h1 className="hero__title header-shadow">{siteConfig.title}
        <br />
        <a href="https://www.npmjs.com/package/@nodearch/core" rel="noopener noreferrer">
          <img
            alt="npm core"
            src="https://img.shields.io/npm/v/@nodearch/core?label=Core&style=flat-square"
          ></img>
          {'  '}
        </a>
        <a href="https://www.npmjs.com/package/@nodearch/cli" rel="noopener noreferrer">
          <img
            alt="npm cli"
            src="https://img.shields.io/npm/v/@nodearch/cli?label=CLI&style=flat-square"
          ></img>
        </a>
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
