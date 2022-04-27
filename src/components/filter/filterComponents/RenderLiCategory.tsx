import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {deleteCategory, editCategory} from "../../../store/reducers/categorySlice";
import {setActiveCategory, setCharLeft, setIsChangeName, setNewName} from "../../../store/reducers/categoryStateSlice";
import EditDeleteCategoryButtons from "./EditDeleteCategoryButtons";

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
    // const [newName, setNewName] = useState('');
    const ref = React.useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        ref.current?.select();
    }, [isChangeName]);

    return (
        <li key={id}>
            {arrCategories &&
            (isChangeName && activeCategory === id ? (
                    activeCategory === id && (<div className='flexColumn'>
                            <input
                                type="text"
                                size={10}
                                maxLength={20}
                                ref={ref}
                                onChange={(e) => dispatch(setNewName(e.target.value))}
                                value={newName}
                            />
                            <span className='charLeft'>
                                {charLeft - newName.length >= 0 ?
                                    `${charLeft - newName.length} char left` :
                                    'Too mach'
                                }
                            </span>
                        </div>
                    )
                ) : (
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
                        !isChangeName ? (
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
                        ) : EditDeleteCategoryButtons({id, dispatch, newName})

                    }
                </>
            }
        </li>
    )
}

export default RenderLiCategory;