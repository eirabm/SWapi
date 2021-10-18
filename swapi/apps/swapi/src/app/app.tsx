import styles from './app.module.scss';

import { NavBar, FetchAllData } from '@swapi/ui';

export function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <FetchAllData />

    </div>
  );
}

export default App;
