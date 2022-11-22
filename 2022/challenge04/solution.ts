const getPasswordsList = (min: number, max: number) => {
  const passwords: string[] = [];

  for (let i = min; i <= max; i++) {
    const password = i.toString();
    if (password.length !== 5) continue;

    const hasRepeated5 = password.match(/(5)\1/);
    if (!hasRepeated5) continue;

    const isIncreasing = password.split("").every((number, index, array) => {
      if (index === 0) return true;

      return parseInt(number) >= parseInt(array[index - 1]);
    });

    if (isIncreasing) passwords.push(password);
  }
  return passwords;
};

const results = getPasswordsList(11098, 98123);

console.log(results.length + "-" + results[55]);
