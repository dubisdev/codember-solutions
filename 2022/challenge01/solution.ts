const separateUsers = (text: string) => {
  const users = [""];
  const arrayRaw = text.split("\n");

  arrayRaw.forEach((line) => {
    if (line === "") {
      return users.push("");
    }
    users[users.length - 1] += line + " ";
  });

  return users.map((u) => u.trim());
};

const VALID_PROPS = ["usr", "eme", "psw", "age", "loc", "fll"];

const checkUser = (usr: string) => {
  const props = usr.split(" ");
  if (props.length < VALID_PROPS.length) return null;

  if (!props.some((prop) => prop.match(/usr:.*/))) return null;
  if (!props.some((prop) => prop.match(/eme:.*/))) return null;
  if (!props.some((prop) => prop.match(/psw:.*/))) return null;
  if (!props.some((prop) => prop.match(/age:.*/))) return null;
  if (!props.some((prop) => prop.match(/loc:.*/))) return null;
  if (!props.some((prop) => prop.match(/fll:.*/))) return null;

  return true;
};

const getSolution = (text: string) => {
  const usrs = separateUsers(text);
  const validMap = usrs.map(checkUser);

  const numberOfValidUsers = validMap.filter((e) => e === true).length;

  const lastValidUserIndex = validMap.lastIndexOf(true);
  const userName = usrs[lastValidUserIndex]?.match(/usr:([^\s]+)/)?.[1];

  return `${numberOfValidUsers}${userName}`;
};

const input = ``; // put here the input text

getSolution(input);
