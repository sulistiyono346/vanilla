import "./styles.scss";

const Input = ({ inputValue, handleChangeInput }) => {
  return (
    <input
      className="input"
      type="text"
      value={inputValue}
      onChange={handleChangeInput}
      placeholder="Typing to search users or repositories"
    />
  );
};

export default Input;
