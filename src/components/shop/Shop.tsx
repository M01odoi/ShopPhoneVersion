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
import BtnPopupFilterAndPopup from "./shopComponents/BtnPopupFilterAndPopup";
import Header from "./shopComponents/Header";

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
      <Header />
      <main>
        <section className="search">
          <Searching />
          <BtnPopupFilterAndPopup />
        </section>
        <ListProducts />
      </main>
    </>
  );
};

export default Shop;
