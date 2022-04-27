import {deleteCategory} from "../../../../store/reducers/categorySlice";
import {
    setActiveCategory,
    setCharLeft,
    setIsChangeName,
    setNewName
} from "../../../../store/reducers/categoryStateSlice";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {ICategory} from "../../../../interfaces/ICategory";

interface Props {
    id: number,
    dispatch: Function,
    arrCategories: ICategory[] | null,
    isAddingCategory: boolean,
}

const EditDeleteCategoryButtons: React.FC<Props> =
    ({id, dispatch, arrCategories, isAddingCategory}): JSX.Element => {
        return (
            <>
                <button
                    onClick={() => {
                        arrCategories &&
                        dispatch(setNewName((arrCategories.filter((elem) => elem.id === id))[0].name));
                        dispatch(setIsChangeName(true));
                        dispatch(setCharLeft(20));
                        dispatch(setActiveCategory(id));
                    }}
                    disabled={isAddingCategory} className=' buttonBlackWhite'
                >
                    <FontAwesomeIcon icon={'pencil'} className='fa-lg'/>
                </button>
                <button
                    onClick={() => {
                        dispatch(deleteCategory(id));
                        dispatch(setActiveCategory(1));
                    }}
                    disabled={isAddingCategory} className='buttonBlackWhite'
                >
                    <FontAwesomeIcon icon={'trash'} className='fa-lg'/>
                </button>
            </>
        )
    }

export default EditDeleteCategoryButtons;