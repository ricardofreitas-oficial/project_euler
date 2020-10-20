/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

const isPrime = require('./utils/isPrime')

const Factors = (num) => {
  const factorArray = []
  for (let i = 1; i <= num; i++) {
    if (num % i === 0 && num !== i) {
      num /= i

      factorArray.push(num)
    }
  }
  return factorArray
}

const factors = Factors(600851475143)
const result = factors.filter(e => isPrime(e))[0]

console.log(result) // response = 6857