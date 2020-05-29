import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <nav
      id="nav-bar"
      className="navbar navbar-expand-xl d-flex justify-content-between text-white p-3"
    >
      <div className="navbar-brand d-flex align-items-center">
        <Icon icon={["fab", "github"]} className="mr-3" size="2x" />
        GitHub Finder
      </div>
      By Lucas Gonçalves
    </nav>
  );
}

export default Navbar;
