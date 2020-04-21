/*Create a “groceries list” array. Each element of the array is an object that contains the name of a product, 
an amount needed and a property saying whether it is bought or not. Write a few functions for working with this array: 
1) Function for displaying the entire list; 
2) Function for adding a purchase to the list. Note that if a product already exists in the array, 
the amount needs to be increased in the existing purchase, not in a new one; 
3) Function for purchasing a product. The function accepts the name of a product and marks it as bought.*/


let groceriesList = [
    {
        product: 'bag of flour', 
        amount: 1, 
        isBought: false
    }, 
    {
        product: 'bag of sugar', 
        amount: 1, 
        isBought: true
    }, 
    {
        product: 'carton of milk', 
        amount: 1, 
        isBought: true
    }]; 

//Function for displaying the entire list; 

for(let item of groceriesList){
    console.log(item); 
}

//Function for adding a purchase to the list.

function addToList(product, amount, isBought){
    let newProduct = {product: product, amount: amount, isBought: isBought}; 
    for(let item of groceriesList) {
        if (item.product === newProduct.product) {
            item.amount += newProduct.amount; 
        } else {
            groceriesList.push(newProduct); 
        }
    }
}

addToList("bag of candy", 2, false); 
console.log(groceriesList); 

//Function for purchasing a product

function buyProduct(product){
    for(let item of groceriesList) {
        if(item.isBought === false) {
            return item.isBought === true; 
        }
    }
}



/*Create an array of classrooms. A classroom object consists of a name, a number of seats (10 to 20) and the faculty it is meant for. 
Write a few functions for working with it: 1) Display all the classrooms; 
2) Display all the classrooms for a given faculty; 
3) Display only the classrooms that would fit a given group. A group object contains a name, the number of students, and the faculty name.*/


let classrooms = [
    {
        name: 'big room', 
        seats: 100, 
        faculty: 'foreign languages'
    }, 
    {
        name: 'medium room', 
        seats: 50, 
        faculty: 'physics'
    }, 
    {
        name: 'small room', 
        seats: 30, 
        faculty: 'physics'
    },
    {
        name: 'tiny room', 
        seats: 20, 
        faculty: 'arts'
    }]; 


//Display all the classrooms

classrooms.forEach(function(item){
    console.log(item); 
}); 

//Display all the classrooms for a given faculty

let classroomByFaculty = classrooms.filter(function(classroom){
    if(classroom.faculty === 'physics') {
        return true; 
    } else {
        return false; 
    }
}); 

console.log(classroomByFaculty); 

//Display only the classrooms that would fit a given group

function seeIfItFits(group) {
    for(let item of classrooms) {
        if ((classrooms.seats >= group.seats) && (classrooms.faculty === group.faculty)){
            return item; 
        }
    }
}



