let input = prompt("what would you like to do?");
const todos = ["Collect Eggs", "Clean"];
while (input !== 'quit' && input !== 'q') {  //We loop as long as the input is not quit.
    if (input.toLowerCase() === "list") {
        console.log("********");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("********");
    }
    else if (input.toLowerCase() === "new") {
        const newTodo = prompt("Ok, what is the new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    }
    else if (input.toLowerCase() === "delete") {
        const index = parseInt(prompt("Enter an index to delete")); //Make sure we get a number

        if (!Number.isNaN(index)) { // Only If the number is not a NaN , we gonna delete
            if (index >= todos.length) {
                console.log("Learn how to count first bro");
            }
            else {
                console.log(`${todos[index]} deleted`);
                todos.splice(index, 1);
            }

        }
        else {
            console.log("Unknown index");
        }

    }
    input = prompt("what would you like to do?");
}

console.log("OK, YOU QUIT THE APP")

