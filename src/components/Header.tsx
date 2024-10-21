import React from 'react';
import resume from '../data/resume.json';

const Header: React.FC = () => {
  return (
    <header className="p-5 bg-base-200 text-center">
      <h1 className="text-4xl font-bold">{resume.name}</h1>
      <p className="text-lg">{resume.location}</p>
      <p className="text-lg">📧 {resume.contact.email}</p>
    </header>
  );
};

export default Header;
