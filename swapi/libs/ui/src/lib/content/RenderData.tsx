/* eslint-disable react/jsx-no-useless-fragment */
import { useState } from 'react';
import styles from './content.module.scss';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { getSearchSelector } from '@swapi/store'


interface RenderDataProps {
  data: any[],
}

export const RenderData = (props: RenderDataProps) => {

  console.log(useSelector(getSearchSelector))

  const allData = props.data
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = allData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(allData.length / itemsPerPage)
  
  return (
    <>
      <div className={styles.items}>
        {currentData.map((item) => (
          <div className = {styles.characterCard} key = {item.name}>
            <h3>{item.name}</h3>
            {item.gender ? (<p>{item.gender.toUpperCase()}</p>) : ''}
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        <Button variant="text" 
          onClick={()=>{setCurrentPage(currentPage -1)}}
          disabled={currentPage === 1}>Prev</Button>
        <Button variant="text" 
          onClick={()=>{setCurrentPage(currentPage +1)}}
          disabled={currentPage === totalPages}>Next</Button>
        <p>PAGE {currentPage}</p>

      </div>
    </>
  )
}

export default RenderData;