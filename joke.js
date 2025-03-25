fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')

.then(response => response.json())
.then( data => {
    console.log(data);
    joke.textContent = data.joke || data.setup +"..."+ data.delivery;
}); 

// -----------> Programming Jokes <-----------//

document.getElementById('programming').addEventListener('click', () => {
    fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('joke').textContent = data.joke || data.setup +"..."+ data.delivery;
    })

    document.getElementById('title').textContent = "A Random Programming Joke!"; 
})

// -----------> Misc Jokes <-----------//

document.getElementById('misc').addEventListener('click', () => {
    fetch('https://v2.jokeapi.dev/joke/Miscellaneous?safe-mode')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('joke').textContent = data.joke || data.setup +"..."+ data.delivery;
    })

    document.getElementById('title').textContent = "A Random Misc Joke!"; 
})

// -----------> Pun Jokes <-----------//

document.getElementById('pun').addEventListener('click', () => {
    fetch('https://v2.jokeapi.dev/joke/Pun?safe-mode')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('joke').textContent = data.joke || data.setup +"..."+ data.delivery;
    })

    document.getElementById('title').textContent = "A Random Pun!"; 
})

// -----------> Spooky Jokes <-----------//

document.getElementById('spooky').addEventListener('click', () => {
    fetch('https://v2.jokeapi.dev/joke/Spooky?safe-mode')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('joke').textContent = data.joke || data.setup +"..."+ data.delivery;
    })

    document.getElementById('title').textContent = "A Random Spooky Joke!"; 
})

// -----------> Christmas Jokes <-----------//

document.getElementById('Christmas').addEventListener('click', () => {
    fetch('https://v2.jokeapi.dev/joke/Christmas?safe-mode')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('joke').textContent = data.joke || data.setup +"..."+ data.delivery;
    })

    document.getElementById('title').textContent = "A Random Christmas Joke!"; 
})



