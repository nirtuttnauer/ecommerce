

export default class Nav {
    constructor(){
    }

    static render = () => {

    }
    static ShowCart(){
        let bool = false;
        document.getElementById('side-bar').style.display = "none";
        let cartBtn = document.getElementById('cart');
        cartBtn.addEventListener('click', () => {
            if (bool){
                document.getElementById('side-bar').style.display = "none";
                bool = false;
            }
           else {
                document.getElementById('side-bar').style.display = "";
                bool = true;
            }
        })

    }

}