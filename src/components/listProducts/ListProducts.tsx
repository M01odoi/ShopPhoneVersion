import React, { useEffect } from "react";
import StackGrid from "react-stack-grid";
import products from "../../api/products";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setNewProduct } from "../../store/reducers/productSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IProduct } from "../../interfaces/IProduct";
import "./listProducts.scss";

const ListProducts: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const arrProducts = useAppSelector((state) => state.products);

  useEffect(() => {
    products.then((value: IProduct[]) => {
      dispatch(setNewProduct(value));
    });
  }, []);

  const renderCards: Function = (): JSX.Element[] => {
    return arrProducts?.map((arr: IProduct) => (
      <section className="ticket" key={arr.id}>
        <div className="img">
          <img src={arr.img} alt="" />
        </div>
        <h4>{arr.name}</h4>
        <p>
          {arr.cost}
          <span className="item"> {" " + arr.per}</span>
        </p>
      </section>
    ));
  };

  return (
    <section className="list-of-cards">
      <StackGrid columnWidth={170} gutterHeight={5}>
        {renderCards()}
        <button className="ticket last-card">
          <FontAwesomeIcon icon={"plus-circle"} className="fa-3x" />
          <p>
            Tap to add <br /> a new item
          </p>
        </button>
      </StackGrid>
    </section>
  );
};

export default ListProducts;
