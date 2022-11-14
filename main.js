let shoppingList = [
    'Mele',
    'Banane',
    'Pasta',
    'Carne',
    'Latte'
];
let container = document.getElementById('container');

// for (let i = 0; i < shoppingList.length; i++) {
//     const element = shoppingList[i];
//     console.log(shoppingList[i]);
// }

let i = 0;
while (i < shoppingList.length) {
    container.innerHTML += `<li clss="list">${shoppingList[i]}</li>`;
    console.log(shoppingList[i]);
    i++
};
