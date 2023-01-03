import { Product } from "./Product.js";
import { ProductSale } from "./Product.js";

//class

export class Shop {
  allProducts = [];
  constructor() {}
  addProduct(productName, productPrice, productDesc, productIMG) {
    let newPr = new Product(productName, productPrice, productDesc, productIMG);
    this.allProducts.push(newPr);
  }
  addSaleProduct(productName, productPrice, productDesc, productIMG, discount) {
    let newPr = new ProductSale(
      productName,
      productPrice,
      productDesc,
      productIMG,
      discount
    );
    this.allProducts.push(newPr);
  }
  getAllProducts() {
    return this.allProducts;
  }
  getCartPrice() {
    let sum = this.allProducts.reduce((prevValue, curItem) => {
      let currentPrice = curItem.getTotalPrice();
      return prevValue + currentPrice;
    }, 0);
    return sum;
  }
}
