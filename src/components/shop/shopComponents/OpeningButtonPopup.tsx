import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setIsShowModal } from "../../../store/reducers/categoryStateSlice";
import Filter from "../../filter/Filter";

const OpeningButtonPopup: React.FC = (): JSX.Element => {
  const { isShowModal } = useAppSelector((state) => state.categoryState);
  const dispatch = useAppDispatch();

  return (
    <>
      <button
        className="button-open-modal"
        onClick={() => dispatch(setIsShowModal(true))}
      >
        <FontAwesomeIcon icon="sliders-h" className="fa-xl" />
      </button>
      {isShowModal && <Filter />}
    </>
  );
};

export default OpeningButtonPopup;
