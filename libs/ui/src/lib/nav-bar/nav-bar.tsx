import styles from './nav-bar.module.scss';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

import { useDispatch } from 'react-redux';
import { changeSort } from '@swapi/store';

/* eslint-disable-next-line */
export interface NavBarProps {
  route: string;
  updateSearch: (newValue: string) => void;
}

export function NavBar(props: NavBarProps) {
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  props.route === 'species' ? dispatch(changeSort('name')) : '';

  return (
    <div>
      <div className={styles.sort}>
        <TextField
          id="Searcher"
          placeholder={`Search ${props.route}...`}
          inputProps={{
            style: { borderRadius: '4px', background: 'white', width: '200px' },
          }}
          onChange={(e) => {
            props.updateSearch(e.target.value);
          }}
        />
        <p>SORT BY </p>
        <button onClick={() => dispatch(changeSort('name'))}>NAME</button>

        {props.route !== 'species' ? (
          <button onClick={() => dispatch(changeSort('gender'))}>GENDER</button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default NavBar;
