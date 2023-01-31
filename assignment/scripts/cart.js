console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const maxItems = 5;
let basket = [];
console.log( `basket is ${basket}` ); //should apppear empty as the array right now is empty

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


/**  TO BE WORKED ON / IDEAS FOR PROJECT

function removeItem(item) {
    if (basket.indexOf() =  );
    array.splice

}

removeItem(`chips`);
console.log(basket);



function removeItem(item) {
    let x = basket.indexOf(item);
    basket.splice(x);
    return basket;
}

*/