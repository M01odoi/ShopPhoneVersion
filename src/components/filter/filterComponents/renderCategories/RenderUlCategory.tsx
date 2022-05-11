import { addNewCategory } from "../../../../store/reducers/categorySlice";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import RenderLiCategory from "./RenderLiCategory";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import {
  setActiveCategory,
  setIsAddingCategory,
  setIsValid,
} from "../../../../store/reducers/categoryStateSlice";
import isValidation from "../../isValidation";
import AddOrChangeCategoryInput from "../categoryChanges/AddOrChangeCategoryInput";
import ConfirmCategoryButtons from "../categoryChanges/ConfirmCategoryButtons";

const RenderUlCategories: React.FC = (): JSX.Element => {
  const arrCategories = useAppSelector(
    (state) => state.category.fakeCategories
  );
  const dispatch = useAppDispatch();
  const [newCategory, setNewCategory] = useState("New Category");
  const { isAddingCategory, isActiveChange, charLeft, isValid } =
    useAppSelector((state) => state.categoryState);
  const ref = React.useRef<HTMLInputElement | null>(null);

  const validationCategory: MouseEventHandler<HTMLButtonElement> = (): void => {
    if (isValidation(newCategory)) {
      dispatch(addNewCategory(newCategory));
      dispatch(setActiveCategory(1));
      setNewCategory("New Category");
      dispatch(setIsAddingCategory(false));
    } else {
      dispatch(setIsValid(false));
    }
  };

  const notConfirmAddingCategory: MouseEventHandler<
    HTMLButtonElement
  > = (): void => {
    dispatch(setActiveCategory(1));
    dispatch(setIsValid(true));
    dispatch(setIsAddingCategory(false));
    setNewCategory("New Category");
  };

  const onChangeAddingName: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    dispatch(setIsValid(true));
    setNewCategory(e.target.value);
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
          {AddOrChangeCategoryInput({
            newName: newCategory,
            ref,
            charLeft,
            isValid,
            onChange: onChangeAddingName,
          })}
          {ConfirmCategoryButtons({
            onConfirmClick: validationCategory,
            onRefuseClick: notConfirmAddingCategory,
          })}
        </li>
      )}
      {arrCategories?.map((elem, index) => (
        <RenderLiCategory
          id={elem.id}
          name={elem.name}
          index={index}
          key={index}
        />
      ))}
    </ul>
  );
};
export default RenderUlCategories;
