import React from "react";

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer`}>{title}</li>;
};

export default NavbarItem;
