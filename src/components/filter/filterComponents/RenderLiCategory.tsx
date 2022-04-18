// const RenderLiCategory = () => {
  //   const filter = useContext(filterCtxDefaultValue)
  // return(
  //     <li>
  //
  //         {arrCategories &&
  //         (isChangeName && activeCategory === id ? (
  //                 activeCategory === id && (
  //                     <input
  //                         type="text"
  //                         size={10}
  //                         maxLength={20}
  //                         onChange={(e) => setNewName(e.target.value)}
  //                         value={newName}
  //                     />
  //                 )
  //             ) : (
  //                 <button
  //                     className={
  //                         activeCategory === id && isActiveChange && !isAddingCategory ? 'purpleBorder' : ''
  //                     }
  //                     onClick={() => setActiveCategory(id)}
  //                 >
  //                     {activeCategory === id && activeCategory && <span>{id}</span>}
  //                     {' ' + arrCategories[id - 1].name}
  //                 </button>
  //             )
  //         )}
  //         {
  //             isActiveChange && activeCategory === id &&
  //             <>
  //                 {!isChangeName ? (
  //                     <>
  //                         <button
  //                             onClick={() => {
  //                                 arrCategories && setNewName(arrCategories[id - 1].name);
  //                                 setIsChangeName(true);
  //                             }}
  //                             disabled={isAddingCategory} className=' buttonBlackWhite'>
  //                             <FontAwesomeIcon icon={'pencil'} className='fa-lg'/>
  //                         </button>
  //                         <button
  //                             onClick={() => {
  //                                 dispatch(deleteCategory(activeCategory));
  //                                 setActiveCategory(1);
  //                             }}
  //                             disabled={isAddingCategory} className='buttonBlackWhite'>
  //                             <FontAwesomeIcon icon={'trash'} className='fa-lg'/>
  //                         </button>
  //                     </>
  //                 ) : (
  //                     <>
  //                         <button
  //                             className='purple buttonBlackWhite'
  //                             onClick={() => {
  //                                 dispatch(editCategory({activeCategory, newName}));
  //                                 setNewName('');
  //                                 setIsChangeName(false);
  //                             }}>
  //                             <FontAwesomeIcon icon={'check'}
  //                                              className=' fa-lg'/>
  //                         </button>
  //                         <button
  //                             className='buttonBlackWhite'
  //                             onClick={() => {
  //                                 setNewName('');
  //                                 setIsChangeName(false)
  //                             }}>
  //                             <FontAwesomeIcon icon={'x'} className='fa-lg'/>
  //                         </button>
  //                     </>
  //                 )}
  //             </>
  //         }
  //     </li>
  // )
// }

export default {};