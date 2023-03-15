import { Outlet } from 'react-router-dom';
import NavBar from 'modules/NavBar/NavBar';

import styles from './Layout.module.css';

function Layout() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
