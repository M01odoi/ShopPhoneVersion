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
import Cards from "../cards/Cards";
import Searching from "./shopComponents/Searching";
import OpenModal from "./shopComponents/OpenModal";
import { useAppSelector } from "../../hooks/redux";

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
  const { isShowModal } = useAppSelector((state) => state.categoryState);

  return (
    <>
      <header className="header">
        <h1>Shop</h1>
        <button>
          <FontAwesomeIcon icon="bars" className="fa-xl" />
        </button>
      </header>
      <main>
        <section className={isShowModal ? "" : "search"}>
          <Searching />
          <OpenModal />
        </section>
        <Cards />
      </main>
    </>
  );
};

export default Shop;
