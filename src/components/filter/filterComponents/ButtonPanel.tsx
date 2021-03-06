import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  resetActiveCategory,
  setActiveCategory,
  setCharLeft,
  setIsActiveChange,
  setIsAddingCategory,
  setAllActiveCategory,
  setIsChangeName,
} from "../../../store/reducers/categoryStateSlice";
import { updateCategory } from "../../../store/reducers/categorySlice";

const ButtonPanel: React.FC = (): JSX.Element => {
  const { isAddingCategory, isChangeName, isActiveChange } = useAppSelector(
    (state) => state.categoryState
  );
  const categories = useAppSelector((state) => state.category.fakeCategories);
  const dispatch = useAppDispatch();

  const acceptCategoryAndCloseChanging: Function = (): void => {
    dispatch(updateCategory());
    dispatch(setIsChangeName(false));
    dispatch(setIsActiveChange(false));
  };
  const addingCategory: Function = (): void => {
    dispatch(setIsAddingCategory(true));
    dispatch(setCharLeft(20));
    dispatch(resetActiveCategory());
  };
  const preventActiveCategoryOnActivateChange: Function = (): void => {
    dispatch(setActiveCategory(1));
    dispatch(setIsActiveChange(true));
  };

  return (
    <>
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
                  onClick={() => {
                    dispatch(setAllActiveCategory(categories));
                  }}
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
    </>
  );
};

export default ButtonPanel;
