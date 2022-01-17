//This function will take in 'num' which will be the length of each array per key in the eachCourse object.
function ranNum (num){
    return Math.floor(Math.random() * num)
}
//Initializing an empty array called fullCourse with unknown length. This array will store a random value from each key array in the eachCourse object, which
//will end up being three values in the end since there are only 3 key-values in the eachCourse object.
let fullCourse = [];

//Creating an object called eachCourse which stores three keys with three respective arrays.
const eachCourse = {
    starter: ['Prawns', 'Salad', 'Soup', 'Bread Sticks'],
    main: ['Burger & Chips', 'Steak & Chips', 'Monkfish', 'Salmon Darnes', 'Pasta', 'Octopus', 'Lobster'],
    dessert: ['Vanilla Ice Cream', 'Tirimasu', 'Chocolate Fondant', 'Banana Souffle', 'Orange & Mago Tart', 'Cinnamon & Apple Tart']
}

//Using a for..in statement to iterate through each key in the eachCourse object. 
//On the first pass, it will meet a switch statement to check what the key name is.
//Depending on the key name, it will push one of the key values in the corresponding key array into the fullCourse array initialized earlier.
//Once the for..in statement ends, the fullCourse array will be filled with three values; One from starter, one from main, one from dessert.
for(let key in eachCourse){

//initializing a variable called randIndex which will be a random number with a length corresponding to passing in the current key length in
//the eachCourse object into the ranNum function.
//For example, if the for..in statement is on the starter key, it will pass the length of the starter array into the ranNum function which will
//return a random number between 0 and the length - 1
//This random number now can be used to choose a random value from the array to store within fullCourse.
let randIndex = ranNum(eachCourse[key].length);

switch(key){
    case 'starter': fullCourse.push(`Your Starter is: ${eachCourse[key][randIndex]}`);
    break;
    case 'main': fullCourse.push(`Your Main is: ${eachCourse[key][randIndex]}`);
    break;
    case 'dessert': fullCourse.push(`Your Dessert is: ${eachCourse[key][randIndex]}`);
    break;
    }
}

//Creating a function called displayCourse which takes in a variable (in this case an array), and joins the arrays elements with a new line between each element.
function displayCourse (course){
    let fullCourseDisplayed = course.join('<br><br>');
   return fullCourseDisplayed
}


    
    document.getElementById("buttonClick").onclick = function() {
    document.getElementById("displayHere").innerHTML = displayCourse(fullCourse);
    document.getElementById("reloadMessage").innerHTML = 'Reloading Page in 3...2...1...';
    setTimeout(() => {window.location.reload()}, 3000);
}
