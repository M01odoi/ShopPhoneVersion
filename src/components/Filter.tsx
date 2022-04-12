import './filter.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import category from "../api/category";
import {ICategory} from "../interfaces/ICategory";
import {setCategory} from "../store/reducers/categorySlice";

const Filter = (props: { setActive: Function }) => {
    const dispatch = useAppDispatch();
    category.then((value: ICategory[]) => {
        dispatch(setCategory(value));
    });
    const state = useAppSelector(state => state.category);


    const [activeChange, setActiveChange] = useState(false);
    const [activeCategory, setActiveCategory] = useState(0);
    return (<>
            <div className='filterHeader'>
                <button onClick={() => {
                    props.setActive(false);
                    setActiveChange(false);
                }}>
                    <FontAwesomeIcon icon={'arrow-left'} className='fa-2x'/>
                </button>
                <h1>Filter</h1>
            </div>
            {activeChange && <div className='display editing'>Categories editing</div>}
            <div className={activeChange ? 'categories editing2' : 'categories'}>
                <div>Categories</div>
                {!activeChange && <button onClick={() => {
                    setActiveCategory(1);
                    setActiveChange(true)
                }}>
                  <FontAwesomeIcon icon={'pencil'} className='fa-lg'/></button>}
                {
                    activeChange && <>
                      <button className='buttonBlack'>All</button>
                      <button><FontAwesomeIcon icon={'plus'}
                                               className='fa-lg'/>
                      </button>
                      <button onClick={() => {
                          setActiveChange(false)
                      }} className=' purple'><FontAwesomeIcon icon={'check'}
                                                              className='fa-lg'/>
                      </button>
                    </>
                }
                <button><FontAwesomeIcon icon={'info'} className='fa-xl'/></button>
            </div>
            <div className='categoriesChoose'>
                <button className={activeChange ? 'displayNone' : 'display'}>All</button>
                <button onClick={() => setActiveCategory(1)}><span
                    className={activeChange ? 'display' : 'displayNone'}>1</span> category_1
                </button>
                <button className={activeChange ? 'display buttonBlackWhite' : 'displayNone'}>
                    <FontAwesomeIcon icon={'pencil'} className='fa-lg'/></button>
                <button className={activeChange ? 'display buttonBlackWhite' : 'displayNone'}>
                    <FontAwesomeIcon icon={'trash'} className='fa-lg'/></button>
                <button onClick={() => setActiveCategory(2)}>category_2</button>
                <button onClick={() => setActiveCategory(3)}>Uncategorised</button>
            </div>

        </>
    )
}

export default Filter;