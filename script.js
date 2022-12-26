let = savtotal = 0;
function addToCart(element){
    
    let mainel = element.closest('.single-item');
    let kolicina = mainel.querySelector('input').value;
    let name = mainel.querySelector('h3').innerText;
    let price = mainel.querySelector('.price').innerText;
    let korpa = document.querySelector('.cart-items');

    kolicina = parseInt(kolicina)
    price = price.substring(1);
    let total = price*kolicina;
    if(kolicina > 0){
    

korpa.innerHTML += `<div class="klasa">
                  <h3>${name}</h3>
                  <p>Cena:$${price} X ${kolicina} =<span> ${total}</span></p>
                  <button onclick="removeFromCart(this)" class="remove-item">Obrisi</button>
                  </div><br>
                  `
                  
let totale = document.querySelector('.total');
savtotal += total;
totale.innerText = `Total:$${savtotal}`;
element.innerText = 'Dodato';
element.setAttribute("disabled", "true");

}else{
    alert('Unesi kolicinu');
}

}

function removeFromCart(element){
    
  let mainel = element.closest('.klasa');
  let price = mainel.querySelector('p span').innerText;
  let name = mainel.querySelector('h3').innerText;
  let vegetables = document.querySelectorAll('.single-item');
  price = parseInt(price);

let totale = document.querySelector('.total');
totale.innerText = `Total: $${savtotal -=price}`;
mainel.remove();

vegetables.forEach(function(vege){
    
let itemName = vege.querySelector('.si-content h3').innerText;
if (itemName === name){

    vege.querySelector('.actions button').innerText = 'Dodaj';
    vege.querySelector('.actions button').removeAttribute('disabled');
    vege.querySelector('.actions input').value = 0;
    
}








});



}