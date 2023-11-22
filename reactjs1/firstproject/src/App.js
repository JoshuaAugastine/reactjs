import logo from './logo.svg';
import './App.css';
import React from 'react';
import Check from './Check';
import ComponentUpdate from './ComponentUpdate';
import Snapshot from './Snapshot';
import ComponentUpdate1 from './ComponentUpdate1';
import Table from './Table';
function App() {
  return (
    <div className="App">
      <ComponentUpdate />
      <Snapshot />
      <ComponentUpdate1 />
      <Table />

    </div>
  );
}

export default App;
