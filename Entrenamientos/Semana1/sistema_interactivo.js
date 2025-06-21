//Init program
console.log("¡Welcome the system interactive messages!");


//Capture data user
let userName = prompt("Please, enter name: ");
let age = prompt("Please, enter age: ");


//convert age to number
age = parseInt(age);

//validations
if(isNaN(age)){
    alert("Please, enter only numbers");
    console.error("Please, enter only numbers");
} else if(age<18){
    alert(`Hi ${userName}, you're a minor. Keep learning and enjoying coding!`);
} else{
    alert(`Hello ${userName} you're of legal age. Get ready for great opportunities in the world of programming!`);
}