import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import MainContent from './MainContent';
import ActivityList from './ActivityList';
import NewArrivals from './NewArrivals';
import GiftSet from './GiftSet';
import VisitUs from './VisitUs';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/activity-list" element={<ActivityList />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/gift-set" element={<GiftSet />} />
          <Route path="/visit-us" element={<VisitUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
