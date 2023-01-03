const nameInput = document.querySelector("#productName");
const descriptionInput = document.querySelector("#description");
const imgUrlInput = document.querySelector("#imgurl");
const priceInput = document.querySelector("#price");

const drawHTML = () => {
  document.querySelector("#product").innerHTML = products
    .map((x, index) => {
      return `
      <div>
      <p>${index + 1}.</p>
      <p>${x.name}</p>
      <p>${x.description}</p>
      <p><img src="${x.imgUrl}"</p>
      <p>${x.price} ש"ח</p>
      <button onclick="domyfonc(name)">Delete</button>
      <br>
      </div>
`;
    })
    .join("");
};

let products = [];
const localProducts = localStorage.getItem("products");
if (localProducts) {
  products = JSON.parse(localProducts);
  drawHTML();
}
// localStorage.removeItem("products");

document.querySelector("#addProduct").addEventListener("click", () => {
  products.push({
    name: nameInput.value,
    description: descriptionInput.value,
    imgUrl: imgUrlInput.value,
    price: priceInput.value,
  });
  localStorage.setItem("products", JSON.stringify(products));
  drawHTML();
  nameInput.value = "";
  descriptionInput.value = "";
  imgUrlInput.value = "";
  priceInput.value = "";
});
