import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Buttons from "./buttons";

function WrongWay(props) {
  return (
    <Buttons
      count={props.count}
      decrement={props.decrement}
      increment={props.increment}
    />
  );
}

WrongWay.propTypes = {
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
};

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    decrement: () => dispatch({ type: "DECREMENT" }),
    increment: () => dispatch({ type: "INCREMENT" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrongWay);
