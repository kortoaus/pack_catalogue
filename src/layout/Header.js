import React from "react";
import logo from "../svgs/logo.svg";

export const Header = () => {
  return (
    <header className="headerWrap">
      <img className="logo" src={logo} alt="umc" />
      <div>
        UMC X UNCLES' BUTCHERY
        <br />
        Packed Meat Catalogue
      </div>
      <img className="logo" src={logo} alt="umc" />
    </header>
  );
};
