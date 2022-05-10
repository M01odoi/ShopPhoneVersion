import React, { ChangeEventHandler } from "react";

interface Props {
  newName: string;
  ref: React.LegacyRef<HTMLInputElement>;
  charLeft: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  isValid?: boolean;
}

const AddOrChangeCategoryInput: React.FC<Props> = ({
  newName,
  ref,
  charLeft,
  onChange,
  isValid = true,
}): JSX.Element => {
  return (
    <div className="flex-column">
      <input
        type="text"
        value={newName}
        size={10}
        maxLength={20}
        ref={ref}
        className="purple-border"
        onChange={onChange}
      />
      <span className={isValid ? "char-left" : "incorrectName"}>
        {isValid ? `${charLeft - newName.length} char left` : "Incorrect name"}
      </span>
    </div>
  );
};

export default AddOrChangeCategoryInput;
