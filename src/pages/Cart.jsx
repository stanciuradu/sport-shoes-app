import React from "react";
import Header from "../components/Header";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../components/Cart.css";
import { deletCart } from "../redux/actions/cart";

function Cart(props) {
  const { deletCartWithDispatch } = props;
  return (
    <div>
      <Header />
      <div className="container">
        {props.sneakers.length ? (
          <div className="w-100">
            <div className="row">
              {props.sneakers.map((item) => {
                return (
                  // vreau ca produsele sa fie afisate cate trei pe rand
                  <div className="col-12 col-md-4">
                    <img src={item.image} alt="" className="w-75" />
                    <h3>{item.name}</h3>
                    <p>{item.size1}</p>
                    <p>{item.size2}</p>
                    <p>{item.size3}</p>
                    <p>{item.size4}</p>
                    <p>{item.price}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="mesaj-cart">
            <p className="h3">Nu ai produse in cart!</p>
            <Link to="/">
              <button className="btn btn-outline-dark">Inapoi la home</button>
            </Link>
          </div>
        )}
      </div>
      <div className="button-delet">
        <button
          className="btn btn-outline-dark"
          onClick={() => {
            deletCartWithDispatch({});
          }}
        >
          Sterge produsul din cos
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    // in pagina de Cart vom avea valori diverse ale state-ului din store, deci se va returna:
    sneakers: state.sneakers,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    // metoda care apeleaza actiunea si o trimite catre store
    deletCartWithDispatch: (sneaker) => {
      // rezulttul actiunii in momentul in care este apelata
      const actionResult = deletCart(sneaker);
      // vreau sa ajunga rezultatul actinii catre reducer cu dispatch
      // iar reducer-ul va modofica store-ul
      dispatch(actionResult);
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);