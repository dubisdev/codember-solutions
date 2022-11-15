const stringIsAsciiLetter = (chars: string) =>
  Number(chars) >= 97 && Number(chars) <= 122;

const translateWordFromAscii = (word: string) => {
  let asciiWord = word;
  let result = "";

  while (asciiWord.length > 0) {
    const maybe2CharAscii = asciiWord.substring(0, 2);

    if (stringIsAsciiLetter(maybe2CharAscii)) {
      const traducedChar = String.fromCharCode(Number(maybe2CharAscii));
      result += traducedChar;
      asciiWord = asciiWord.substring(2);
    } else {
      const ascii3Char = asciiWord.substring(0, 3);
      const traducedChar = String.fromCharCode(Number(ascii3Char));

      result += traducedChar;
      asciiWord = asciiWord.substring(3);
    }
  }

  return result;
};

const input = ""; // the input here

const words = input.split(" ");
const traduction = words.map(translateWordFromAscii).join(" ");

console.log(traduction);
