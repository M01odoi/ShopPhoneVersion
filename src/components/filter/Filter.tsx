import './filter.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {createContext, useContext, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {addNewCategory, deleteCategory, editCategory, setCategory} from "../../store/reducers/categorySlice";
import cardImg from '../../img/cardImg.jpg';
import category from "../../api/category";
import {ICategory} from "../../interfaces/ICategory";

interface Props {
    setActive: Function
}

const Filter: React.FC<Props> = ({setActive}): JSX.Element => {
    const [isActiveChange, setIsActiveChange] = useState(false);
    const [activeCategory, setActiveCategory] = useState(0);
    const [isAddingCategory, setIsAddingCategory] = useState(false);
    const [newCategory, setNewCategory] = useState('New Category');
    const [isChangeName, setIsChangeName] = useState(false);
    const [newName, setNewName] = useState('');
    const [charLeft, setCharLeft] = useState(20);

    const filterCtxDefaultValue = {
        isActiveChange, setIsActiveChange,
        activeCategory, setActiveCategory,
        isAddingCategory, setIsAddingCategory,
        newCategory, setNewCategory,
        isChangeName, setIsChangeName,
        newName, setNewName,
        charLeft, setCharLeft

    }
    const FilterContext = createContext(filterCtxDefaultValue);

    const dispatch = useAppDispatch();
    useEffect(() => {
        category.then((value: ICategory[]) => {
            console.log('setCategory');
            dispatch(setCategory(value));
        });
    }, []);
    const arrCategories = useAppSelector(state => state.category.categories);
    const renderLiCategory = (id: number): JSX.Element => {
        return (
            // <FilterContext.Provider value={filterCtxDefaultValue}>
            //
            // </FilterContext.Provider>
            <li>

                {arrCategories &&
                (isChangeName && activeCategory === id ? (
                        activeCategory === id && (
                            <input
                                type="text"
                                size={10}
                                maxLength={20}
                                onChange={(e) => setNewName(e.target.value)}
                                value={newName}
                            />
                        )
                    ) : (
                        <button
                            className={
                                activeCategory === id && isActiveChange && !isAddingCategory ? 'purpleBorder' : ''
                            }
                            onClick={() => setActiveCategory(id)}
                        >
                            {activeCategory === id && activeCategory && <span>{id}</span>}
                            {' ' + arrCategories[id - 1].name}
                        </button>
                    )
                )}
                {
                    isActiveChange && activeCategory === id &&
                    <>
                        {!isChangeName ? (
                            <>
                                <button
                                    onClick={() => {
                                        arrCategories && setNewName(arrCategories[id - 1].name);
                                        // TODO
                                        setIsChangeName(true);
                                    }}
                                    disabled={isAddingCategory} className=' buttonBlackWhite'>
                                    <FontAwesomeIcon icon={'pencil'} className='fa-lg'/>
                                </button>
                                <button
                                    onClick={() => {
                                        dispatch(deleteCategory(activeCategory));
                                        setActiveCategory(1);
                                    }}
                                    disabled={isAddingCategory} className='buttonBlackWhite'>
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
                                        setIsChangeName(false);
                                    }}>
                                    <FontAwesomeIcon icon={'check'}
                                                     className=' fa-lg'/>
                                </button>
                                <button
                                    className='buttonBlackWhite'
                                    onClick={() => {
                                        setNewName('');
                                        setIsChangeName(false)
                                    }}>
                                    <FontAwesomeIcon icon={'x'} className='fa-lg'/>
                                </button>
                            </>
                        )}
                    </>
                }
            </li>
        )
    }

    const renderUlCategories = (): JSX.Element => {
        let arr: JSX.Element[] = [];
        arrCategories && arrCategories.forEach((elem) => arr.push(renderLiCategory(elem.id)))

        return (
            <ul className='categoriesChoose'>
                {!isActiveChange && <li>
                  <button className='purple'>All</button>
                </li>}
                {isAddingCategory &&
                <li>
                  <div className='flexColumn'><input className='purpleBorder' defaultValue='New Category' type="text"
                                                     onChange={(e) => {
                                                         setNewCategory(e.target.value);
                                                     }}/>
                    <span>{charLeft - newCategory.length >= 0 ? `${charLeft - newCategory.length} char left` : 'Too mach'}</span>
                  </div>
                  <button onClick={() => {
                      dispatch(addNewCategory(newCategory));
                      setIsAddingCategory(false);
                  }} className={'buttonBlackWhite purple'}><FontAwesomeIcon icon={'check'}
                                                                            className='fa-lg'/></button>
                  <button onClick={() => setIsAddingCategory(false)} className={'buttonBlackWhite'}>
                    <FontAwesomeIcon icon={'x'} className='fa-lg'/>
                  </button>
                </li>}
                {arr}
            </ul>
        )
    }


    return (
        <>
            <div className='filterHeader'>
                <button
                    onClick={() => {
                        isActiveChange ? setIsActiveChange(false) : setActive(false);
                    }}
                    className={isActiveChange ? 'purpleColor buttonBack' : 'buttonBack'}
                >
                    <FontAwesomeIcon
                        icon={isActiveChange ? 'x' : 'arrow-left'}
                        className={isActiveChange ? 'fa-lg' : 'fa-2x'}/>
                </button>
                <h1>Filter</h1>
            </div>
            <section>
                {/*TODO вынести секцию в отдельный компонент*/}
                {isActiveChange && <div className='display editing'>Categories editing</div>}
                <div className={isActiveChange ? 'categories editing2' : 'categories'}>
                    <h4>Categories</h4>
                    {!isActiveChange && <button onClick={() => {
                        setActiveCategory(1);
                        setIsActiveChange(true)
                    }}>
                      <FontAwesomeIcon icon={'pencil'} className='fa-lg'/></button>}
                    {
                        isActiveChange && <>
                          <button disabled={isAddingCategory || isChangeName} className='buttonBlack'>All
                          </button>
                          <button disabled={isAddingCategory || isChangeName} onClick={() => {
                              setIsAddingCategory(true);
                              setCharLeft(20);
                          }
                          }><FontAwesomeIcon icon={'plus'}
                                             className='fa-lg'/>
                          </button>
                          <button onClick={() => {
                              setIsChangeName(false);
                              setIsActiveChange(false);
                          }} disabled={isAddingCategory || isChangeName} className='purple'>
                            <FontAwesomeIcon icon={'check'}
                                             className='fa-lg'/>
                          </button>
                        </>
                    }
                    <button disabled={isAddingCategory || isChangeName}><FontAwesomeIcon icon={'info'}
                                                                                         className='fa-xl'/>
                    </button>
                </div>
                {arrCategories && renderUlCategories()}
                {isActiveChange && <section className='sectionView'>
                  <h6>category_1</h6>
                  <div>
                    <img src={cardImg} alt=""/>
                    <p>Lorem ipsum dolor sit amet,</p>
                    <button><FontAwesomeIcon icon='bars' className='fa-xl'/></button>
                  </div>
                </section>}
            </section>
        </>
    )
}

export default Filter;