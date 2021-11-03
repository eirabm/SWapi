/* eslint-disable react-hooks/rules-of-hooks */
import { useGetCharactersQuery, useGetSpeciesQuery } from '@swapi/store';
import {
  characterDataObject as cdot,
  speciesDataObject as sdot,
} from './types';
import { useState } from 'react';
import styles from './content.module.scss';
import { RenderData } from './RenderData';

export interface FetchAllDataProps {
  searchValue: string;
  route: string;
}

export function FetchAllData(props: FetchAllDataProps) {
  const searchBy = props.route;
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(false);
  const [apiData, setApiData] = useState<cdot[] | sdot[]>([]);

  const { data, error, isLoading } =
    searchBy === 'people'
      ? useGetCharactersQuery(page, { skip })
      : useGetSpeciesQuery(page, { skip });

  if (error) {
    return <div>There was an error :c</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data) {
    setApiData((prevState) => [...prevState, ...data.results]);
    if (data.next !== null) {
      setPage(page + 1);
    } else {
      setSkip(true);
    }
  }

  return (
    <>{skip && <RenderData data={apiData} search={props.searchValue} />}</>
  );
}

export default FetchAllData;
