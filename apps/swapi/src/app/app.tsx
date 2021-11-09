import styles from './app.module.scss';

import { Content } from '@swapi/ui';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

export function App() {
  return (
    <div className={styles.app}>
      <Router>
        <div className={styles.toggleSearch}>
          <NavLink
            exact
            to="/people"
            className={styles.inactive}
            activeClassName={styles.selected}
          >
            People
          </NavLink>
          <NavLink
            exact
            to="/species"
            className={styles.inactive}
            activeClassName={styles.selected}
          >
            Species
          </NavLink>
        </div>

        <Switch>
          <Route exact path="/">
            <Redirect to="/people" />
          </Route>
          <Route
            path="/people"
            component={() => <Content route={'people'} />}
          />
          <Route
            path="/species"
            component={() => <Content route={'species'} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
