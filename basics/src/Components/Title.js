import React from "react";
import * as config from '../assets/config.js'

const Title = () => {
    return (
      <div className="title-container">
        <a href="/" className="title-link">
          <img
            className="logo"
            alt="logo"
            src={config.logo_link}
          />
          <h3 className="hotel-name">Banni Thinnona</h3>
        </a>
      </div>
    );
  };
  
  export default Title;
  