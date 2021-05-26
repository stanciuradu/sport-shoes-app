import React from "react";
import "../components/SneackersItem.css";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cart";

function SneackersItem(props) {
  const {
    image,
    name,
    size1,
    size2,
    size3,
    size4,
    price,
    addToCartWithDispatch,
  } = props;

  return (
    <div className="col-12 col-md-4">
      <img src={image} alt="" className="w-75" />
      <h3>{name}</h3>
      <label htmlFor="size">Size:</label>
      <button type="button" className="size">
        {size1}
      </button>
      <button className="size">{size2}</button>
      <button className="size">{size3}</button>
      <button className="size">{size4}</button>
      <p>Price: {price}</p>
      <button
        className="add-to-cart"
        onClick={() => {
          addToCartWithDispatch({
            image,
            name,
            size1,
            size2,
            size3,
            size4,
            price,
          });
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    // metoda care apeleaza actiunea si o trimite catre store
    addToCartWithDispatch: (sneaker) => {
      // rezulttul actiunii in momentul in care este apelata
      const actionResult = addToCart(sneaker);
      // vreau sa ajunga rezultatul actinii catre reducer cu dispatch
      // iar reducer-ul va modofica store-ul
      dispatch(actionResult);
    },
  };
}

// vreau sa modific store-ul prin adaugarea unui produs, deci pun prima metoda ca fiind null
export default connect(null, mapDispatchToProps)(SneackersItem);