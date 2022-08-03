// **************************************************   412. Fizz Buzz   ************************************************** //
// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
// https://leetcode.com/problems/fizz-buzz/
//
// Runtime:        123 ms, faster than 17.33%
// Memory Usage:  44.5 MB, less than   41.05%
{
  const fizzBuzz = (n) => {
    const fb = [];
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) fb.push('FizzBuzz');
      else if (i % 3 === 0) fb.push('Fizz');
      else if (i % 5 === 0) fb.push('Buzz');
      else fb.push(i);
    }
    return fb;
  };
}
//
// Runtime:      154 ms, faster than  5.39%   |   95 ms, faster than 61.28%
// Memory Usage:  44 MB, less than   89.46%   |   45.1 MB, less than 8.07%
{
  const fizzBuzz = (n) =>
    Array.from({ length: n }, (_, i) => `${i + 1}`)
      .splice(0)
      .map((num) => {
        if (num % 3 === 0 && num % 5 === 0) num = 'FizzBuzz';
        else if (num % 3 === 0) num = 'Fizz';
        else if (num % 5 === 0) num = 'Buzz';
        return num;
      });
}
//
// Runtime:        101 ms, faster than 51.17%   |    133 ms, faster than  9.02%   |    116 ms, faster than 26.35%
// Memory Usage:  44.7 MB, less than   21.32%   |   44.3 MB, less than   73.63%   |   44.1 MB, less than   83.14%
const fizzBuzz = (n) =>
  Array.from({ length: n }, (_, i) => {
    if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) return 'FizzBuzz';
    else if ((i + 1) % 3 === 0) return 'Fizz';
    else if ((i + 1) % 5 === 0) return 'Buzz';
    else return `${(i + 1)}`;
  })
// ************************************************************************************************************************ //

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));

// Example 1:
// Input: n = 3
// Output: ["1","2","Fizz"]

// Example 2:
// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]

// Example 3:
// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// Constraints:
// 1 <= n <= 104
