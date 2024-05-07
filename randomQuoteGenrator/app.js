let btn = document.querySelector('#newQuote');
let quote  = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote:`"The function of good software is to make the complex appear to be simple."`,
    person:`Grady Booch`
},{
    quote:`"Quality is never an accident; it is always the result of intelligent effort."`,
    person:`John ruskin`
},{
    quote: `"The best way to predict the future is to invent it."`,
    person:`allan kay`
},{
    quote:`"Code is like humor. When you have to explain it, it’s bad."`,
    person:`cory house`
},{
    quote:`"Simplicity is the ultimate sophistication."`,
    person:`Leonardo da Vinci`
}]


btn.addEventListener('click', function(){

    let random = Math.floor(Math.random()*quotes.length);

    quote.innerText =quotes[random].quote
    person.innerText =quotes[random].person
})

