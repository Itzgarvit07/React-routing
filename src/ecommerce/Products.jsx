import React, { useContext } from "react";
import { cartCount } from "./Main";

const Products = ({ productDetail }) => {
  const { cart, setCart } = useContext(cartCount);
  //   console.log(cart, setCart);
  const AddCount = (e, product) => {
    e.preventDefault();
    setCart([...cart, product]);
  };
  return (
    <div>
      <>
        <p>{productDetail.id}</p>
        <img src={productDetail.thumbnail} alt="" />
        <h4>{productDetail.title}</h4>
        <a href="" onClick={(e) => AddCount(e, productDetail)}>
          Add to cart
        </a>
      </>
    </div>
  );
};

export default Products;
