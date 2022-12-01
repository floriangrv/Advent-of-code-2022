import colors from 'colors'
import { URL, fileURLToPath } from 'url'
import { readInput } from '../utils/readInput.js'
const inputPath = fileURLToPath(new URL('./input.txt', import.meta.url))
const data = await readInput(inputPath)
const ElvesCalList = data.split('\n')

// part 1
const sum = (arr) => {
  const result = []
  let temp = 0
  arr.forEach((val) => {
    if (val) {
      temp += val
    } else {
      result.push(temp)
      temp = 0
    }
  })

  return result
}

const result = sum(ElvesCalList.map(Number))
const maxCalHolder = Math.max(...result)

//part 2

const sumThreeHighestCalholder = (result) => {
  return result
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, c) => (a += c))
}

console.log(`🎄🎄  PART ONE 🎄🎄`.bold.green)
console.log(maxCalHolder)
console.log(`🎄🎄  PART TWO 🎄🎄`.bold.red)
console.log(sumThreeHighestCalholder(result))
