const input: `${string}-${string}\n` = `3n3E65A-nE65A`

const files = input.split("\n")

let correctCounter = 0

for (let fileInfo of files) {
  const [fileName, fileChecksum] = fileInfo.split("-")
    
  const correctChecksum = generateChecksum(fileName)
  
  if (correctChecksum === fileChecksum) correctCounter++
  
  if (correctCounter === 33) console.log(correctChecksum)
  
}

function generateChecksum(fileName: string) {
  const charCount = new Map<string, number>()
  
  for (let char of fileName) {
    if (!charCount.has(char)) charCount.set(char, 0)

    charCount.set(char, charCount.get(char) + 1)
  }
  
  let checkSum = ""

  for (let [key, count] of charCount.entries()) {
    if (count === 1) checkSum += String(key)
  }

  return checkSum
}