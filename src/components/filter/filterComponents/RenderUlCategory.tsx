import {addNewCategory} from "../../../store/reducers/categorySlice";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
    arrCategories: JSX.Element[],
    isActiveChange: boolean,
    setNewCategory: Function,
}
//
// const renderUlCategories: React.FC<Props> = ({
//                                                  arrCategories,isActiveChange,setNewCategory
//                                              }): JSX.Element => {
//     let arr: JSX.Element[] = [];
//     arrCategories && arrCategories.forEach((elem) => arr.push(renderLiCategory(elem.id)))
//
//     return (
//         <ul className='categoriesChoose'>
//             {!isActiveChange && <li>
//               <button className='purple'>All</button>
//             </li>}
//             {isAddingCategory &&
//             <li>
//               <div className='flexColumn'><input className='purpleBorder' defaultValue='New Category' type="text"
//                                                  onChange={(e) => {
//                                                      setNewCategory(e.target.value);
//                                                  }}/>
//                 <span>{charLeft - newCategory.length >= 0 ? `${charLeft - newCategory.length} char left` : 'Too mach'}</span>
//               </div>
//               <button onClick={() => {
//                   dispatch(addNewCategory(newCategory));
//                   setIsAddingCategory(false);
//               }} className={'buttonBlackWhite purple'}><FontAwesomeIcon icon={'check'}
//                                                                         className='fa-lg'/></button>
//               <button onClick={() => setIsAddingCategory(false)} className={'buttonBlackWhite'}>
//                 <FontAwesomeIcon icon={'x'} className='fa-lg'/>
//               </button>
//             </li>}
//             {arr}
//         </ul>
//     )
// }
export default {}