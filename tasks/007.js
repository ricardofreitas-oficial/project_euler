/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * What is the 10 001st prime number?
 */

const isPrime = require('./utils/isPrime')

const primeIndex = (index) => {
  let counter = 0
  let num = 2

  while (true) {
    if (isPrime(num)) counter++

    if (counter === index) break

    num++
  }

  return num
}

const result = primeIndex(10001)
console.log(result) // response = 104743