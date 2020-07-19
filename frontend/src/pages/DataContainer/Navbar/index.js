import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

// Styles
import * as SC from "./styles";

const Navbar = () => {
  return (
    <SC.Nav>
      <SC.NavBrand>
        <Icon icon={["fab", "github"]} className="mr-3" size="2x" />
        GitHub Finder
      </SC.NavBrand>
      By Lucas Gonçalves
    </SC.Nav>
  );
};

export default Navbar;
