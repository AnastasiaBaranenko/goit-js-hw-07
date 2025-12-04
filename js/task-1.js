const categoriesEl = document.querySelectorAll("#categories > li");
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach((item) => {
  const titleEl = item.querySelector("h2");
  console.log(`Category: ${titleEl.textContent.trim()}`);

  const itemEl = item.querySelectorAll("ul > li");
  console.log(`Elements: ${itemEl.length}`);
});
