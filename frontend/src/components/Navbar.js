import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-xl text-white p-3"
      style={{ background: "#24292e", flexGrow: "0" }}
    >
      <div className="navbar-brand d-flex align-items-center">
        <Icon icon={["fab", "github"]} className="mr-3" size="2x" />
        GitHub Finder
      </div>
    </nav>
  );
}

export default Navbar;
