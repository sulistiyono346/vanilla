import React from "react";
import { render, screen } from "@testing-library/react";
import Select from "../../components/select";

test("renders select element with dropdown options", () => {
  const dropdownOptions = ["Option 1", "Option 2", "Option 3"];
  const selectedOption = "Option 2";
  const handleSelectOption = jest.fn();

  render(
    <Select
      selectedOption={selectedOption}
      handleSelectOption={handleSelectOption}
      dropdownOptions={dropdownOptions}
    />
  );

  // Check if the select element is rendered
  const selectElement = screen.getByRole("combobox");
  expect(selectElement).toBeInTheDocument();

  // Check if the options are rendered
  const options = screen.getAllByRole("option");
  expect(options).toHaveLength(dropdownOptions.length);

  // Check if the selected option is correctly set
  expect(selectElement.value).toBe(selectedOption);
});
