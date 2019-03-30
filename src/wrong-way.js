import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function WrongWay(props) {
  return (
    <div>
      <button onClick={props.decrement}>decrement</button>

      {props.count}
      <button onClick={props.increment}>increment</button>
    </div>
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
