import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Skills />
    </div>
  );
};

export default App;
