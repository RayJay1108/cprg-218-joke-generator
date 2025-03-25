fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')

.then(response => response.json())
.then( data => {
    console.log(data);
    console.log(data.joke);
    joke.textContent = data.joke;
}); 

document.getElementById('programming').addEventListener('click', () => {
    fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('joke').textContent = data.joke || data.setup +"..."+ data.delivery;
    })
})