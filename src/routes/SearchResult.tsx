import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getDataWord } from "../features/search/searchSlice";

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
      {dataWord ? <p>{dataWord[0].word}</p> : null}
    </div>
  );
}