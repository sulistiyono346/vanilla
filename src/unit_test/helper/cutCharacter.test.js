const { cutCharacter } = require("../../utils/helper/cutCharacter"); // Replace 'your-file-path' with the actual file path containing the cutCharacter function

test("does not cut characters from short string", () => {
  const shortString = "Short text.";
  const result = cutCharacter(shortString);
  expect(result).toBe(shortString);
});

test("returns null when input is null", () => {
  const result = cutCharacter(null);
  expect(result).toBeNull();
});

test("returns undefined when input is undefined", () => {
  const result = cutCharacter(undefined);
  expect(result).toBeUndefined();
});

test("does not cut characters from 15-character string", () => {
  const string15Chars = "Exactly 15 chars";
  const result = cutCharacter(string15Chars);
  expect(result).toBe(string15Chars);
});
