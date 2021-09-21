const prompt = require('prompt-sync')()

const num = Number(prompt("Please Pick A Number: "))

if(num % 15 === 0) {
    console.log("FizzBuzz")
}
else if(num % 3 === 0) {
    console.log("Fizz")
}
else if(num % 5 === 0) {
    console.log("Buzz")
}
else {
    console.log(`Your number: ${num} is not divisible by 3, 5, and or 3 and 5`)
}