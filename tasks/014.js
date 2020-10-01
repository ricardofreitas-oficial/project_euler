/**
 * The following iterative sequence is defined for the set of positive integers:
 * n → n/2 (n is even)
 * n → 3n + 1 (n is odd)
 * Using the rule above and starting with 13, we generate the following sequence:
 * 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 * It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
 * Which starting number, under one million, produces the longest chain?
 */

const isEven = require('./utils/isEven')

const ruler = (n) => {
  const chain = [n]
  while (n !== 1) {
    n = isEven(n) ? n / 2 : 3 * n + 1
    chain.push(n)
  }
  return chain
}

const CollatzProblem = (limiter) => {
  let maxLen = 0
  let max = 0

  for (let i = 1; i < limiter; i++) {
    const size = ruler(i).length
    if (size > maxLen) {
      maxLen = size
      max = i
    }

  }

  return (max)
}

const result = CollatzProblem(1000000)

console.log(result) //response = 837799