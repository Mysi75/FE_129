class Cart {
    constructor() {
        this.widdget = document.createElement('div');
        this.widdget.classList.add('widget');
        this.cart = [];
        this.cartContainer = document.createElement('div');
        this.cartContainer.classList.add('container');
        this.init = this.init.bind(this);
        this.addCart = this.addCart.bind(this);
        this.getStateItem = this.getStateItem.bind(this);
        this.openRemoveItem = this.openRemoveItem.bind(this);

        this.getStorage();  
    }

    setStorage () {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    getStorage() {
        let cart = localStorage.getItem('cart')
        if(cart) {
            this.cart = JSON.parse(cart);
        }
    }
       
        getStateItem(id) {
            if(!this.cart.length) return false;
            let flag = this.cart.some(item => item.id === id);
            return flag;
        }

    addCart(item) {
        item = {count: 1,  ...item};

        this.cart.push(item);
        this.widdget.innerHTML = `
        <a href="#cart">j
        ${this.cart.length}
    </a>
     `;
     this.setStorage();
     return true;
    }

    getWdget() {
        let conuter = this.cart.length;
        this.widdget.innerHTML = `
            <a href="#cart">
            ${conuter}
        </a>
         `;

       return this.widdget; 
    }

    removeItemCart (id) {
        this.cart = this.cart.filter(item => item.id !== id);
        this.render();
        this.setStorage();
    } 

    openRemoveItem(id) {
        this.cart = this.cart.filter(item => item.id !== id);
        this.getWdget();
        this.setStorage(); 
    }

    changeCount(id, count = 0, flag = false) {
        this.cart = this.cart.map(item => {
            if(item.id === id) {
            if(!count) {
            if(flag) {
                 item.count += 1;
                return item;
            }else{
                if(item.count > 1) {
                    item.count -= 1;
                    return item;
                }else{
                    return item; 
                }
            }
         }else{
              item.count +count;
                return item;
         }  
            } else{
                return item;
            }
        });

        this.render();
        this.setStorage();
    }

    totalPrice() {
        let price = this.cart.reduce((price, item) => price += item.price * item.count, 0);
        let h2 =document.createElement('h2');
        h2.innerText = `итоговая сумма: ${price}`;
        return h2
    }

    render () {
        if(!this.cart.length) {
            this.cartContainer.innerHTML = '<h2>Коpзина пуста</h2>';
            return;
        }
        this.cartContainer.innerHTML = '';
        this.cart.forEach(item => {
            const cartElem = document.createElement('div');
            cartElem.classList.add('cart__item');
            cartElem.innerHTML = `
                <div class="img">
                    <img src="${item.image}"/>
                </div>
                <h3 class="item__-title">${item.title}</h3>
                <p class="price">${item.price}</p>
            `;

            let controlcontainer = document.createElement('div');
            controlcontainer.classList.add('controll');

            let counter = document.createElement('div');
            counter.classList.add('counter');

            let btnMinus = document.createElement('button');
            let btnMas = document.createElement('button');
            let input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.value = item.count;
            btnMas.innerText = '+';
            btnMinus.innerText = "-";


            counter.append(btnMinus, input, btnMas);

            btnMas.addEventListener('click', () => this.changeCount(item.id, 0, true));
            btnMinus.addEventListener('click', () => this.changeCount(item.id));
            input.addEventListener('input', ()=> this.changeCount(item.id, +input.value));

            let buttonRemove = document.createElement('button');
            buttonRemove.innerText = 'Remove';
            buttonRemove.addEventListener('click', () => {
             this.removeItemCart(item. id);
            this.getWdget();
        });

            controlcontainer.append(counter, buttonRemove);
            cartElem.append(controlcontainer);
            this.cartContainer.append(cartElem);
    });
         this.cartContainer.append(this.totalPrice());
}

    init() {
        this.render();
        return this.cartContainer;
    }
}

let cart = new Cart();
export const widget = cart.getWdget();
export const addCart = cart.addCart;
export const getStateItem = cart.getStateItem;
export const openRemoveItem = cart.openRemoveItem; 
const init = cart.init;

export default init;