export default class CartLine {
    _Id
    _Name
    _Description
    _Price
    _Quantity
    _ImgUrl

    constructor(Product) {

        this._Id = Product.Id;
        this._Name = Product.Name;
        this._Description = Product.Description;
        this._Price = Product.Price;
        this._Quantity = Product.Quantity;
        this._ImgUrl = Product.ImgUrl;
        console.log(Product)
    }
    render(){
        const e1 = document.createElement('div');
        e1.setAttribute("class","CartLine" )
        e1.innerHTML= "<img/>" +
            "<div class='CartLine-Des'>" +
            "<h1>Name</h1>" +
            "<div class='flex-box'>" +
            "<button>-</button>" +
            "<p class='qua'>1</p>" +
            "<button>+</button>" +
            "<p class='Price'>Price</p>" +
            "</div>" +
            "</div>" +
            "<div>" +
            "<button>X</button>" +


            "</div>" ;

        e1.querySelector('h1').innerText = this._Name;
        e1.getElementsByClassName('Price')[0].innerText = (this._Price*this._Quantity).toString(10) + "$";
        e1.getElementsByClassName('qua')[0].innerHTML = this._Quantity.toString(10)
        e1.querySelector('img').src = this._ImgUrl;

        document.getElementById('side-bar').appendChild(e1);
    }
}