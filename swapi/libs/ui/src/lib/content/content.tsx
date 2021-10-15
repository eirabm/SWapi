import styles from './content.module.scss';
import { Character } from './fetchChars';

/* eslint-disable-next-line */
export interface ContentProps {}

export function Content(props: ContentProps) {

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
