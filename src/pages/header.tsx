import React from 'react';
import { Link } from 'react-router-dom';
import ch04937 from '../assests/ch04937.svg';

export default function Header() {
  return (
    <header className="header">
      <div>
        <img src={ch04937} alt="ch04937" />
        <Link to="/">Ark Planner</Link>
      </div>
      <Link to="/user" className="link">
        Profile
      </Link>
    </header>
  );
}
