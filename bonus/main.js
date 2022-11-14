let shoppingList = [
    'Mele',
    'Banane',
    'Pasta',
    'Carne',
    'Latte'
];
let container = document.getElementById('list-container');
let addElement = document.getElementById('add-element');
let removeElement = document.getElementById('remove-elemnt');
let inputElement = document.getElementById('list-item');

// for (let i = 0; i < shoppingList.length; i++) {
//     const element = shoppingList[i];
//     console.log(shoppingList[i]);
// }

let i = 0;
while (i < shoppingList.length) {
    container.innerHTML += `<li class="list-${inputElement.value}">${shoppingList[i]}</li>`;
    console.log(shoppingList[i]);
    i++
};

// button add
addElement.addEventListener('click', function () {
    shoppingList.push = inputElement.value
    container.innerHTML += `<li class="list-${inputElement.value}">${inputElement.value}</li>`;
});

removeElement.addEventListener('click', function () {
    let deleteElemnt = document.querySelector(`.list-${inputElement.value}`)
    deleteElemnt.remove();
    shoppingList.pop = inputElement.value;

})

