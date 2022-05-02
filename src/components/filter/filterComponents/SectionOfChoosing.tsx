import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RenderUlCategories from "./RenderUlCategory";
import cardImg from "../../../img/cardImg.jpg";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  setActiveCategory,
  setCharLeft,
  setIsActiveChange,
  setIsAddingCategory,
  setIsAllActiveCategory,
  setIsChangeName,
} from "../../../store/reducers/categoryStateSlice";
import { updateCategory } from "../../../store/reducers/categorySlice";

const SectionOfChoosing: React.FC = (): JSX.Element => {
  const arrCategories = useAppSelector(
    (state) => state.category.fakeCategories
  );
  const {
    isAddingCategory,
    isChangeName,
    isActiveChange,
    isAllActiveCategory,
  } = useAppSelector((state) => state.categoryState);
  const dispatch = useAppDispatch();

  const acceptCategoryAndCloseChanging: Function = (): void => {
    dispatch(updateCategory());
    dispatch(setIsChangeName(false));
    dispatch(setIsActiveChange(false));
  };
  const addingCategory: Function = (): void => {
    dispatch(setIsAddingCategory(true));
    dispatch(setCharLeft(20));
  };
  const preventActiveCategoryOnActivateChange: Function = (): void => {
    dispatch(setActiveCategory(1));
    dispatch(setIsActiveChange(true));
  };

  return (
    <section>
      {isActiveChange && (
        <div className="display margin-for-editing-mode">
          Categories editing
        </div>
      )}
      <div className="categories">
        <h4>Categories</h4>
        <ul>
          {!isActiveChange ? (
            <li>
              <button onClick={() => preventActiveCategoryOnActivateChange()}>
                <FontAwesomeIcon icon="pencil" className="fa-lg" />
              </button>
            </li>
          ) : (
            <>
              <li>
                <button
                  disabled={isAddingCategory || isChangeName}
                  className="button-grey-bg"
                  onClick={() =>
                    dispatch(setIsAllActiveCategory(!isAllActiveCategory))
                  }
                >
                  All
                </button>
              </li>
              <li>
                <button
                  disabled={isAddingCategory || isChangeName}
                  onClick={() => addingCategory()}
                >
                  <FontAwesomeIcon icon="plus" className="fa-lg" />
                </button>
              </li>
              <li>
                <button
                  disabled={isAddingCategory || isChangeName}
                  onClick={() => acceptCategoryAndCloseChanging()}
                  className="purple"
                >
                  <FontAwesomeIcon icon="check" className="fa-lg" />
                </button>
              </li>
            </>
          )}
          <li>
            <button
              className="button-grey-bg"
              disabled={isAddingCategory || isChangeName}
            >
              <FontAwesomeIcon icon="info" className="fa-xl" />
            </button>
          </li>
        </ul>
      </div>
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
    </section>
  );
};

export default SectionOfChoosing;
