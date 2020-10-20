/**
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * Find the sum of all the primes below two million.
 */

const isPrime = require('./utils/isPrime')

const sum = (max) => {
  let sum = 2
  for (let i = 3; i < max; i += 2) {
    if (isPrime(i)) sum += i
  }

  return sum
}

const result = sum(2000000)
console.log(result) // response = 142913828922