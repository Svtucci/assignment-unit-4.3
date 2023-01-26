console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
const maxItems = 5;
let basket = [];
console.log( `basket is ${basket}` );


function addItem ( item ) {
        console.log(isFull());
         if ( isFull() === true) {
         isFull(basket);
         basket.push(item);
         return true;
    }
}   
addItem ('Chips');
addItem ('Bagel');
addItem('Popcorn');
addItem('Cookies')
addItem('Milk')
console.log( `basket is now ${basket}` )

function listItems () {
    for (let grocery of basket) {
        console.log(grocery);
    }
}

listItems();

function empty () {
    basket = [];
}

empty(basket);
console.log(basket);

//STRETCH CODE

function isFull() {
    if (basket.length < maxItems) {
        return true;
    } else {
        return false;
    }
}


/**  TO BE WORKED ON

function removeItem(item) {
    if (i === basket.indexOf);

}

removeItem(`chips`);
console.log(basket);

*/