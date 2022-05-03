import { IProduct } from "../../../interfaces/IProduct";
import React from "react";

interface Props {
  obj: IProduct;
}

const CreateProductCard: React.FC<Props> = ({ obj }): JSX.Element => {
  return (
    <section className="ticket" key={obj.id}>
      <div className="img">
        <img src={obj.img} alt="" />
      </div>
      <h4>{obj.name}</h4>
      <p>
        {obj.cost}
        <span className="item"> {" " + obj.per}</span>
      </p>
    </section>
  );
};

export default CreateProductCard;
