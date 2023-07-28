import React from "react";
import { render, screen } from "@testing-library/react";
import Input from "../../components/input";

test("renders input with placeholder", () => {
  render(<Input inputValue="" handleChangeInput={() => {}} />);

  // Check if the input element is rendered and has the correct placeholder
  const inputElement = screen.getByPlaceholderText(
    "Typing to search users or repositories"
  );
  expect(inputElement).toBeInTheDocument();
});

test("input value is displayed correctly", () => {
  const inputValue = "test value";
  render(<Input inputValue={inputValue} handleChangeInput={() => {}} />);

  // Find the input element and check if the value is correctly displayed
  const inputElement = screen.getByPlaceholderText(
    "Typing to search users or repositories"
  );
  expect(inputElement).toHaveValue("test value");
});
