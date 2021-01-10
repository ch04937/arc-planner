import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Social: React.FC = () => (
  <>
    <a
      href="https://www.linkedin.com/in/ch04937-carlos-hernandez/"
      className="social__link"
    >
      <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" />
    </a>
    <a href="https://www.github.com/ch04937" className="social__link">
      <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
    </a>
    <a href="https://twitter.com/ch04937" className="social__link">
      <FontAwesomeIcon icon={faTwitter} size="2x" color="white" />
    </a>
  </>
);

export default Social;
