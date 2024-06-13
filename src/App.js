import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ListView from './components/ListView';
import MapView from './components/MapView';

function App() {
  const [view, setView] = useState('list');

  return (
    <div className="flex min-h-screen">
      <Sidebar setView={setView} />
      {view === 'list' ? <ListView /> : <MapView />}
    </div>
  );
}

export default App;
