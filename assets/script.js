// First, tell us your name
let yourName = "Jane Doe" // HINT: Replace this with your own name!

//my name

yourName = 'Adrian Reyes';

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0   // Total

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

let allTotal = localStorage.getItem('all-total')
if(allTotal){
    totalCell.textContent = allTotal
}

//Ginger bread

let gbCell =  document.querySelector('#qty-gb');

let gbAdd = localStorage.getItem('gb-total')
if(gbAdd){
    gbCell.textContent = gbAdd
}

document.getElementById('add-gb').addEventListener('click', function(){
    gb += 1;
    gbCell.textContent = gb;
    totalCell.textContent = gb + cc + sugar;
    localStorage.setItem('gb-total', gb)
    localStorage.setItem('all-total', totalCell.textContent)
})

let gbMinus = localStorage.getItem('gb-total')
if(gbMinus){
    gbCell.textContent = gbMinus
}

document.getElementById('minus-gb').addEventListener('click', function(){
    gb = Math.max(1, gb)
    gb = localStorage.getItem('gb-total') - 1;
    gbCell.textContent = gb;
    totalCell.textContent = gb + cc + sugar;
    localStorage.setItem('gb-total', gb)
    localStorage.setItem('all-total', totalCell.textContent)
})

// chocolate chip

let ccCell =  document.querySelector('#qty-cc');

let ccAdd = localStorage.getItem('cc-total')
if(ccAdd){
    ccCell.textContent = ccAdd
}

document.getElementById('add-cc').addEventListener('click', function(){
    cc += 1;
    ccCell.textContent = cc;
    totalCell.textContent = gb + cc + sugar;
    localStorage.setItem('cc-total', cc)
    localStorage.setItem('all-total', totalCell.textContent)
})

let ccMinus = localStorage.getItem('cc-total')
if(ccMinus){
    ccCell.textContent = ccMinus
}

document.getElementById('minus-cc').addEventListener('click', function(){
    cc = Math.max(1, cc)
    cc = localStorage.getItem('cc-total') - 1;
    ccCell.textContent = cc;
    totalCell.textContent = gb + cc + sugar;
    localStorage.setItem('cc-total', cc)
    localStorage.setItem('all-total', totalCell.textContent)
})

// sugar sprinkle

let sugarCell =  document.querySelector('#qty-sugar');

let sugarAdd = localStorage.getItem('sugar-total')
if(sugarAdd){
    sugarCell.textContent = sugarAdd
}

document.getElementById('add-sugar').addEventListener('click', function(){
    sugar += 1;
    sugarCell.textContent = sugar;
    totalCell.textContent = gb + cc + sugar;
    localStorage.setItem('sugar-total', sugar)
    localStorage.setItem('all-total', totalCell.textContent)
})

let sugarMinus = localStorage.getItem('sugar-total')
if(sugarMinus){
    sugarCell.textContent = sugarMinus
}

document.getElementById('minus-sugar').addEventListener('click', function(){
    sugar = Math.max(1, sugar)
    sugar = localStorage.getItem('sugar-total') - 1;
    sugarCell.textContent = sugar;
    totalCell.textContent = gb + cc + sugar;
    localStorage.setItem('sugar-total', sugar)
    localStorage.setItem('all-total', totalCell.textContent)
})