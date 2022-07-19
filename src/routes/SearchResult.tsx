import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getDataWord } from "../features/search/searchSlice";
import { Text, Loading } from "@nextui-org/react";

import Description from "../Components/Description";

export default function SearchResult() {
  let params = useParams();
  let { isLoading, dataWord } = useAppSelector(state => state.search)
  let dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getDataWord(params.word));
  }, [params])

  return (
    <div className="defaultBar">
      <Text h1>{params.word}</Text>
      {isLoading === 'loading' ? <Loading size="lg" type="points"/> : null}
      {isLoading === 'failed' && <Navigate to="/not-found" replace={true}/>}
      {dataWord ? <Description data={dataWord[0]}/> : null}
    </div>
  );
}