import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {setActiveCategory} from "../../../store/reducers/categoryStateSlice";
import EditDeleteCategoryButtons from "./categoryChanges/EditDeleteCategoryButtons";
import ConfirmCategoryButtons from "./categoryChanges/ConfirmCategoryButtons";
import ChangeCategoryInput from "./categoryChanges/ChangeCategoryInput";

interface Props {
    id: number,
    index: number
}

const RenderLiCategory: React.FC<Props> = ({id, index}): JSX.Element => {
    const arrCategories = useAppSelector(state => state.category.fakeCategories);
    const {
        activeCategory,
        isAddingCategory,
        isChangeName,
        isActiveChange,
        charLeft,
        isAllActiveCategory,
        newName,
    } = useAppSelector(state => state.categoryState)
    const dispatch = useAppDispatch();
    const ref = React.useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        ref.current?.select();
    }, [isChangeName]);

    return (
        <li key={id}>
            {arrCategories &&
            (isChangeName && activeCategory === id ?
                    ChangeCategoryInput({newName, dispatch, charLeft, ref})
                    : (
                        <button
                            className={
                                activeCategory === id && isActiveChange && !isAddingCategory ?
                                    'purpleBorder disabledButNotOpacity' : 'disabledButNotOpacity'
                            }
                            onClick={() => dispatch(setActiveCategory(id))}
                            disabled={isChangeName}
                        >
                            {activeCategory === id && activeCategory && isActiveChange && <span>{index + 1}</span>}
                            {' ' + arrCategories.filter(elem => elem.id === id)[0].name}
                        </button>
                    )
            )}
            {
                (isAllActiveCategory || (isActiveChange && activeCategory === id)) && (arrCategories &&
                    arrCategories[arrCategories.length - 1].id !== id) &&
                <>
                    {
                        !isChangeName ? EditDeleteCategoryButtons({id, dispatch, arrCategories, isAddingCategory})
                            : ConfirmCategoryButtons({id, dispatch, newName})

                    }
                </>
            }
        </li>
    )
}

export default RenderLiCategory;