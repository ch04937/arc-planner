import React from 'react';
import ch04937 from '../assests/ch04937.svg';
import Social from '../components/Socials';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <img src={ch04937} alt="ch04937" />
        <p>
          This is a fanmade web application and is not affiliated with Lilith games in any way. Ark
          Planner © {new Date().getFullYear()}
        </p>
      </div>
      <div>
        <Social />
      </div>
    </footer>
  );
};
export default Footer;
