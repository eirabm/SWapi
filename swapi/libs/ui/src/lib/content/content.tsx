import styles from './content.module.scss';
import { NavBar } from '../nav-bar/nav-bar';
import { FetchAllData } from './FetchAllData';
import { FetchSearch } from './fetchSearch';
import {useState} from 'react';

/* eslint-disable-next-line */
export interface ContentProps {
  route: string,
}

export function Content(props: ContentProps) {
  const [search, setSearch] = useState('');

  const updateSearch = (newSearch:string):void => {
    setSearch(newSearch)
  }


  return (
    <div className={styles.content}>
      <NavBar updateSearch={updateSearch} />

     {search ? (<FetchSearch searchValue={search} />) : (<FetchAllData route={props.route}/>)} 

    </div>
  );
}

export default Content;
