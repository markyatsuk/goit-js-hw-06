// создаем массив с элементами li.item
const liItemsEl = Array.from(document.querySelectorAll('#categories>li.item')); 
console.log(`Number of categories: ${liItemsEl.length}.`);

// проходимся по массиву, забираем текстовое содержимое заголовка и считаем колво дочерних элементов внутренних ul(количество элементов в категории)
for(const item of liItemsEl){
    let title = item.firstElementChild.textContent;
    let quantityOfElements = item.lastElementChild.children.length;
    console.log(`
    Category: ${title}
    Elements: ${quantityOfElements}
    `);
};

