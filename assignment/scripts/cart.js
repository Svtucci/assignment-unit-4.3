console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
const maxItems = 5
let basket = []
console.log( basket );

// adds item and returns true
function addItem ( item ) {
    basket.push( item );
    return true;
}

addItem ( 'Chips' );
addItem ('Bagel');
console.log( basket )

function listItems () {
    for (let grocery of basket) {
        console.log(grocery);
    }
}


function empty () {
    basket = [];
}

empty(basket);
console.log(basket);

