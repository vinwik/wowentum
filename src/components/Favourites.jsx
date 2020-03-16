import React from "react";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Favourites = () => {
  return (
    <div>
      <Button href="https://www.youtube.com/" color="inherit">
        <FontAwesomeIcon icon={faYoutube} size="3x" className="svg-icons" />
      </Button>
      <Button href="https://github.com/vinwik" color="inherit">
        <FontAwesomeIcon icon={faGithub} size="3x" className="svg-icons" />
      </Button>
      <Button href="https://codepen.io/vinwik/" color="inherit">
        <FontAwesomeIcon icon={faCodepen} size="3x" className="svg-icons" />
      </Button>
      <Button href="https://outlook.live.com/mail/0/inbox" color="inherit">
        <FontAwesomeIcon icon={faEnvelope} size="3x" className="svg-icons" />
      </Button>
    </div>
  );
};

export default Favourites;
