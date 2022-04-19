import {addNewCategory} from "../../../store/reducers/categorySlice";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useContext, useState} from "react";
import RenderLiCategory from './RenderLiCategory';
import FilterContext from "../FilterContext";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {setIsAddingCategory} from "../../../store/reducers/categoryStateSlice";

const RenderUlCategories = (): JSX.Element => {
    let arr: JSX.Element[] = [];
    const arrCategories = useAppSelector(state => state.category.categories);
    const dispatch = useAppDispatch();
    const [newCategory, setNewCategory] = useState('New Category');
    const {
        isAddingCategory,
        isActiveChange,
        charLeft
    } = useAppSelector(state => state.categoryState)

    arrCategories && arrCategories
        .forEach((elem, index) => arr.push(<RenderLiCategory id={elem.id} index={index}/>))

    return (
        <ul className='categoriesChoose'>
            {
                !isActiveChange &&
                <li>
                  <button className='purple'>All</button>
                </li>
            }
            {
                isAddingCategory &&
                <li>
                  <div className='flexColumn'>
                    <input
                      className='purpleBorder' value={newCategory}
                      type="text"
                      onChange={(e) => {
                          setNewCategory(e.target.value);
                      }}/>
                    <span className='charLeft'>
                    {charLeft - newCategory.length >= 0 ?
                        `${charLeft - newCategory.length} char left` :
                        'Too mach'}
                </span>
                  </div>
                  <button className={'buttonBlackWhite purple'}
                          onClick={() => {
                              dispatch(addNewCategory(newCategory));
                              setNewCategory('New Category');
                              dispatch(setIsAddingCategory(false));
                          }}
                  >
                    <FontAwesomeIcon icon={'check'} className='fa-lg'/>
                  </button>
                  <button onClick={() => dispatch(setIsAddingCategory(false))} className={'buttonBlackWhite'}>
                    <FontAwesomeIcon icon={'x'} className='fa-lg'/>
                  </button>
                </li>}
            {arr}
        </ul>
    )
}
export default RenderUlCategories;