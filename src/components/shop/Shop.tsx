import "./shop.scss";
import React, { useState } from "react";
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
import Modal from "../modal/Modal";
import Searching from "./shopComponents/Searching";

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
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <>
      <header className="header">
        <h1>Shop</h1>
        <button>
          <FontAwesomeIcon icon="bars" className="fa-xl" />
        </button>
      </header>
      <main>
        <Searching setIsShowModal={setIsShowModal} />
        <Cards />
        {isShowModal && <Modal setActive={setIsShowModal} />}
      </main>
    </>
  );
};

export default Shop;
