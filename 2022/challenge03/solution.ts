/**
 * A function that gets an aray and returns the combinations of two colors that appear next to each other in the array
 */
function getTwoColorCombinations(array: string[]) {
  const colors = [...new Set(array)];
  const combinations: [string, string][] = [];

  for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < colors.length; j++) {
      if (i == j) continue;
      combinations.push([colors[i], colors[j]]);
    }
  }

  const inputToText = input.join(" ");

  let containedCombinations = combinations.filter((c) =>
    inputToText.includes(c.join(" "))
  );
  return containedCombinations;
}

const input = []; // Put here the array of colors

const containedCombinations = getTwoColorCombinations(input);

const longestMatchOfEachCombination: string[] = [];
const inputToText = input.join(" ");

containedCombinations.forEach((comb) => {
  const regex = new RegExp(
    `\\s?(${comb[0]} ${comb[1]}\\s?)+(\\s?${comb[0]}\\s?)?`,
    "g"
  );
  const matches = inputToText.match(regex)!;

  const longest = matches.reduce((a, b) => (a.length > b.length ? a : b), "");

  longestMatchOfEachCombination.push(longest);
});

const longestMatch = longestMatchOfEachCombination.reduce((a, b) =>
  a.length > b.length ? a : b
);

const longestMatchArray = longestMatch.trim().split(" ");
const color = longestMatchArray.at(-1);
const longestMatchLength = longestMatchArray.length;

const solution = `${color}@${longestMatchLength}`;

console.log(solution);
