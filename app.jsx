import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProverbList from './ProverbList';
import ProverbDetail from './ProverbDetail';
import AddProverb from './AddProverb';
import EditProverb from './EditProverb';

function App() {
  return (
    <div className="container">
      <nav>
        <h1>Afghan Proverbs</h1>
        <Link to="/">Home</Link> | <Link to="/add">Add Proverb</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProverbList />} />
        <Route path="/proverbs/:id" element={<ProverbDetail />} />
        <Route path="/add" element={<AddProverb />} />
        <Route path="/edit/:id" element={<EditProverb />} />
      </Routes>
    </div>
  );
}

export default App;