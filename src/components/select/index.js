import "./styles.scss";

const Select = ({ selectedOption, handleSelectOption, dropdownOptions }) => {
  return (
    <select value={selectedOption} onChange={handleSelectOption}>
      {dropdownOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
