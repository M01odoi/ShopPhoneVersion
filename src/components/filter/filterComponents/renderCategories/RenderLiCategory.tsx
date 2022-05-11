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
    newName,
  } = useAppSelector((state) => state.categoryState);
  const dispatch = useAppDispatch();
  const ref = React.useRef<HTMLInputElement | null>(null);

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
        (isChangeName && activeCategory.find((elem) => elem === id) ? (
          AddOrChangeCategoryInput({
            newName,
            onChange: onChangeChangingName,
            charLeft,
            ref,
          })
        ) : (
          <button
            className={
              activeCategory.find((elem) => elem === id) &&
              isActiveChange &&
              !isAddingCategory
                ? "purple-border disabled-but-not-opacity"
                : "disabled-but-not-opacity"
            }
            onClick={() => dispatch(setActiveCategory(id))}
            disabled={isChangeName}
          >
            {activeCategory.find((elem) => elem === id) && isActiveChange && (
              <span>{index + 1}</span>
            )}
            {" " + name}
          </button>
        ))}
      {isActiveChange &&
        activeCategory.find((elem) => elem === id) &&
        arrCategories &&
        arrCategories[arrCategories.length - 1].id !== id && (
          <>
            {isChangeName && activeCategory.find((elem) => elem === id)
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
