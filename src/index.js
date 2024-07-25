const restaurantMenu = document.getElementById('restaurant-menu')

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {
    displayFoodDetails(foods[0])

    foods.forEach(food => {
        addFoodImageToRestaurantMenu(food)
    })
})

function addFoodImageToRestaurantMenu(food){
    const imgElement = document.createElement('img')
    imgElement.src = food.image
    imgElement.addEventListener('click', () => {
        displayFoodDetails(food)
    })
    restaurantMenu.appendChild(imgElement)
}

function displayFoodDetails(food){
    const foodDetailImageElement = document.getElementsByClassName('detail-image')[0]
    foodDetailImageElement.src = food.image
    const foodNameElement = document.getElementsByClassName('name')[0]
    foodNameElement.textContent = food.name
    const foodDescriptionDisplayElement = document.getElementById('description-display')
    foodDescriptionDisplayElement.textContent = food.description
}

const newFoodForm = document.getElementById('new-food')
newFoodForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const newNameInputElement = document.getElementById('new-name')
    const newImageInputElement = document.getElementById('new-image')
    const newDescriptionInputElement = document.getElementById('new-description')

    const newFood = {
        name: newNameInputElement.value,
        image: newImageInputElement.value,
        description: newDescriptionInputElement.value
    }

    addFoodImageToRestaurantMenu(newFood)

    // write your code here
    //Optimistic rendering approach
    // fetch("http://localhost:3000/foods", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(newFood)
    // })
    // .then(response => response.json())
    // .then(newFood => newFood)

    //Pessimistic rendering approach
    // fetch("http://localhost:3000/foods", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(newFood)
    // })
    // .then(response => response.json())
    // .then(newFood => addFoodImageToRestaurantMenu(newFood))
    // .catch(() => alert("Something went wrong"))
    // //.catch(error => error)

    // newFoodForm.reset()

    fetch("http://localhost:3000/foods", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newFood)
    })
    .then(response => {
        if(response.ok) {
            response.json().then(newFood => addFoodImageToRestaurantMenu(newFood))
        } else {
            alert("Unable to add new food")
        }
    })
    //.catch(error => error)

    newFoodForm.reset()
})