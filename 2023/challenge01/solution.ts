function findSolution(input: string) {
    // 1 - We make it lowercase, as the count is case insensitive
    const lowercaseInput = input.toLowerCase()

    // 2 - Separate the words
    const words = lowercaseInput.split(" ")

    // 3 - Create a dictionary (object) with the words as keys and the count as values
    const dic = words.reduce((acc, curr) => {
      acc[curr] ? acc[curr]++ : acc[curr] = 1
      
      return acc
    }, {} as Record<string, number>)

    // 4 - Create the result string from the dictionary
    let result = ""
    Object.entries(dic).forEach(([word, count]) => {
      result += `${word}${count}`
    })

    return result
}

const input = "" // <- input string

console.log(findSolution(input))