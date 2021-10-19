import { useGetCharactersQuery, useGetSpeciesQuery, useSearchPeopleQuery, useSearchSpeciesQuery } from '@swapi/store';
import { useState } from 'react';
import styles from './content.module.scss';
import { RenderData } from './RenderData';

/* eslint-disable-next-line */
export interface FetchAllDataProps {
  route: string,
}

export function FetchAllData(props: FetchAllDataProps) {
  const searchBy = props.route
  const [page, setPage] = useState(1)
  const [skip, setSkip] = useState(false)
  const [apiData, setApiData] = useState<any>([])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading } = searchBy === 'people' ? useGetCharactersQuery(page, {skip}) : useGetSpeciesQuery(page, {skip})

  if(error) {
    return (<div>There was an error :c</div>)
  }
  if (isLoading) {
    return (<div>Loading...</div>)
  }

  if(data){
    setApiData([...apiData, ...data.results])
    if(data.next !== null){
      setPage(page+1)
    } else { setSkip(true) }
  }

  return (
    <>
      {skip && <RenderData data={apiData} />}
    </>
  );
}

export default FetchAllData;
