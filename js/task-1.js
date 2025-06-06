const items = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const total = item.querySelectorAll('ul li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements ${total}`);
});
