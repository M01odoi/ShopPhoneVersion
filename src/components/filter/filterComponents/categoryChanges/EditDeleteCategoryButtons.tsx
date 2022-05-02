import { deleteCategory } from "../../../../store/reducers/categorySlice";
import {
  setActiveCategory,
  setCharLeft,
  setIsChangeName,
  setNewName,
} from "../../../../store/reducers/categoryStateSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ICategory } from "../../../../interfaces/ICategory";

interface Props {
  id: number;
  dispatch: Function;
  arrCategories: ICategory[] | null;
  isAddingCategory: boolean;
}

const EditDeleteCategoryButtons: React.FC<Props> = ({
  id,
  dispatch,
  arrCategories,
  isAddingCategory,
}): JSX.Element => {
  const editNameOfCategory: React.MouseEventHandler<
    HTMLButtonElement
  > = (): void => {
    arrCategories &&
      dispatch(
        setNewName(arrCategories.filter((elem) => elem.id === id)[0].name)
      );
    dispatch(setIsChangeName(true));
    dispatch(setCharLeft(20));
    dispatch(setActiveCategory(id));
  };
  const deleteOneCategory: React.MouseEventHandler<
    HTMLButtonElement
  > = (): void => {
    dispatch(deleteCategory(id));
    dispatch(setActiveCategory(1));
  };

  return (
    <>
      <button
        onClick={editNameOfCategory}
        disabled={isAddingCategory}
        className=" button-black-white"
      >
        <FontAwesomeIcon icon="pencil" className="fa-lg" />
      </button>
      <button
        onClick={deleteOneCategory}
        disabled={isAddingCategory}
        className="button-black-white"
      >
        <FontAwesomeIcon icon="trash" className="fa-lg" />
      </button>
    </>
  );
};

export default EditDeleteCategoryButtons;
