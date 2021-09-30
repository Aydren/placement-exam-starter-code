// First, tell us your name
let yourName = "Jane Doe" // HINT: Replace this with your own name!

//my name

yourName = 'Adrian Reyes';

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

/* 
// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function(){
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Ginger bread + button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
})
 */
// TODO: Hook up event listeners for the rest of the buttons

// total

let totalCell =  document.querySelector('#qty-total');

//Ginger bread

gbCell =  document.querySelector('#qty-gb');

document.getElementById('add-gb').addEventListener('click', function(){
    gb += 1;
    gbCell.textContent = gb;
    totalCell.textContent = gb + cc + sugar;
})

document.getElementById('minus-gb').addEventListener('click', function(){
    gb -= 1;
    gbCell.textContent = gb;
    totalCell.textContent = gb + cc + sugar;
})

// chocolate chip

ccCell =  document.querySelector('#qty-cc');

document.getElementById('add-cc').addEventListener('click', function(){
    cc += 1;
    ccCell.textContent = cc;
    totalCell.textContent = gb + cc + sugar;
})

document.getElementById('minus-cc').addEventListener('click', function(){
    cc -= 1;
    ccCell.textContent = cc;
    totalCell.textContent = gb + cc + sugar;
})

// sugar sprinkle

sugarCell =  document.querySelector('#qty-sugar');

document.getElementById('add-sugar').addEventListener('click', function(){
    sugar += 1;
    sugarCell.textContent = sugar;
    totalCell.textContent = gb + cc + sugar;
})

document.getElementById('minus-sugar').addEventListener('click', function(){
    sugar -= 1;
    sugarCell.textContent = sugar;
    totalCell.textContent = gb + cc + sugar;
})
