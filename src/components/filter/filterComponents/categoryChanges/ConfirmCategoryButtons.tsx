import React from "react";
import { editCategory } from "../../../../store/reducers/categorySlice";
import {
  setIsChangeName,
  setNewName,
} from "../../../../store/reducers/categoryStateSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  id: number;
  dispatch: Function;
  newName: string;
}

const ConfirmCategoryButtons: React.FC<Props> = ({
  id,
  dispatch,
  newName,
}): JSX.Element => {
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

  return (
    <>
      <button
        onClick={editCategoryAndCloseChangeName}
        className="purple button-black-white"
      >
        <FontAwesomeIcon icon="check" className=" fa-lg" />
      </button>
      <button
        onClick={notEditCategoryAndCloseChangeName}
        className="button-black-white"
      >
        <FontAwesomeIcon icon="x" className="fa-lg" />
      </button>
    </>
  );
};

export default ConfirmCategoryButtons;
