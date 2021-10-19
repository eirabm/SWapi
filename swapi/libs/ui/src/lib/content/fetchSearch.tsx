import { useSearchPeopleQuery } from '@swapi/store';
import { RenderData } from './RenderData'

/* eslint-disable-next-line */
export interface FetchSearchProps {
  searchValue: string, 
}

export function FetchSearch(props: FetchSearchProps) {

  const { data, error, isLoading } = useSearchPeopleQuery(props.searchValue)


  if(error) {
    return (<div>There was an error :c</div>)
  }
  if (isLoading) {
    return (<div>Loading...</div>)
  }

  return (
    <>
      {data && <RenderData data={data.results} />}
    </>
  );
}

export default FetchSearch;
