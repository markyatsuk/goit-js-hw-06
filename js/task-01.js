
const liItemsEl = Array.from(document.querySelectorAll('#categories>li.item')); 
 
console.log(`Number of categories: ${liItemsEl.length}.`);

for(const item of liItemsEl){
    let title = item.firstElementChild.textContent;
    let quantityOfElements = item.lastElementChild.children.length;
    console.log(`
    Category: ${title}
    Elements: ${quantityOfElements}
    `);
};

