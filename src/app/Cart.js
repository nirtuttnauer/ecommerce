import CartLine from "./CartLine";
import Products from "../Products.json"

export default class Cart {
    CartLines

    constructor() {
        this.CartLines = [];
        this.CartLines.push(new CartLine(Products.products[0]));
        console.log(this.CartLines);
        this.add();
        this.renderAll();
    }

    renderAll() {
        for (let i = 0; i < this.CartLines.length; i++) {
            this.CartLines[i].render();
        }
    }

    add() {

    }

}