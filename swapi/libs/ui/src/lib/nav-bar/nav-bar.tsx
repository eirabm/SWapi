import styles from './nav-bar.module.scss';
import TextField from '@mui/material/TextField';

import { useDispatch } from "react-redux";
import { changeSearch } from '@swapi/store'


/* eslint-disable-next-line */
export interface NavBarProps {}

export function NavBar(props: NavBarProps) {
  const dispatch = useDispatch()

  return (
    <div>
      <div className={styles.toggleSearch}>
        <p onClick={()=>{dispatch(changeSearch('people'))}}>People</p>
        <p onClick={()=>{dispatch(changeSearch('species'))}}>Species</p>
      </div>
        <TextField
          id="Searcher"
          placeholder="Search people..."
          inputProps={{ style: { borderRadius: "4px", background: "white"}}}
        />
    </div>
  );
}

export default NavBar;
