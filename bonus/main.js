let shoppingList = [
    'Mele',
    'Banane',
    'Pasta',
    'Carne',
    'Latte'
];
let container = document.getElementById('container');
let addElement = document.getElementById('add-element');

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

// button add
addElement.addEventListener('click', function () {
    let inputElement = document.getElementById('list-item');
    shoppingList.push = inputElement.value
    container.innerHTML += `<li clss="list">${inputElement.value}</li>`;
})

