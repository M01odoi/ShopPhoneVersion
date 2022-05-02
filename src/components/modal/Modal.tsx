import "./modal.scss";
import Filter from "../filter/Filter";
import React from "react";

const Modal: React.FC = (): JSX.Element => {
  return (
    <div className="modal-content">
      <Filter />
    </div>
  );
};

export default Modal;
