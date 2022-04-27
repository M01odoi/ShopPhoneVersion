import React from "react";
import {editCategory} from "../../../../store/reducers/categorySlice";
import {setIsChangeName, setNewName} from "../../../../store/reducers/categoryStateSlice";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface Props {
    id: number,
    dispatch: Function,
    newName: string,
}

const ConfirmCategoryButtons: React.FC<Props> = ({id, dispatch, newName}): JSX.Element => {

    return (
        <>
            <button
                className='purple buttonBlackWhite'
                onClick={() => {
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

export default ConfirmCategoryButtons;