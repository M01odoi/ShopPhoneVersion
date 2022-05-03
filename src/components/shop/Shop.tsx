import "./shop.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faBars,
  faCheck,
  faInfo,
  faPencil,
  faPlus,
  faPlusCircle,
  faSearch,
  faSlidersH,
  faTrash,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import ListProducts from "../listProducts/ListProducts";
import Searching from "./shopComponents/Searching";
import OpeningButtonPopup from "./shopComponents/OpeningButtonPopup";

library.add(
  faBars,
  faSearch,
  faSlidersH,
  faArrowLeft,
  faPencil,
  faInfo,
  faCheck,
  faPlus,
  faTrash,
  faPlusCircle,
  faX
);

const Shop: React.FC = (): JSX.Element => {
  return (
    <>
      <header className="header">
        <h1>Shop</h1>
        <button>
          <FontAwesomeIcon icon="bars" className="fa-xl" />
        </button>
      </header>
      <main>
        <section className="search">
          <Searching />
          <OpeningButtonPopup />
        </section>
        <ListProducts />
      </main>
    </>
  );
};

export default Shop;
