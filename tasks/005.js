/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

const divider = (num, max) => {
  let conter = 0
  for (let i = 1; i <= max; i++) {
    if (num % i === 0) {
      conter++
    } else {
      break;
    }
  }
  return conter
}

const smallest = (max) => {
  let i = 1

  console.log(`calculating smallest number...`)

  while (true) {
    const result = divider(i, max)
    if (result >= max) {
      return i
    }
    i++
  }
}

const result = smallest(20)
console.log(result) // response = 232792560