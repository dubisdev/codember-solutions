// 1 - Define the valid actions and their types
const validActions = ["#", "@", "*", "&"] as const;

type ValidActions = typeof validActions[number]
type PrintAction = "&"
type ModifierActions = Exclude<ValidActions, PrintAction>

// 2 - Define what the modifier actions do
const ACTIONS = Object.freeze({
  "#": (num: number) => num += 1,
  "@": (num: number) => num -= 1,
  "*": (num: number) => num * num,
} satisfies Record<ModifierActions, (num: number) => number>);

// 3 - A typeguard to ignore invalid chars
function isValidChar(char: string): char is ValidActions {
  return validActions.includes(char as ValidActions)
}

function isPrintAction(char: string): char is PrintAction {
    return char === "&"
}

// 4 - The compiler function
function compile(input: string) {
  let result = ""
  let pointerValue = 0
  
  for (let char of input) {
    // Skip invalid characters
    if (!isValidChar(char)) continue

    // Save the status to a result
    if (isPrintAction(char)) result = `${result}${pointerValue}`

    else {
      // Calculate new pointer value
      pointerValue = ACTIONS[char](pointerValue)
    }
  }
  
  return result
}

compile("") // <- Here goes the input