function lastSurvivor(arr: Array<String | null>) {
  const moreThanOneNotNull = () => arr.filter((e) => e !== null).length > 1;
  const updatePointer = () => {
    pointer = pointer === arr.length - 1 ? 0 : pointer + 1;
  };

  let mustDead = false;
  let pointer = 0;

  while (moreThanOneNotNull()) {
    if (arr[pointer] !== null) {
      if (mustDead) arr[pointer] = null;
      mustDead = !mustDead;
    }

    updatePointer();
  }

  return arr.findIndex((e) => e !== null);
}

const input: string[] = []; // Here the input of oponent names

const winnerIndex = lastSurvivor(input);
console.log(input[winnerIndex] + "-" + winnerIndex);
