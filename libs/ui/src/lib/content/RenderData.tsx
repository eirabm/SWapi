/* eslint-disable react/jsx-no-useless-fragment */
import { useState } from 'react';
import styles from './content.module.scss';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchSelector, nextPage, prevPage } from '@swapi/store';

interface RenderDataProps {
  data: any[];
  search: string;
}

export const RenderData = (props: RenderDataProps) => {
  const dispatch = useDispatch();
  const searchState = useSelector(getSearchSelector);

  const sortBy = searchState.sortBy;

  const allData = props.data.sort((a, b) =>
    a[sortBy] < b[sortBy] ? -1 : a[sortBy] > b[sortBy] ? 1 : 0
  );

  const renderData = props.search
    ? allData.filter((item) =>
        item.name.toLowerCase().includes(props.search.toLowerCase())
      )
    : allData;
  const currentPage = searchState.actualPage;
  const [itemsPerPage] = useState(4);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = renderData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(renderData.length / itemsPerPage);

  return (
    <>
      <div className={styles.items}>
        {currentData.map((item) => (
          <div className={styles.characterCard} key={item.name}>
            <h3>{item.name}</h3>
            {item.gender ? <p>{item.gender.toUpperCase()}</p> : ''}
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        <div>
          <Button
            variant="text"
            onClick={() => {
              dispatch(prevPage());
            }}
            disabled={currentPage === 1}
          >
            Prev
          </Button>
          <Button
            variant="text"
            onClick={() => {
              dispatch(nextPage());
            }}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
        <p>PAGE {currentPage}</p>
      </div>
    </>
  );
};

export default RenderData;
