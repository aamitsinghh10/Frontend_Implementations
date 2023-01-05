fetch('https://jsonplaceholder.typicode.com/todos/1')
     .then( (response) => response.json() )
     .then( value => console.log(value))
     .catch( (error) => console.log(error.message));

//POST data
const newTodo = {
    "userId": 1,
    "title": "delectus aut autem",
    "completed": false
};
fetch(
    'https://jsonplaceholder.typicode.com/todos',
    {
        method : 'POST',
        body : JSON.stringify(newTodo)
    },
    {
        Headers : {
            'Content-Type': 'application/json'
        }
    }
)
    .then( response => response.json())
    .then( value => console.log(value));
