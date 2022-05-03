import "./modal.scss";
import React from "react";

interface Props {
  children: object;
}

const Modal: React.FC<Props> = ({ children }): JSX.Element => {
  return <div className="modal-content">{children}</div>;
};

export default Modal;
