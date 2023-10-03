//De følgende opgaver beskrivelser fik jeg chat GPT til at lave for mig, 
//hvorefter jeg selv løste problemerne

//Opgave 1
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNum = generateRandomNumber(1, 100);
console.log(`Random number: ${randomNum}`);




//Opgave 2
const question = "What is the capital of Denmark?";
const correctAnswer = "Copenhagen";

function checkAnswer(userAnswer) {
    if (userAnswer === correctAnswer) {
        return "Correct!";
    } else {
        return "Incorrect. The correct answer is Copenhagen.";
    }
}

const userResponse = "Paris";
console.log(checkAnswer(userResponse));




//Opgave 3
const todoList = [];

function addTodo(item) {
    todoList.push(item);
}

function removeTodo(index) {
    if (index >= 0 && index < todoList.length) {
        todoList.splice(index, 1);
    }
}

addTodo("Buy groceries");
addTodo("Clean the house");
addTodo("Study for exam");
removeTodo(1);

console.log(todoList);

