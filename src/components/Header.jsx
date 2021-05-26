import React from "react";
import "../components/Header.css";
import { ReactComponent as Cart } from "../assets/icons/cart.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
function Header(props) {
  const { numberOfSneakers } = props;
  return (
    <div className="header">
      <Link to="/" className="link">
        <h1>Sneakers</h1>
      </Link>
      <div className="cart">
        <Link to="/cart">
          <Cart className="icon" />
        </Link>
        <p>{numberOfSneakers}</p>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    numberOfSneakers: state.sneakers.length,
  };
}

export default connect(mapStateToProps)(Header);