const numbers = [7,14,21]
console.log(numbers)

// Adding an element into an array at end
numbeers.push(28)
console.log(numbers)

// Adding element to front of array from the beginning
numbers.unshift(6)
console.log(numbers)

// Removing element from end of array
numbers.pop()
comsole.log(numbers)

// Removing element from beginning of array
numbers.shift()
comsole.log(numbers)

// Accessing array indicies
console.log(numbers[0])

// An array of different values with different data types
const differentThings = [7, "hello", true, (num1) => num1 * 2]
console.log(differentThings)
console.log(differentThings[3])
const result = differentThings[3]()
console.log(result)

// Get some elements from an array
console.log(numbers)
numbers.slice(1,4)

// Remove elements in between the array indicies
numbers.splice(1,2)
console.log(numbers)

console.log([2, ...numbers])

// Adding a new key/value pair by the person variable
const person = {

}

person.phoneNumber = "(123)-456-7890"

// for loop vs while loop
for(let counter = 1; counter <= 10; counter++) {
    console.log(counter)
}

let counter2 = 1
while(counter2 <=10) {
    console.log(counter2)
}

// Using a for loop to loop through an array
const foods = ["pizza", "ice cream", "gyro"]

for (let index = 0; index < foods.length; index++) {
    console.log(foods[index])
}

// Using for...of to iterate over array
for (let food of foods) {
    console.log()
}

const fruit = {
    name: "apple",
    price: "$0.99",
    color: "red"
}


// Using for...in to iterate object
console.log(fruit)
for (let key in fruit) {
    console.log(fruit[key])
}

// Using forEach() method to iterate an array
foods.forEach((food) => {
    console.log(food)
})

// Using .map() method to itrerate through array and return a new array
const people = [
    {
        name: "Alice",
        age: 23
    }
    {
        name: "Bob",
        age: 34
    }
    {
        name: "Eve",
        age: 29
    }
]

const names = people.map(person => {
    return person.name
})
console.log(names)

// .find() method used to find an element from an array that meets a requirement
const foundPerson = people.find(person => {
    return person.name === "Bob"
})
console.log(foundPerson)

// Using the filter() method to return multiple elements from an array with ...
const filterPeople = people.filter(person => {
    return person.age > 28
})

// Using reduce() method yo get a sum of the numbers in an array
const numberValues = [6,2,8,7]
const total = numberValues.reduce((accumulator, number) => {
    return accumulator + number
}, 0)
console.log(total)