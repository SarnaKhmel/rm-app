import React, { ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './styles.module.css'
import FabBtn from '../Fab/Fab';
const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        {children}
      </div>
      <FabBtn />
      <Footer />
    </div>
  );
};

export default Layout;
