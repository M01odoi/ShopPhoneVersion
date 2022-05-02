import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  setIsActiveChange,
  setIsAddingCategory,
  setIsAllActiveCategory,
  setIsChangeName,
} from "../../../store/reducers/categoryStateSlice";
import { updateFakeCategory } from "../../../store/reducers/categorySlice";

interface Props {
  setActive: Function;
}

const FilterHeader: React.FC<Props> = ({ setActive }): JSX.Element => {
  const dispatch = useAppDispatch();
  const { isActiveChange } = useAppSelector((state) => state.categoryState);

  const notEdit: Function = (): void => {
    dispatch(updateFakeCategory());
    dispatch(setIsActiveChange(false));
    dispatch(setIsAddingCategory(false));
    dispatch(setIsChangeName(false));
    dispatch(setIsAllActiveCategory(false));
  };

  return (
    <div className="filterHeader">
      <button
        onClick={() => (isActiveChange ? notEdit() : setActive(false))}
        className={isActiveChange ? "purpleColor buttonBack" : "buttonBack"}
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

export default FilterHeader;
