import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TransportComponent } from './components/transport.component';

const App: React.FC = () => {
  return (
    <div className="app">
      <TransportComponent />
    </div>
  );
}

export default App;
