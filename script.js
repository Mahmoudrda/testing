// Button 1: Change the background color
document.getElementById('button1').addEventListener('click', function() {
    // Generate a random background color
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
    document.getElementById('message').innerText = `Background color changed to: ${randomColor}`;
});

// Button 2: Display a random number
document.getElementById('button2').addEventListener('click', function() {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('message').innerText = `Random number: ${randomNumber}`;
});
