import { useParams } from "react-router-dom";

export default function SearchResult() {
  let params = useParams();
  return (
    <div className="container">
      <h1>{params.word}</h1>
    </div>
  );
}
