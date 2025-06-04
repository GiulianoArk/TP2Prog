import React from "react";
import "../css/footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
const Footer = (props) => {
  return (
    
      <footer className="footer">
        <div className="contenedorRedes">
        <a href={props.redes.instagram} target="blank">
          <FaInstagram className="logoRedSocial"/>
        </a>
        <a href={props.redes.github} target="blank">
          <FaGithub className="logoRedSocial"/>
        </a>
        <a href={props.redes.reddit} target="_blank">
          <FaReddit className="logoRedSocial"/>
        </a>
        <a href={props.redes.facebook} target="_blank">
          <FaFacebook className="logoRedSocial"/>
        </a>
        </div>

        
      </footer>
    
  );
};

export default Footer;
