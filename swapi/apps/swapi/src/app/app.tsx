import styles from './app.module.scss';

import { NavBar, Content } from '@swapi/ui';

export function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <Content />

    </div>
  );
}

export default App;
