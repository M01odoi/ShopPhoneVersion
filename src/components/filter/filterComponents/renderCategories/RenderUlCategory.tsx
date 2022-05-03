import { addNewCategory } from "../../../../store/reducers/categorySlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import RenderLiCategory from "./RenderLiCategory";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import {
  setIsAddingCategory,
  setIsValid,
} from "../../../../store/reducers/categoryStateSlice";
import isValidation from "../../isValidation";

const RenderUlCategories: React.FC = (): JSX.Element => {
  const arrCategories = useAppSelector(
    (state) => state.category.fakeCategories
  );
  const dispatch = useAppDispatch();
  const [newCategory, setNewCategory] = useState("New Category");
  const { isAddingCategory, isActiveChange, charLeft, isValid } =
    useAppSelector((state) => state.categoryState);
  const ref = React.useRef<HTMLInputElement | null>(null);

  const validationCategory: Function = (): void => {
    if (isValidation(newCategory)) {
      dispatch(addNewCategory(newCategory));
      setNewCategory("New Category");
      dispatch(setIsAddingCategory(false));
    } else {
      dispatch(setIsValid(false));
    }
  };
  useEffect(() => {
    ref.current?.select();
  }, [isAddingCategory]);

  return (
    <ul className="categories-choose">
      {!isActiveChange && (
        <li>
          <button className="purple">All</button>
        </li>
      )}
      {isAddingCategory && (
        <li>
          <div className="flex-column">
            <input
              className="purple-border"
              value={newCategory}
              type="text"
              maxLength={20}
              ref={ref}
              onChange={(e) => {
                dispatch(setIsValid(true));
                setNewCategory(e.target.value);
              }}
            />
            <span className={isValid ? "char-left" : "incorrectName"}>
              {isValid
                ? charLeft - newCategory.length >= 0
                  ? `${charLeft - newCategory.length} char left`
                  : "Too mach"
                : "Incorrect name"}
            </span>
          </div>
          <button
            onClick={() => validationCategory()}
            className={"button-black-white purple"}
          >
            <FontAwesomeIcon icon="check" className="fa-lg" />
          </button>
          <button
            onClick={() => dispatch(setIsAddingCategory(false))}
            className={"button-black-white"}
          >
            <FontAwesomeIcon icon="x" className="fa-lg" />
          </button>
        </li>
      )}
      {arrCategories?.map((elem, index) => (
        <RenderLiCategory id={elem.id} index={index} key={index} />
      ))}
    </ul>
  );
};
export default RenderUlCategories;
