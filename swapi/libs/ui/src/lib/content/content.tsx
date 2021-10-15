import styles from './content.module.scss';
import { Character } from './fetchChars';
import { getSearchSelector } from '@swapi/store';

import { useSelector } from 'react-redux';


/* eslint-disable-next-line */
export interface ContentProps {}

export function Content(props: ContentProps) {
  const type = useSelector(getSearchSelector)
  console.log(type)

  const ids = [1, 2, 3, 4]
  return (
    <div className={styles.content}>
      {ids.map((id) => (
        <Character key={id} id={id} />
      ))}
      
    </div>
  );
}

export default Content;
