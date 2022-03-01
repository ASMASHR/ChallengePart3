import React from "react";
import ODD from "./ODD";

import "./Realisations.scss";

const Realisations = () => {
  return (
    <div className="RealisationsContainer">
      <div className="TitreCon">
            <p className="titreF">  Nos Réalisations</p>
           
      </div>
       <p className="Rea_Intro fadeIn first">
                  La STB SICAR contribue aux objectifs de développement durable proportionnellement aux moyens dont elle dispose. <br /> 
                  Au regard de ses activités, <span className="important"> elle contribue principalement aux 7 ODD suivants :</span>
            </p>
      <ODD/>
      
    </div>
  );
};

export default Realisations;
