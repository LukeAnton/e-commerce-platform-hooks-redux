import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import { selectCartItemsCount } from "../../redux/cart/cartSelector";
import "./cartIcon.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

CartIcon.propTypes = {
  toggleCartHidden: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    itemCount: selectCartItemsCount(state)
  };
};
export default connect(
  mapStateToProps,
  { toggleCartHidden }
)(CartIcon);
