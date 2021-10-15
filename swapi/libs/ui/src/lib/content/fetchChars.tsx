/* eslint-disable react/jsx-no-useless-fragment */
import { useGetCharactersQuery, useGetSpeciesQuery, getSearchSelector } from '@swapi/store'
import styles from './content.module.scss';

export const Character = ({ id }: { id: number }) => {
  const { data, error, isLoading, isFetching } = useGetCharactersQuery(id)

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div className={styles.characterCard}>
          <h3>
            {data.name} {isFetching ? '...' : ''}
          </h3>
          <p>{data.gender.toUpperCase()} {isFetching ? '...' : ''}</p>
        </ div>
      ) : null}
    </>
  )
}