import './filter.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import category from "../api/category";
import {ICategory} from "../interfaces/ICategory";
import {addNewCategory, deleteCategory, editCategory, setCategory} from "../store/reducers/categorySlice";
import cardImg from '../img/cardImg.jpg';


const Filter = (props: { setActive: Function }) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!state.categories) {
            category.then((value: ICategory[]) => {
                dispatch(setCategory(value));
            });
        }
    }, []);
    const state = useAppSelector(state => state.category);
    const renderLiCategory = (id: number): JSX.Element => {
        return (
            <li>
                {state.categories && (changeName && activeCategory === id ?
                    activeCategory === id &&
                  <input type="text" size={10} maxLength={20} onChange={(e) => setNewName(e.target.value)}
                         defaultValue={state.categories[id - 1].name}/> :
                    <button className={activeCategory === id ? 'purpleBorder' : ''}
                            onClick={() => setActiveCategory(id)}>
                        {activeCategory === id &&
                        <span className={activeChange ? 'display' : 'displayNone'}>{id}</span>}
                        {' ' + state.categories[id - 1].name}
                    </button>)}
                {
                    activeChange && activeCategory === id &&
                    <>
                        {!changeName ? <>
                            <button
                                onClick={() => setChangeName(true)}
                                disabled={addingCategory ? true : undefined} className=' buttonBlackWhite'>
                                <FontAwesomeIcon icon={'pencil'} className='fa-lg'/>
                            </button>
                            <button onClick={() => {
                                dispatch(deleteCategory(activeCategory));
                                setActiveChange(false);
                                setActiveCategory(1);
                            }}
                                    disabled={addingCategory ? true : undefined} className='buttonBlackWhite'>
                                <FontAwesomeIcon icon={'trash'} className='fa-lg'/>
                            </button>
                        </> : <>
                            <button className='purple buttonBlackWhite' onClick={() => {
                                dispatch(editCategory({activeCategory, newName}));
                                setActiveChange(false);
                                setChangeName(false);
                            }}><FontAwesomeIcon icon={'check'}
                                                className=' fa-lg'/></button>
                            <button className='buttonBlackWhite'
                                    onClick={() => {
                                        setActiveChange(false);
                                        setChangeName(false)
                                    }}>
                                <FontAwesomeIcon icon={'x'} className='fa-lg'/></button>
                        </>}
                    </>
                }
            </li>
        )
    }

    const renderUlCategories = (): JSX.Element => {
        let i: number = 1;
        let arr: JSX.Element[] = [];
        while (i <= state.categories!.length) {
            arr.push(renderLiCategory(i));
            i++;
        }
        return (
            <ul className='categoriesChoose'>
                {!activeChange && <li>
                  <button className='purple'>All</button>
                </li>}
                {addingCategory &&
                <li><input id='idInput' defaultValue='New Category' type="text"
                           onChange={(e) => setNewCategory(e.target.value)}/>
                  <button onClick={() => {
                      dispatch(addNewCategory(newCategory));
                      setAddingCategory(false);
                  }}><FontAwesomeIcon icon={'check'}
                                      className='fa-lg'/></button>
                  <button onClick={() => setAddingCategory(false)}><FontAwesomeIcon icon={'x'}
                                                                                    className='fa-lg'/></button>
                </li>}
                {arr}
            </ul>
        )
    }
    const [activeChange, setActiveChange] = useState(false);
    const [activeCategory, setActiveCategory] = useState(0);
    const [addingCategory, setAddingCategory] = useState(false);
    const [newCategory, setNewCategory] = useState('');
    const [changeName, setChangeName] = useState(false);
    const [newName, setNewName] = useState('');
    useEffect(() => {
        console.log(changeName, addingCategory)
    }, [changeName, addingCategory])

    return (<>
            <div className='filterHeader'>
                <button onClick={() => {
                    props.setActive(false);
                    setActiveChange(false);
                }} className={activeChange ? 'purpleColor buttonBack' : 'buttonBack'}>
                    <FontAwesomeIcon icon={activeChange ? 'x' : 'arrow-left'}
                                     className={activeChange ? 'fa-lg' : 'fa-2x'}/>
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
                      <button disabled={addingCategory || activeChange ? true : undefined} className='buttonBlack'>All
                      </button>
                      <button disabled={addingCategory || activeChange ? true : undefined} onClick={() => {
                          setAddingCategory(true);
                      }
                      }><FontAwesomeIcon icon={'plus'}
                                         className='fa-lg'/>
                      </button>
                      <button onClick={() => {
                          setChangeName(false);
                          setActiveChange(false);
                      }} className={(addingCategory || activeChange) ?'disabled purple':' purple'}><FontAwesomeIcon icon={'check'}
                                                             className='fa-lg'/>
                      </button>
                    </>
                }
                <button disabled={addingCategory || activeChange ? true : undefined}><FontAwesomeIcon icon={'info'}
                                                                                                      className='fa-xl'/>
                </button>
            </div>
            {state.categories && renderUlCategories()}
            {activeChange && <section className='sectionView'>
              <h6>category_1</h6>
              <div>
                <img src={cardImg} alt=""/>
                <p>Lorem ipsum dolor sit amet,</p>
                <button><FontAwesomeIcon icon='bars' className='fa-xl'/></button>
              </div>
            </section>}

        </>
    )
}

export default Filter;