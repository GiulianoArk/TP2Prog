import React from "react";
import "../css/footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
const Footer = (props) => {
  return (
    
      <footer className="footer">
        <div className="contenedorRedes">
        <a href="https://www.instagram.com/giuliano.c.33/" target="blank">
          <FaInstagram className="logoRedSocial"/>
        </a>
        <a href="https://github.com/GiulianoArk" target="blank">
          <FaGithub className="logoRedSocial"/>
        </a>
        <a href="https://www.reddit.com/user/its_arkhamknight/" target="_blank">
          <FaReddit className="logoRedSocial"/>
        </a>
        <a href="https://www.facebook.com/share/1AahcJtqFi/?mibextid=qi2Omg" target="_blank">
          <FaFacebook className="logoRedSocial"/>
        </a>
        </div>

        
      </footer>
    
  );
};

export default Footer;
