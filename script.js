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
        isBought: false
    }, 
    {
        product: 'carton of milk', 
        amount: 1, 
        isBought: false
    }]; 

//Function for displaying the entire list; 

for(let item of groceriesList){
    console.log(item); 
}

//Function for adding a purchase to the list.

function addToList(newGroceriesList){
    for(let item of groceriesList) {
        if (item.product == newGroceriesList.product) {
            item.amount += newGroceriesList.amount; 
            return groceriesList; 
        } 
    groceriesList.push(newGroceriesList); 
    return groceriesList; 
    }
}

addToList({product:'bag of candy', amount: 2, isBought: false}); 
console.log(groceriesList); 


//Function for purchasing a product

function buyProduct(inputGroceriesList, product){
    for(let item of inputGroceriesList) {
        if((item.product === product) && (item.isBought === false)) {
            item.isBought = true; 
        }
    }
    return inputGroceriesList; 
}

console.log(buyProduct(groceriesList, 'bag of flour')); 



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

function seeIfItFits(inputClassrooms, inputGroup) {
    let outPutClassrooms = [];
    for(let item of inputClassrooms) {
        if ((item.seats >= inputGroup.seats) && (item.faculty === inputGroup.faculty)){
            outPutClassrooms.push(item); 
        }
    }
    return outPutClassrooms; 
}

let newGroup = {
    name: 'students', 
    seats: 29, 
    faculty: 'physics'
}; 

console.log(seeIfItFits(classrooms, newGroup)); 


