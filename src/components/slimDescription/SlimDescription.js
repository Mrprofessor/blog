import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faTwitter,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SlimDescription = ({ isHome, description = "" }) => {
  return isHome ? (
    <div className="slim-description">
      <p>
        This place is all about my thoughts, obsessions and mostly rants. Some
        of these posts got promoted to{" "}
        <a
          href="https://dev.to/mrprofessor"
          target="_blank"
          className="brand-icon"
        >
          dev community
        </a>
        . You can reach out to me on{" "}
        <a
          href="https://github.com/mrprofessor"
          target="_blank"
          className="brand-icon"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        ,{" "}
        <a
          href="https://twitter.com/ThisIsRudra"
          target="_blank"
          className="brand-icon"
        >
          <FontAwesomeIcon icon={faTwitter} />{" "}
        </a>{" "}
        and{" "}
        <a
          href="https://www.linkedin.com/in/mrprofessor/"
          target="_blank"
          className="brand-icon"
        >
          <FontAwesomeIcon icon={faLinkedin} />{" "}
        </a>
        if you are into that kinda stuff.
      </p>
    </div>
  ) : (
    <div className="slim-description">
      <p>{description}</p>
    </div>
  );
};

export default SlimDescription;
