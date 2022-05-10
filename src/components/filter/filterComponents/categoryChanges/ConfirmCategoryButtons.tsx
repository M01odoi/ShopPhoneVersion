import React, { MouseEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  onConfirmClick: MouseEventHandler<HTMLButtonElement>;
  onRefuseClick: MouseEventHandler<HTMLButtonElement>;
}

const ConfirmCategoryButtons: React.FC<Props> = ({
  onConfirmClick,
  onRefuseClick,
}): JSX.Element => {
  return (
    <>
      <button onClick={onConfirmClick} className="purple button-black-white">
        <FontAwesomeIcon icon="check" className=" fa-lg" />
      </button>
      <button onClick={onRefuseClick} className="button-black-white">
        <FontAwesomeIcon icon="x" className="fa-lg" />
      </button>
    </>
  );
};

export default ConfirmCategoryButtons;
