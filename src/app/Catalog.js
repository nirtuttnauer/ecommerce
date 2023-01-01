import Product from "./Product";

export default class Catalog {
    _Products

    constructor(Data) {
        let i;
        let len = Data.products.length;
        this._Products = new Array(len);
        for (i = 0; i < len; i++) {
            this._Products[i] = new Product(Data.products[i]);
        }
        this.renderAll();
        }
    renderAll() {
        let len = this._Products.length;
        for (let i = 0; i < len; i++) {
            this._Products[i].render();
        }
        document.getElementById('num-of-prod').innerText = "Showing " + len.toString(10) + " items";
    }
}