/* eslint-disable react/jsx-no-useless-fragment */
import { useGetCharactersQuery, useGetSpeciesQuery } from '@swapi/store'
import styles from './content.module.scss';

export const Character = ({
  id,
}: {
  id: number
}) => {
  const { data, error, isLoading, isFetching } = useGetCharactersQuery(id)
  if(data) {
    console.log('hay data')
  }
  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div className={styles.characterCard}>
          <img src=""  alt={`${data.name} img`} />
          <h3>
            {data.name} {isFetching ? '...' : ''}
          </h3>
          <p>{data.gender.toUpperCase()} {isFetching ? '...' : ''}</p>
        </ div>
      ) : null}
    </>
  )
}