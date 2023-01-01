export default class Product {
    _Id
    _Name
    _Description
    _Price
    _Quantity
    _ImgUrl

    constructor(Data) {
        this._Id = Data.Id;
        this._Name = Data.Name;
        this._Description = Data.Description;
        this._Price = Data.Price;
        this._Quantity = Data.Quantity;
        this._ImgUrl = Data.ImgUrl;
    }

    render() {
        const e1 = document.createElement('div');
        e1.setAttribute("class", "product")
        e1.innerHTML = "<div>" +
            "<img alt='product image'/>" +
            "<div class='flex-box'>" +
            "<div class='product-txt'><h1>Name</h1><p>Description</p></div><div class='add-btn'><h6>Price</h6><input placeholder='0'/> <button>Add</button></div></div>" +
            "</div>";
        e1.querySelector('h1').innerText = this.getName();
        e1.querySelector('p').innerText = this.getDescription();
        e1.querySelector('h6').innerText = this.getPrice().toString(10) + "$";
        e1.querySelector('img').src = this.getImgUrl();

        document.getElementById('catalog').appendChild(e1);
    }

    getId() {
        return this._Id;
    }

    setId(value) {
        this._Id = value;
    }

    getName() {
        return this._Name;
    }

    setName(value) {
        this._Name = value;
    }

    getDescription() {
        return this._Description;
    }

    setDescription(value) {
        this._Description = value;
    }

    getPrice() {
        return this._Price;
    }

    setPrice(value) {
        this._Price = value;
    }

    getQuantity() {
        return this._Quantity;
    }

    setQuantity(value) {
        this._Quantity = value;
    }

    getImgUrl() {
        return this._ImgUrl;
    }

    setImgUrl(value) {
        this._ImgUrl = value;
    }
}
