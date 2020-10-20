/**
 * The sum of the squares of the first ten natural numbers is, 1² + 2² + ... 10² = 385
 * The square of the sum of the first ten natural numbers is, (1+2+...+10)² = 55² = 3025
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */

const sumSquare = (num) => {
  let sum = 0
  for (let i = 1; i <= num; i++) {
    sum += i * i
  }

  return sum
}

const squareSum = (num) => {
  let sum = 0
  for (let i = 1; i <= num; i++) {
    sum += i
  }

  return sum * sum
}

const num = 100
const result = squareSum(num) - sumSquare(num)

console.log(result) // response = 25164150