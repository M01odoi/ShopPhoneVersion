import React, { useEffect } from "react";
import StackGrid from "react-stack-grid";
import products from "../../api/products";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setNewProduct } from "../../store/reducers/productSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IProduct } from "../../interfaces/IProduct";
import "./listProducts.scss";
import CreateProductCard from "./listProductsComponents/CreateProductCard";

const ListProducts: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const arrProducts = useAppSelector((state) => state.products);

  useEffect(() => {
    products.then((value: IProduct[]) => {
      dispatch(setNewProduct(value));
    });
  }, []);

  return (
    <section className="list-of-cards">
      <StackGrid columnWidth={170} gutterHeight={5}>
        {arrProducts?.map((obj: IProduct) => (
          <CreateProductCard obj={obj} key={obj.id} />
        ))}
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
