import RenderUlCategories from "./renderCategories/RenderUlCategory";
import cardImg from "../../../img/cardImg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";

const ListCategories = () => {
  const arrCategories = useAppSelector(
    (state) => state.category.fakeCategories
  );
  const { isActiveChange } = useAppSelector((state) => state.categoryState);
  // const dispatch = useAppDispatch();

  return (
    <>
      {arrCategories && <RenderUlCategories />}
      {isActiveChange && (
        <section className="section-view">
          <h6>category_1</h6>
          <div>
            <img src={cardImg} alt="" />
            <p>Lorem ipsum dolor sit amet,</p>
            <button>
              <FontAwesomeIcon icon="bars" className="fa-xl" />
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default ListCategories;
