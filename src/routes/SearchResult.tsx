import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { getDataWord } from "../features/search/searchSlice";

export default function SearchResult() {
  let params = useParams();
  let dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getDataWord(params.word))
  },[params])

  return (
    <div className="container">
      <h1>The word {params.word}</h1>
    </div>
  );
}
