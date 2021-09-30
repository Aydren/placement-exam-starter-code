// First, tell us your name
let yourName = "Jane Doe" // HINT: Replace this with your own name!

//my name

yourName = 'Adrian Reyes'

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

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

let total =  document.querySelector('#qty-total');

//Ginger bread

gb =  document.querySelector('#qty-gb');

document.getElementById('add-gb').addEventListener('click', function(){
    let gbVoteAdd = parseInt(gb.textContent);
    gbVoteAdd += 1;
    gb.textContent = gbVoteAdd;
    total.textContent = gbVoteAdd;
})

document.getElementById('minus-gb').addEventListener('click', function(){
    let gbVoteMinus = parseInt(gb.textContent);
    gbVoteMinus -= 1;
    gb.textContent = gbVoteMinus;
    total.textContent = gbVoteMinus;
})

// chocolate chip

cc =  document.querySelector('#qty-cc');

document.getElementById('add-cc').addEventListener('click', function(){
    let ccVoteAdd = parseInt(cc.textContent)
    ccVoteAdd += 1;
    cc.textContent = ccVoteAdd;
    total.textContent = ccVoteAdd
})

document.getElementById('minus-cc').addEventListener('click', function(){
    let ccVoteMinus = parseInt(cc.textContent);
    ccVoteMinus -= 1;
    cc.textContent = ccVoteMinus;
    total.textContent = ccVoteMinus
})

// sugar sprinkle

sugar =  document.querySelector('#qty-sugar');

document.getElementById('add-sugar').addEventListener('click', function(){
    let ssVoteAdd = parseInt(sugar.textContent)
    ssVoteAdd += 1;
    sugar.textContent = ssVoteAdd
    total.textContent = ssVoteAdd
})

document.getElementById('minus-sugar').addEventListener('click', function(){
    let ssVoteMinus = parseInt(sugar.textContent);
    ssVoteMinus -= 1;
    sugar.textContent = ssVoteMinus;
    total.textContent = ssVoteMinus
})