const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');

const listItem = ingredients.reduce((previousValue, item) => {
  return previousValue + `<li class="item">${item}</li>`;
}, '');
// console.log(listItem);

ulEl.innerHTML = listItem;