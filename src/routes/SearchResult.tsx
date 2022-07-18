import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getDataWord } from "../features/search/searchSlice";

import Description from "./Description";

export default function SearchResult() {
  let params = useParams();
  let { isLoading, dataWord } = useAppSelector(state => state.search)
  let dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getDataWord(params.word));
  }, [params])

  return (
    <div className="container">
      <h1>The word {params.word}</h1>
      {isLoading === 'loading' ? <h2>I'm loading</h2> : null}
      {isLoading === 'failed' && <Navigate to="/not-found" replace={true}/>}
      {dataWord ? <Description data={dataWord[0]}/> : null}
    </div>
  );
}