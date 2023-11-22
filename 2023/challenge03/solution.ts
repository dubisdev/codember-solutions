const input = `1-2 a: aaa` // <- Here goes the input data

const INCORRECT_PASSWORD_POSITION = 42 // <- Here goes the position of the incorrect password

const tests = input.split("\n")
let invalidPasswordCounter = 0

for (let passwordTest of tests) {
  const match = passwordTest.match(/(?<min>[0-9]+)-(?<max>[0-9]+) (?<policyChar>\w): (?<password>\w*)$/)

  if (!match) {
    invalidPasswordCounter++;
    continue
  }

  const { min, max, policyChar, password } = match.groups || {}

  let passwordCounter = 0

  password.split("").forEach(char => char === policyChar && passwordCounter++)

  // Password is valid
  if (passwordCounter >= Number(min) && passwordCounter <= Number(max)) continue


  invalidPasswordCounter++

  if (invalidPasswordCounter === INCORRECT_PASSWORD_POSITION) console.log(password)

}