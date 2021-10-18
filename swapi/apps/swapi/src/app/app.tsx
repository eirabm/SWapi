import styles from './app.module.scss';

import { Content } from '@swapi/ui';
import { BrowserRouter as Router, NavLink, Route, Switch, Redirect } from 'react-router-dom';

export function App() {
  return (
    <div className={styles.app}>
    <Router>
    <div className={styles.toggleSearch}>
        <NavLink exact to="/people" className={styles.inactive} activeClassName={styles.selected}>People</NavLink>
        <NavLink exact to="/species" className={styles.inactive} activeClassName={styles.selected}>Species</NavLink>
    </div>

      <Switch>
        <div className={styles.content}>
        <Redirect from="/" to="/people" />
          <Route exact path="/people" component={() => <Content route={'people'}/>} />
          <Route exact path="/species" component={() => <Content route={'species'}/>} />
        </div>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
