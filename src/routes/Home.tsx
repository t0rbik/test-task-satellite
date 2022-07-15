import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  return (
    <div className="container">
      <h1>Simple dictionary</h1>
      <input type="text" id="search-input" />
      <button type="button" onClick={(e) => navigate(":word")}>
        Search
      </button>
    </div>
  );
}
