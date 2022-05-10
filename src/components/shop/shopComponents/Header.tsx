import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="header">
      <h1>Shop</h1>
      <button>
        <FontAwesomeIcon icon="bars" className="fa-xl" />
      </button>
    </header>
  );
};

export default Header;
