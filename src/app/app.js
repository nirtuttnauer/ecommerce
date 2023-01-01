import Catalog from "./Catalog";
import Data from "../Products.json"
import Nav from "./Nav";
import Cart from "./Cart";

export const run = () => {
    const catalog = new Catalog(Data);
    const cart = new Cart(Data);
    Nav.ShowCart()
};
