import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import RenderUlCategories from "./RenderUlCategory";
import cardImg from "../../../img/cardImg.jpg";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {
    setActiveCategory,
    setCharLeft,
    setIsActiveChange,
    setIsAddingCategory, setIsAllActiveCategory,
    setIsChangeName
} from "../../../store/reducers/categoryStateSlice";
import {updateCategory} from "../../../store/reducers/categorySlice";

const SectionOfChoosing = (): JSX.Element => {
    const arrCategories = useAppSelector(state => state.category.fakeCategories);
    const {
        isAddingCategory,
        isChangeName,
        isActiveChange,
        isAllActiveCategory,
    } = useAppSelector(state => state.categoryState)
    const dispatch = useAppDispatch();

    return (
        <section>
            {isActiveChange && <div className='display editing'>Categories editing</div>}
            <div className={isActiveChange ? 'categories editing2' : 'categories'}>
                <h4>Categories</h4>
                <ul>
                    {!isActiveChange ? (
                            <li>
                                <button onClick={() => {
                                    dispatch(setActiveCategory(1));
                                    dispatch(setIsActiveChange(true));
                                }}>
                                    <FontAwesomeIcon icon={'pencil'} className='fa-lg'/></button>
                            </li>
                        ) :
                        (<>
                                <li>
                                    <button disabled={isAddingCategory || isChangeName}
                                            className='buttonBlack buttonAll'
                                            onClick={() => dispatch(setIsAllActiveCategory(!isAllActiveCategory))}
                                    >
                                        All
                                    </button>
                                </li>
                                <li>
                                    <button disabled={isAddingCategory || isChangeName}
                                            onClick={() => {
                                                dispatch(setIsAddingCategory(true));
                                                dispatch(setCharLeft(20));
                                            }}
                                    >
                                        <FontAwesomeIcon icon={'plus'}
                                                         className='fa-lg'/>
                                    </button>
                                </li>
                                <li>
                                    <button disabled={isAddingCategory || isChangeName}
                                            className='purple'
                                            onClick={() => {
                                                dispatch(updateCategory());
                                                dispatch(setIsChangeName(false));
                                                dispatch(setIsActiveChange(false));
                                            }}>
                                        <FontAwesomeIcon icon={'check'}
                                                         className='fa-lg'/>
                                    </button>
                                </li>
                            </>
                        )}
                    <li>
                        <button className='buttonBlack' disabled={isAddingCategory || isChangeName}>
                            <FontAwesomeIcon icon={'info'} className='fa-xl'/>
                        </button>
                    </li>
                </ul>
            </div>
            {arrCategories && <RenderUlCategories/>}
            {isActiveChange &&
            <section className='sectionView'>
              <h6>category_1</h6>
              <div>
                <img src={cardImg} alt=""/>
                <p>Lorem ipsum dolor sit amet,</p>
                <button><FontAwesomeIcon icon='bars' className='fa-xl'/></button>
              </div>
            </section>
            }
        </section>
    )
}

export default SectionOfChoosing;