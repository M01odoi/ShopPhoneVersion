import {setNewName} from "../../../../store/reducers/categoryStateSlice";
import React, {LegacyRef} from "react";

interface Props {
    newName: string,
    dispatch: Function,
    ref: LegacyRef<HTMLInputElement>,
    charLeft: number,
}

const ChangeCategoryInput: React.FC<Props> = ({newName, dispatch, ref, charLeft}) => {
    return (
        <div className='flexColumn'>
            <input
                type="text"
                size={10}
                maxLength={20}
                ref={ref}
                onChange={(e) => dispatch(setNewName(e.target.value))}
                value={newName}
            />
            <span className='charLeft'>
                {charLeft - newName.length >= 0 ? `${charLeft - newName.length} char left` : 'Too mach'}
            </span>
        </div>
    )
}

export default ChangeCategoryInput;