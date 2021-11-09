const cart = ()=>{
    const buttonCart1 = document.getElementById('cart-button');
    const modalCart = document.querySelector('.modal-cart');
    const close = modalCart.querySelector('.close');
    const body = modalCart.querySelector('.modal-body');


    const renderItems =(data)=>{
        body.innerHTML='';
        data.forEach(({name, id, price, count})=>{
            const cartElem = document.createElement('div');
            cartElem.classList.add('food-row');
            cartElem.innerHTML= `
                    <span class="food-name">${name}</span>
					<strong class="food-price">${price} ₽</strong>
					<div class="food-counter">
						<button class="counter-button btn-dec">-</button>
						<span class="counter">${count}</span>
						<button class="counter-button btn-inc">+</button>
					</div>`

        body.append(cartElem) ;
        console.log(cartItem);
            
        })
    }

    buttonCart1.addEventListener('click', ()=>{
        if(localStorage.getItem('cart')){
            renderItems(JSON.parse(localStorage.getItem('cart')));
        }
        

        modalCart.classList.add('is-open');
    })
    close.addEventListener('click', ()=>{
        modalCart.classList.remove('is-open');
    })
}
cart();
