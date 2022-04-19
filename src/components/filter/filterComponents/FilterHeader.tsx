import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {setIsActiveChange} from "../../../store/reducers/categoryStateSlice";

interface Props {
    setActive: Function
}

const FilterHeader: React.FC<Props> = ({setActive}): JSX.Element => {

    const dispatch = useAppDispatch();
    const {
        isActiveChange,
    } = useAppSelector(state => state.categoryState)
    return (
        <div className='filterHeader'>
            <button
                onClick={() => {
                    isActiveChange ? dispatch(setIsActiveChange(false)) : setActive(false);
                }}
                className={isActiveChange ? 'purpleColor buttonBack' : 'buttonBack'}
            >
                <FontAwesomeIcon
                    icon={isActiveChange ? 'x' : 'arrow-left'}
                    className={isActiveChange ? 'fa-lg' : 'fa-2x'}/>
            </button>
            <h1>Filter</h1>
        </div>
    )
}

export default FilterHeader;