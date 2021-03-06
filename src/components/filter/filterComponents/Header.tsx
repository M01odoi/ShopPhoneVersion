import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  resetActiveCategory,
  setIsActiveChange,
  setIsAddingCategory,
  setIsChangeName,
  setIsShowModal,
} from "../../../store/reducers/categoryStateSlice";
import { updateFakeCategory } from "../../../store/reducers/categorySlice";

const Header: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { isActiveChange } = useAppSelector((state) => state.categoryState);

  const notEdit: Function = (): void => {
    dispatch(updateFakeCategory());
    dispatch(setIsActiveChange(false));
    dispatch(setIsAddingCategory(false));
    dispatch(setIsChangeName(false));
    dispatch(resetActiveCategory());
  };

  return (
    <div className="filter-header">
      <button
        onClick={() =>
          isActiveChange ? notEdit() : dispatch(setIsShowModal(false))
        }
        className={isActiveChange ? "purple-color" : ""}
      >
        <FontAwesomeIcon
          icon={isActiveChange ? "x" : "arrow-left"}
          className={isActiveChange ? "fa-lg" : "fa-2x"}
        />
      </button>
      <h1>Filter</h1>
    </div>
  );
};

export default Header;
