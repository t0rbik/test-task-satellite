import { NextUIProvider } from '@nextui-org/react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import SearchResult from './routes/SearchResult';
import NotFound from './routes/NotFound';

import './App.css';

function App() {
  return (
    <NextUIProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":word" element={<SearchResult />} />
        <Route path="not-found" element={<NotFound />} />
      </Routes>
    </NextUIProvider>
  );
}

export default App;
