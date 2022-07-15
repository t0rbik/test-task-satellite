import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import SearchResult from "./routes/SearchResult";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="word" element={<SearchResult />} />
    </Routes>
  );
}

export default App;
