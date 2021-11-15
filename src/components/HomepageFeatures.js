import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Extensibility',
    // Svg: require('../../static/img/logo.svg').default,
    description: (
      <>
        With the powerful extension system, you can customize the behavior of your app, 
        either by using an existing extension from npm or writing it yourself
      </>
    ),
  },
  {
    title: 'Modularity & Design',
    // Svg: require('../../static/img/logo.svg').default,
    description: (
      <>
        Deliver best quality, scalable, maintainable, production grade code, 
        using well known design patterns, powerful dependency injection, and Typescript.
      </>
    ),
  },
  {
    title: 'Productivity',
    // Svg: require('../../static/img/logo.svg').default,
    description: (
      <>
        Focus on what matters, with features such as modules auto detection, 
        you will not be distracted with unnecessary imports and code wiring.
      </>
    ),
  },
  {
    title: 'Typescript',
    // Svg: require('../../static/img/logo.svg').default,
    description: (
      <>
        Full support for Typescript including a rich library of decorators to aid you in the development journey.
      </>
    ),
  },
  {
    title: 'Inversify',
    // Svg: require('../../static/img/logo.svg').default,
    description: (
      <>
        NodeArch uses Inversify, A powerful and lightweight inversion of control container, 
        to handle all the heavy work for dependency injection.
      </>
    ),
  },
  {
    title: 'Use cases',
    // Svg: require('../../static/img/logo.svg').default,
    description: (
      <>
        The NodeArch core module is designed to support you no matter your use case, 
        you can look for an existing extension e.g. @nodearch/express or create and publish your own.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')} >
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} alt={title} /> */}
      </div>
      <div className="text--center padding-horiz--lg padding-vert--lg">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
