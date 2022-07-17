import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import SearchResult from "./routes/SearchResult";
import NotFound from "./routes/NotFound";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":word" element={<SearchResult />} />
      <Route path="not-found" element={<NotFound />} />
    </Routes>
  );
}

export default App;
