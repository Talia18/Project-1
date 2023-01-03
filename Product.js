import { Shop } from "./Shop.js";

//class

export class Product {
  #productName;
  #productDesc;
  #productIMG;
  constructor(productName, productPrice, productDesc, productIMG) {
    this.#productName = productName;
    this.productAmount = 0;
    this.#productDesc = productDesc;
    this.productPrice = productPrice;
    this.#productIMG = productIMG;
  }
  changeAmount(totalAmount) {
    this.productAmount = totalAmount;
  }
  getName() {
    return this.#productName;
  }
  getPrice() {
    return this.productPrice;
  }
  getDesc() {
    return this.#productDesc;
  }
  getImg() {
    return this.#productIMG;
  }
  getAmount() {
    return this.productAmount;
  }
  getTotalPrice() {
    return this.productAmount * this.productPrice;
  }
}

export class ProductSale extends Product {
  constructor(productName, productPrice, productDesc, productIMG, discount) {
    super(productName, productPrice, productDesc, productIMG);
    this.discount = discount;
  }

  getTotalPrice() {
    return this.productAmount * this.productPrice * this.discount;
  }
}

//DOM 

let productsDiv = document.getElementById("myProducts");

let drawAllProducts = () => {
  let products = shop.getAllProducts();

  products.forEach((product) => {
    let myProductDiv = document.createElement("div");
    myProductDiv.setAttribute("class", "myProduct");

    let myProductTitle = document.createElement("h3");
    myProductTitle.setAttribute("class", "h3");
    myProductTitle.innerHTML = product.getName();
    myProductDiv.appendChild(myProductTitle);

    let myProductImg = document.createElement("img");
    myProductImg.setAttribute("class", "productImg");
    myProductImg.setAttribute("src", product.getImg());
    myProductDiv.appendChild(myProductImg);

    let myProductPrice = document.createElement("p");
    myProductPrice.innerHTML = product.getPrice() + "$";
    myProductPrice.setAttribute("class", "productPrice");
    myProductDiv.appendChild(myProductPrice);

    let myProductDesc = document.createElement("p");
    myProductDesc.innerHTML = product.getDesc();
    myProductDesc.setAttribute("class", "productDesc");
    myProductDiv.appendChild(myProductDesc);

    let myProductInputP = document.createElement("p");

    let myProductInputLabel = document.createElement("label");
    myProductInputLabel.setAttribute("for", product.getName() + "AmountLabel");
    myProductInputLabel.innerHTML = "Amount: ";
    myProductInputP.appendChild(myProductInputLabel);

    let myProductInput = document.createElement("input");
    myProductInput.setAttribute("type", "number");
    myProductInput.setAttribute("min", 0);
    myProductInput.setAttribute("class", "amountInput");
    myProductInput.onchange = (event) => {
      let value = event.target.value;
      if (value < 0) return;
      product.changeAmount(value);
      let newPrice = product.getTotalPrice();
      let myNewPrice = document.getElementById(
        product.getName() + "TotalPrice"
      );
      myNewPrice.innerHTML = newPrice;

      updateCart();
    };

    //add input
    myProductInputP.appendChild(myProductInput);
    myProductDiv.appendChild(myProductInputP);

    let myTotalPrice = document.createElement("p");
    myTotalPrice.setAttribute("class", "totalPrice");
    myTotalPrice.innerHTML = "Total Price: ";
    let myTotalPriceNum = document.createElement("span");
    myTotalPriceNum.setAttribute("id", product.getName() + "TotalPrice");
    myTotalPriceNum.innerHTML = "0";
    myTotalPrice.appendChild(myTotalPriceNum);
    myTotalPrice.innerHTML += "$";
    myProductDiv.appendChild(myTotalPrice);

    productsDiv.appendChild(myProductDiv);
  });
};

let updateCart = () => {
  let newPrice = shop.getCartPrice();
  let cart = document.getElementById("cart");
  cart.innerHTML = newPrice;
};

window.onload = () => {
  drawAllProducts();
};

let shop = new Shop();

shop.addProduct(
  "חולצה מכופתרת לבנה לגברים",
  100,
  "",
  "חולצה-מכופתרת-לבנה-לגברים.jpg"
);
shop.addProduct("חצאית גינס", 110, "", "חצאית-גינס.jpg");
shop.addSaleProduct(
  "מכנס חום אלגנט לבנות",
  120,
  "10% הנחה",
  "מכנס-חום-אלגנט-לבנות.jpg",
  0.9
);
shop.addSaleProduct(
  "נעל אלגנט שחורה לגברים",
  250,
  "10% הנחה",
  "נעל-אלגנט-שחורה-לגברים.jpg",
  0.9
);
shop.addProduct("חצאית פרחונית נפנף", 80, "", "חצאית-פרחונית-נפנף.jpg");
shop.addSaleProduct(
  "מכנס משובץ אלגנט לגברים",
  150,
  "10% הנחה",
  "מכנס-משובץ-אלגנט-לגברים.jpg",
  0.9
);
shop.addSaleProduct(
  "בלנסטון שחור לגברים",
  200,
  "10% הנחה",
  "בלנסטון-שחור-לגברים.jpg",
  0.9
);
shop.addSaleProduct(
  "תנין מגפיים לבנות",
  110,
  "10% הנחה",
  "תנין-מגפיים-לבנות.jpg",
  0.9
);
shop.addProduct("נעל ריצה לנשים", 140, "", "נעל-ריצה-לנשים.jpg");
shop.addProduct("נעל ספורט לגברים", 150, "", "נעל-ספורט-לגברים.jpg");
shop.addSaleProduct(
  "שמלה עם שרוול נפוח לנשים",
  120,
  "10% הנחה",
  "שמלה-עם-שרוול-נפוח-לנשים.jpg",
  0.9
);
shop.addProduct("ג'קט נשים שחור מחויט", 80, "", "ג'קט-נשים-שחור-מחויט.jpg");
