import React, { ChangeEvent, ChangeEventHandler, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import {
  setActiveCategory,
  setIsChangeName,
  setNewName,
} from "../../../../store/reducers/categoryStateSlice";
import EditDeleteCategoryButtons from "../categoryChanges/EditDeleteCategoryButtons";
import ConfirmCategoryButtons from "../categoryChanges/ConfirmCategoryButtons";
import AddOrChangeCategoryInput from "../categoryChanges/AddOrChangeCategoryInput";
import { editCategory } from "../../../../store/reducers/categorySlice";

interface Props {
  id: number;
  name: string;
  index: number;
}

const RenderLiCategory: React.FC<Props> = ({
  id,
  name,
  index,
}): JSX.Element => {
  const arrCategories = useAppSelector(
    (state) => state.category.fakeCategories
  );
  const {
    activeCategory,
    isAddingCategory,
    isChangeName,
    isActiveChange,
    charLeft,
    isAllActiveCategory,
    newName,
  } = useAppSelector((state) => state.categoryState);
  const dispatch = useAppDispatch();
  const ref = React.useRef<HTMLInputElement | null>(null);
  const isSelectAllCategory: boolean | null =
    isAllActiveCategory &&
    arrCategories &&
    arrCategories[arrCategories.length - 1].id !== id;

  const onChangeChangingName: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    dispatch(setNewName(e.target.value));
  };
  const editCategoryAndCloseChangeName: React.MouseEventHandler<
    HTMLButtonElement
  > = (): void => {
    dispatch(editCategory({ id, newName }));
    dispatch(setNewName(""));
    dispatch(setIsChangeName(false));
  };
  const notEditCategoryAndCloseChangeName: React.MouseEventHandler<
    HTMLButtonElement
  > = (): void => {
    dispatch(setNewName(""));
    dispatch(setIsChangeName(false));
  };

  useEffect(() => {
    ref.current?.select();
  }, [isChangeName]);

  return (
    <li>
      {arrCategories &&
        (isChangeName && activeCategory === id ? (
          AddOrChangeCategoryInput({
            newName,
            onChange: onChangeChangingName,
            charLeft,
            ref,
          })
        ) : (
          <button
            className={
              (activeCategory === id && isActiveChange && !isAddingCategory) ||
              isSelectAllCategory
                ? "purple-border disabled-but-not-opacity"
                : "disabled-but-not-opacity"
            }
            onClick={() =>
              !(
                isAllActiveCategory &&
                id === arrCategories[arrCategories.length - 1].id
              ) && dispatch(setActiveCategory(id))
            }
            disabled={isChangeName}
          >
            {((activeCategory === id && isActiveChange) ||
              isSelectAllCategory) && <span>{index + 1}</span>}
            {" " + name}
          </button>
        ))}
      {(isAllActiveCategory || (isActiveChange && activeCategory === id)) &&
        arrCategories &&
        arrCategories[arrCategories.length - 1].id !== id && (
          <>
            {isChangeName && activeCategory === id
              ? ConfirmCategoryButtons({
                  onConfirmClick: editCategoryAndCloseChangeName,
                  onRefuseClick: notEditCategoryAndCloseChangeName,
                })
              : EditDeleteCategoryButtons({
                  id,
                  dispatch,
                  arrCategories,
                  isAddingCategory,
                  isChangeName,
                })}
          </>
        )}
    </li>
  );
};

export default RenderLiCategory;
