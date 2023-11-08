import React from 'react';
import styles from './styles.module.css';
import { Typography } from 'antd';
import { Logo } from '../../assets/images/Logo'
import { RickAndMortyShade } from '../../assets/images/RickAndMortyShade';

const Header: React.FC = () => {
  return (
    <div>
      <header className={styles.header}>
        <Logo />
      </header>
      <main className={styles.main}>
        <div className={styles.hero}>
          <RickAndMortyShade />
          <div className={styles.slogan}>
            <Typography.Title className={styles.title}>The Rick and Morty API</Typography.Title>
          </div>
        </div>
      </main>
    </div>

  );
};

export default Header;
