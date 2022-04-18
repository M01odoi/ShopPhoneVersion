import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import cardImg from "../../../img/cardImg.jpg";
import React from "react";

interface Props {
    isActiveChange: boolean,
    setActiveCategory: Function,
    setIsActiveChange: Function,
    isAddingCategory: boolean,
    isChangeName: boolean,
    setIsAddingCategory: Function,
    setCharLeft: Function,
    setIsChangeName: Function,
    arrCategories: JSX.Element[],
    renderUlCategories: Function,
}

const Categories: React.FC<Props> = ({
                                         isActiveChange,
                                         setActiveCategory,
                                         setIsActiveChange,
                                         isAddingCategory,
                                         isChangeName,
                                         setIsAddingCategory,
                                         setCharLeft,
                                         setIsChangeName,
                                         arrCategories,
                                         renderUlCategories,
                                     }) => {
    return (
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
    )
}

export default {};