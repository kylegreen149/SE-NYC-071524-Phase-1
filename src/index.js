// // write your code here
// console.log("Before the fetch")
// const promiseObject = fetch("http://localhost:3000/foods")
// const promiseObject2 = promiseObject.then((response) => response.json())
// promiseObject2.then((foodsData) => {
//     console.log(foodsData)
// })

// // .then(response => response.json())
// // .then(foodsData => console.log(foodsData))
// console.log("After the fetch")

// Using sync and await with promises
// async function fetchTheData() {
//     const responseObject = await fetch("http://localhost:3000/foods")
//     console.log(await responseObject.json())
// }
// fetchTheData()

const restaurantMenu = document.getElementById("restaurant-menu")

function addFoodImageToRestaurantMenu(food) {
    const imgElement = document.createElement("img")
    imgElement.src = food.image
    restaurantMenu.appendChild(imgElement)

    imgElement.addEventListener("click", () => {
        displayFoodDetails(food)
    })
}

function displayFoodDetails(food) {
    const detailImageElement = document.querySelector(".detail-image")
    detailImageElement.src = food.image
    
    const nameElement = document.querySelector(".name")
    nameElement.textContent = food.name

    const descriptionDisplayElement = document.getElementById("description-display")
    descriptionDisplayElement.textContent = food.description
}

fetch("http://localhost:3000/foods")
.then(response => response.json())
.then(foods => {
    displayFoodDetails(foods[0])

    foods.forEach(addFoodImageToRestaurantMenu)
})