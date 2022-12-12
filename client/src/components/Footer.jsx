import logo from "../images/logo.png";
import { BsGithub, BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <img src={logo} alt="logo" className="w-32" />
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <a
            href="https://github.com/Ar1kol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub fontSize={30} color="#fff" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100000420424724"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook fontSize={30} color="#fff" />
          </a>
          <a
            href="https://www.linkedin.com/in/arkadiy-kolomiets"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin fontSize={30} color="#fff" />
          </a>
          <a
            href="https://www.instagram.com/arkashakol92/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram fontSize={30} color="#fff" />
          </a>
        </div>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />
      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-sm text-center">All rights reserved</p>
        <p className="text-white text-sm text-center font-medium mt-2">
          Arkadiy kolomiets 2022
        </p>
      </div>
    </div>
  );
};

export default Footer;
