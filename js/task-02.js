const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');

const finalList = ingredients.map(ingredient => {
  const ingredientItem = document.createElement("li");
  ingredientItem.classList.add("item");
  ingredientItem.textContent = ingredient;
  return ingredientItem;
});
ulEl.prepend(...finalList);
