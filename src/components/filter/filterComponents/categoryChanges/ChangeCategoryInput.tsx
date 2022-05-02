import React from "react";
import { setNewName } from "../../../../store/reducers/categoryStateSlice";

interface Props {
  newName: string;
  dispatch: Function;
  ref: React.LegacyRef<HTMLInputElement>;
  charLeft: number;
}

const ChangeCategoryInput: React.FC<Props> = ({
  newName,
  dispatch,
  ref,
  charLeft,
}): JSX.Element => {
  return (
    <div className="flex-column">
      <input
        type="text"
        size={10}
        maxLength={20}
        ref={ref}
        onChange={(e) => dispatch(setNewName(e.target.value))}
        value={newName}
      />
      <span className="char-left">
        {charLeft - newName.length >= 0
          ? `${charLeft - newName.length} char left`
          : "Too mach"}
      </span>
    </div>
  );
};

export default ChangeCategoryInput;
