import {editCategory} from "../../../store/reducers/categorySlice";
import {setIsChangeName, setNewName} from "../../../store/reducers/categoryStateSlice";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

interface Props {
    id: number,
    dispatch: Function,
    newName: string,
}

const EditDeleteCategoryButtons: React.FC<Props> = ({id,dispatch,newName}): JSX.Element => {
    // const dispatch = useAppDispatch();
    // console.log(typeof dispatch);
    // const {
    //     newName,
    // } = useAppSelector(state => state.categoryState)

    return (
        <>
            <button
                className='purple buttonBlackWhite'
                onClick={() => {
                    console.log(id,newName);
                    dispatch(editCategory({id, newName}));
                    dispatch(setNewName(''));
                    dispatch(setIsChangeName(false));
                }}
            >
                <FontAwesomeIcon icon={'check'}
                                 className=' fa-lg'/>
            </button>
            <button
                className='buttonBlackWhite'
                onClick={() => {
                    dispatch(setNewName(''));
                    dispatch(setIsChangeName(false));
                }}>
                <FontAwesomeIcon icon={'x'} className='fa-lg'/>
            </button>
        </>
    )
}

export default EditDeleteCategoryButtons;