import React from "react";
import App from "../app";
import { render } from "react-testing-library";

it("renders without crashing", () => {
  render(<App />);
});
