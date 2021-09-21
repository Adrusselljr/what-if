const prompt = require('prompt-sync')()

const num = Number(prompt("Please Enter A Number: "))
var group3 = 0
var group2 = 0
var temp = 0
var temp2 = 0

if(num % 3 === 0) {
    group3 = num / 3
    console.log(`You will have ${group3} group(s) of 3 and ${group2} group(s) of 2`)
}
if(num % 3 != 0) {
    temp = num % 3
    if(temp % 2 === 0) {
        group3 = Math.trunc(num / 3)
        group2 = temp / 2
    }
    else if(temp % 2 != 0) {
        group3 = Math.trunc((num / 3) - 1)
        temp2 = group3 * 3
        temp2 = num - temp2
        group2 = temp2 / 2
    }
    console.log(`You will have ${group3} group(s) of 3 and ${group2} group(s) of 2`)
}