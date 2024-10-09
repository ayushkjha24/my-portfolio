import logo from "../assets/myLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaQuora } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
const  Navbar = () => {
  return ( 
  <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
       <img style={{ maxWidth: '200px' }}
 src={logo} alt="Ayush Jha" />
    </div>
    <div className="m-8 flex  items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/ayush-jha-210876259/"><FaLinkedin/></a>
        <a href="https://github.com/ayushkjha24"><FaGithub/></a>
        <a href="https://www.instagram.com/ayushkjha.24/"><FaInstagram/></a>
        <a href=""><FaDiscord/></a>
        <a href=""><FaDiscord/></a>
        <a href="https://www.quora.com/profile/Ayush-Jha-683?ch=10&oid=1485754751&share=b6da963b&srid=ueps1c&target_type=user"><FaQuora/></a>
        
    </div>
  </nav>
  );
};
export default Navbar;