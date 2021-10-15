import './nav-bar.module.scss';
import TextField from '@mui/material/TextField';


/* eslint-disable-next-line */
export interface NavBarProps {}

export function NavBar(props: NavBarProps) {
  return (
    <div>
        <TextField
          id="Searcher"
          placeholder="Search people..."
          inputProps={{ style: { borderRadius: "4px", background: "white"}}}
        />
    </div>
  );
}

export default NavBar;
