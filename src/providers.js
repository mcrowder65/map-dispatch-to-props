import React from "react";
import PropTypes from "prop-types";
import { createStore } from "redux";
import { Provider } from "react-redux";

const reducer = (prevState, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...prevState,
      count: prevState.count + 1
    };
  } else if (action.type === "DECREMENT") {
    return {
      ...prevState,
      count: prevState.count - 1
    };
  }
  return prevState;
};
const initialState = {
  count: 0
};
const store = createStore(reducer, initialState);
function Providers(props) {
  return <Provider store={store}>{props.children}</Provider>;
}

Providers.propTypes = {
  children: PropTypes.node.isRequired
};
export default Providers;
