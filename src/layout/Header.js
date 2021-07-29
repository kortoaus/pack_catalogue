import React from "react";
import logo from "../svgs/logo.svg";

export const Header = () => {
  return (
    <header className="headerWrap">
      <img className="logo" src={logo} alt="umc" />
      <div>
        UMC & UNCLES
        <br />
        PRIMAL CUTS
      </div>
    </header>
  );
};
