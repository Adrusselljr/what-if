const prompt = require('prompt-sync')()

const EarthWeight = Number(prompt('Please Enter Your Weight: '))
const planet = Number(prompt('Please Pick Planet Number (1, 2, 3, 4, 5, 6): '))

if(planet === 1) {
    planetWeight = EarthWeight * 0.78
    console.log(`Your weight on Venus is ${planetWeight}`)
}
else if(planet === 2) {
    planetWeight = EarthWeight * 0.39
    console.log(`Your weight on Mars is ${planetWeight}`)
}
else if(planet === 3) {
    planetWeight = EarthWeight * 2.65
    console.log(`Your weight on Jupiter is ${planetWeight}`)
}
else if(planet === 4) {
    planetWeight = EarthWeight * 1.17
    console.log(`Your weight on Saturn is ${planetWeight}`)
}
else if(planet === 5) {
    planetWeight = EarthWeight * 1.05
    console.log(`Your weight on Uranus is ${planetWeight}`)
}
else if(planet === 6) {
    planetWeight = EarthWeight * 1.23
    console.log(`Your weight on Neptune is ${planetWeight}`)
}
else {
    console.log("Error Invalid Planet Number!" , planet)
}