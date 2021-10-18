import styles from './nav-bar.module.scss';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';


import { useDispatch } from "react-redux";
import { changeSearch } from '@swapi/store'


/* eslint-disable-next-line */
export interface NavBarProps {
  updateSearch: (newValue:string) => void
}

export function NavBar(props: NavBarProps) {
  const dispatch = useDispatch()

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: 'white',
    backgroundColor: 'rgba(54, 53, 70, 0.7)', 
    margin: '5px',
    '&:hover': {
      backgroundColor: '#ff366e',
    },
  }));

  return (
    <div>
      <div className={styles.sort}>
        <TextField
          id="Searcher"
          placeholder="Search people..."
          inputProps={{ style: { borderRadius: "4px", background: "white", width: "200px"}}}
          onChange={(e)=>{props.updateSearch(e.target.value)}}
        />
        <p>SORT BY   </p>
          <ColorButton onClick={()=>console.log('name')}>
            NAME
          </ColorButton>
          <ColorButton onClick={()=>console.log('gender')}>
            GENDER
          </ColorButton>
      </div>
    </div>
  );
}

export default NavBar;
