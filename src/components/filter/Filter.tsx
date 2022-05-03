import "./filter.scss";
import React, { useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { setCategory } from "../../store/reducers/categorySlice";
import category from "../../api/category";
import { ICategory } from "../../interfaces/ICategory";
import ButtonPanel from "./filterComponents/ButtonPanel";
import Header from "./filterComponents/Header";
import Modal from "../modal/Modal";
import ListCategories from "./filterComponents/ListCategories";

const Filter: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    category.then((value: ICategory[]) => {
      dispatch(setCategory(value));
    });
  }, []);

  return (
    <>
      <Modal>
        <Header />
        <section>
          <ButtonPanel />
          <ListCategories />
        </section>
      </Modal>
    </>
  );
};

export default Filter;
