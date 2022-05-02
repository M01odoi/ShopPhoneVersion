import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Modal from "../../modal/Modal";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setIsShowModal } from "../../../store/reducers/categoryStateSlice";

const OpenModal: React.FC = (): JSX.Element => {
  const { isShowModal } = useAppSelector((state) => state.categoryState);
  const dispatch = useAppDispatch();

  return (
    <>
      {isShowModal ? (
        <Modal />
      ) : (
        <button
          className="button-open-modal"
          onClick={() => dispatch(setIsShowModal(true))}
        >
          <FontAwesomeIcon icon="sliders-h" className="fa-xl" />
        </button>
      )}
    </>
  );
};

export default OpenModal;
