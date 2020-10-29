// Variables Lab //
/*
console.log("Hello world!")
console.log(555+555)
console.log(8*2)
console.log(7%2)

console.log(`Dog's House`)

console.log(`<p class="wps" >The content describing hello world</p>`)

console.log(9 + "12")

console.log("9" + "12")

console.log(122 + Number(`8`))

let myNumberOfCups = 0
myNumberOfCups = myNumberOfCups + 56
myNumberOfCups + 4

console.log(myNumberOfCups)

console.log(`The number of cups on the table is ${myNumberOfCups}`)
console.log(`The number of cups on the table is ` + myNumberOfCups)*/

//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the screen like so: "You will be a X in Y, making $N for Z."
let myJobTitle = `Digital Desginer`
let myGeoLocation = `Toronto`
let myAnnualSalary = `50,000`
let myCompany = `ScotiaBank`
let prophecyTold = `You will be a ${myJobTitle} in ${myGeoLocation}, making $${myAnnualSalary} for ${myCompany}.`

console.log(prophecyTold)


//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the screen like so: "They are NN years old.", substituting the values.
let currentYear = 2020
let birthYear = 1990
let ageInYears = currentYear - birthYear
let ageResult = `They are ${ageInYears} years old`
console.log(ageResult)


//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
let currentAge = 22
let maxAge = 92
let dailyConsumeRate = 3
let totalNumberOfSnacks = (maxAge-currentAge)*365*3
let lifeTimeSupplyResult = `You will need ${totalNumberOfSnacks} snacks to last you until the ripe old age of ${maxAge}`
console.log(lifeTimeSupplyResult)


//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".
let circleRadius = 5
let circleCircumference = 2 * Math.PI * circleRadius
let circleArea = Math.PI * (circleRadius ** 2)
let geometrizerResult = `The circumference is ${circleCircumference}, and the area is ${circleArea}`
console.log(geometrizerResult)


//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."
let temperatureCelsius = 30
let convertCelsiusToFahrenheit = temperatureCelsius * (9/5) + 32
let temperatureFahrenheit = 70
let convertFahrenheitToCelsius = (temperatureFahrenheit - 32) * (5/9)
let tempConvResult = `${temperatureCelsius}°C is ${convertCelsiusToFahrenheit}°F` + ` and ` + `${temperatureFahrenheit}°F is ${convertFahrenheitToCelsius}°C.`

console.log(tempConvResult)
// console.log(`${temperatureCelsius}°C is ${convertCelsiusToFahrenheit}°F`)
// console.log(`${temperatureFahrenheit}°F is ${convertFahrenheitToCelsius}°C.`)



//Functions Lab//

/* Instructions
For each exercise, follow the instructions to create a function that either outputs 
the result to the console using console.log directly in the function, 
or has a return with the necessary value and is then output to the console from where the function was called.

Ideally, try both methods to get comfortable with the role of a function. */


// EXERCISE 1
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
/*
function squareNumber(number) {
    console.log(`The result of squaring the number ${number} is ${number*number}.`);
}
squareNumber(5)

function getSquareNumberWithReturn(number) {
    return number*number;
}
// console.log(`The result of squaring the number ${number} is ${getSquareNumberWithReturn}`)
// getSquareNumberWithReturn(12)
// number is not defined error
*/

function getSquareNumber(number) {
    let squaredNumber = number*number
    console.log(`The result of squaring the number ${number} is ${squaredNumber}.`)
    return squaredNumber;
}

getSquareNumber(12)


// EXERCISE 2
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
function getHalfNumber(number){
    let numberHalved = number/2
    console.log(`Half of ${number} is ${(numberHalved)}.`)
    return numberHalved;
}

getHalfNumber(500)


/*function getHalfNumber(number){
    return number/2
}
console.log(`Half of 100 is ${getHalfNumber(100)}`)*/



// EXERCISE 3
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
function getPercentOf(number1, number2) {
    let pcntCalculated = ((number1/number2)*100).toFixed(2);
    console.log(`${number1} is ${pcntCalculated}% of ${number2}.`);
    return pcntCalculated;
}
getPercentOf(3,26)

/*function getPercentOf(number1, number2) {
    return ((number1/number2)*100).toFixed(2)
}*/


// EXERCISE 4
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.

/*function areaOfCircle(radius) {
    console.log(`The area for a circle with radius ${radius} is ${(Math.PI*radius*radius).toFixed(2)}.`)
}*/

function getAreaOfCircle(radius) {
    let areaCalculated = ((Math.PI*radius*radius).toFixed(2));
    console.log(`The area for a circle with radius ${radius} is ${areaCalculated}.`);
    return areaCalculated;
}
getAreaOfCircle(5)


// EXERCISE 5
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area (#3) is of the squared result (#2).

function usingAllFunctions(number) {
    let theFirstResult = getHalfNumber(number)
    let theSecondResult = getSquareNumber(theFirstResult)
    let theThirdResult = getAreaOfCircle(theSecondResult)
    let theFourthResult = getPercentOf(theThirdResult,theSecondResult)
    console.log(`Therefore you get ${theFourthResult}`)
    return theFourthResult;
}
usingAllFunctions(5)




//DOM lab//
let ele1 = document.querySelector(`#varex1`)
ele1.textContent = `Result of Variable Lab Ex-1: ${prophecyTold}.`

let ele2 = document.querySelector(`#varex2`)
ele2.textContent = `Result of Variable Lab Ex-2: ${ageResult}.`

let ele3 = document.querySelector(`#varex3`)
ele3.textContent = `Result of Variable Lab Ex-3: ${lifeTimeSupplyResult}.`

let ele4 = document.querySelector(`.varex4`)
ele4.textContent = `Result of Variable Lab Ex-4: ${geometrizerResult}.`

let ele5 = document.querySelector(`.varex5`)
ele5.textContent = `Result of Variable Lab Ex-5: ${tempConvResult}`



let ele6 = document.getElementById(`funcex1`)
ele6.textContent = `Result of Function Lab Ex-1: square the given number is ${getSquareNumber(15)}.`
let ele7 = document.getElementById(`funcex2`)
ele7.textContent = `Result of Function Lab Ex-2: half the number is ${getHalfNumber(500)}.`
let ele8 = document.getElementById(`funcex3`)
ele8.textContent = `Result of Function Lab Ex-3: percent of the number is ${getPercentOf(3,26)}.`
let ele9 = document.getElementById(`funcex4`)
ele9.textContent = `Result of Function Lab Ex-4: area of circle is ${getAreaOfCircle(5)}.`
let ele10 = document.getElementById(`funcex5`)
ele10.textContent = `Result of Function Lab Ex-5: using all functions is ${usingAllFunctions(5)}.`





/* Notes
let ele10 = document.getElementById(`funcex10`)  // mistakently wrote funcex10 instead of funcexe5
console.log(ele10)                               // using console log, let me know in which step the issue was
















/*let functionLabResults = {
    funcexercise1: getSquareNumber(12), 
    funcexercise2: getHalfNumber(500),
    funcexercise3: getPercentOf(3,26),
    funcexercise4: getAreaOfCircle(5),
    funcexercise5: usingAllFunctions(5),
}



let getResultsOfFunctionsLabOnWebpage = (functionLabResults) =>
`<article><h2>${functionLabResults.funcexercise4}</h2><h3>${functionLabResults.funcexercise1}</h3></article>`;

console.log(getResultsOfFunctionsLabOnWebpage())
*/
