import React from "react";
import PropTypes from "prop-types";

function Buttons(props) {
  return (
    <div>
      <button onClick={props.decrement}>decrement</button>
      {props.count}
      <button onClick={props.increment}>increment</button>
    </div>
  );
}

Buttons.propTypes = {
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
};

export default Buttons;
