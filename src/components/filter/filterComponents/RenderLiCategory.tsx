import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {deleteCategory, editCategory} from "../../../store/reducers/categorySlice";
import {setActiveCategory, setCharLeft, setIsChangeName} from "../../../store/reducers/categoryStateSlice";

interface Props {
    id: number,
    index: number
}

const RenderLiCategory: React.FC<Props> = ({id, index}): JSX.Element => {
    const arrCategories = useAppSelector(state => state.category.categories);
    const {
        activeCategory,
        isAddingCategory,
        isChangeName,
        isActiveChange,
        charLeft
    } = useAppSelector(state => state.categoryState)
    const dispatch = useAppDispatch();
    const [newName, setNewName] = useState('');

    return (
        <li key={id}>

            {arrCategories &&
            (isChangeName && activeCategory === id ? (
                    activeCategory === id && (<div className='flexColumn'>
                            <input
                                type="text"
                                size={10}
                                maxLength={20}
                                onChange={(e) => setNewName(e.target.value)}
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
                isActiveChange && activeCategory === id &&
                <>
                    {
                        !isChangeName ? (
                            <>
                                <button
                                    onClick={() => {
                                        arrCategories &&
                                        setNewName((arrCategories.filter((elem) => elem.id === id))[0].name);
                                        dispatch(setIsChangeName(true));
                                        dispatch(setCharLeft(20));
                                    }}
                                    disabled={isAddingCategory} className=' buttonBlackWhite'
                                >
                                    <FontAwesomeIcon icon={'pencil'} className='fa-lg'/>
                                </button>
                                <button
                                    onClick={() => {
                                        dispatch(deleteCategory(activeCategory));
                                        dispatch(setActiveCategory(1));
                                    }}
                                    disabled={isAddingCategory} className='buttonBlackWhite'
                                >
                                    <FontAwesomeIcon icon={'trash'} className='fa-lg'/>
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    className='purple buttonBlackWhite'
                                    onClick={() => {
                                        dispatch(editCategory({activeCategory, newName}));
                                        setNewName('');
                                        dispatch(setIsChangeName(false));
                                    }}>
                                    <FontAwesomeIcon icon={'check'}
                                                     className=' fa-lg'/>
                                </button>
                                <button
                                    className='buttonBlackWhite'
                                    onClick={() => {
                                        setNewName('');
                                        dispatch(setIsChangeName(false));
                                    }}>
                                    <FontAwesomeIcon icon={'x'} className='fa-lg'/>
                                </button>
                            </>
                        )
                    }
                </>
            }
        </li>
    )
}

export default RenderLiCategory;