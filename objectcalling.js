const ORDER_TYPES = {
    PIZZA: 0,
    WINGS: 1,
    SALAD: 2,
}
//-------------------------
module.exports = ORDER_TYPES;

const ORDER_TYPES = require('./orderTypes');

function numberOfPizzas(orders) {
    let total = 0;
    for(let i = 0; i < orders.length; i++) {
        if (orders[i].type === ORDER_TYPES.PIZZA) {
            total += orders[i].pizzas;
        }
    }
    return total;
}

/*
module.exports = numberOfPizzas;

Modify the numberOfPizzas function to only count pizzas when the order.type is equal to ORDER_TYPES.PIZZA.

The orders will have a type keyword:

const orders = [
    { pizzas: 3, type: ORDER_TYPES.PIZZA },
    { wings: 12, type: ORDER_TYPES.WINGS },
];
 In this example we would only sum up pizzas from the first order!

const totalPizzas = numberOfPizzas(orders);
console.log( totalPizzas ); // 3
