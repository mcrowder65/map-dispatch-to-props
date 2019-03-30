import React from "react";
import Providers from "../providers";
import { render as rtlRender, fireEvent } from "react-testing-library";
import RightWay from "../right-way";

function render(yours) {
  return rtlRender(<Providers>{yours}</Providers>);
}
test("that you can increment and decrement the number", () => {
  const { getByText } = render(<RightWay />);
  expect(getByText(/0/i)).toBeInTheDocument();
  fireEvent.click(getByText(/decrement/i));
  expect(getByText(/-1/i)).toBeInTheDocument();
  fireEvent.click(getByText(/decrement/i));
  expect(getByText(/-2/i)).toBeInTheDocument();

  fireEvent.click(getByText(/increment/i));
  expect(getByText(/-1/i)).toBeInTheDocument();
  fireEvent.click(getByText(/increment/i));
  expect(getByText(/0/i)).toBeInTheDocument();
  fireEvent.click(getByText(/increment/i));
  expect(getByText(/1/i)).toBeInTheDocument();
});
