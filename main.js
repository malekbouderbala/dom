let images = Array.from(document.querySelectorAll('.img-fluid.rounded-start'));
let plusbtns = Array.from(document.querySelectorAll('.fas.fa-plus-circle'));
let minusbtns = Array.from(document.querySelectorAll('.fas.fa-minus-circle'));
let trashs = Array.from(document.querySelectorAll('.fas.fa-trash-alt'));
let favs = Array.from(document.querySelectorAll('.fas.fa-heart'));
let cards = Array.from(document.querySelectorAll('.card.mb-3'));
let prices = Array.from(document.querySelectorAll('.unitt-price'));
let numbers = Array.from(document.querySelectorAll('.qute'));
let totalns = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function refresh (){
    let finaprice = 0;
    for (let eachprice of totalns){
        finaprice=finaprice+eachprice;
        document.getElementById('total-price').innerHTML=finaprice;
    }
}
for (let plusbtn of plusbtns) {
    plusbtn.addEventListener('click', function() {
        plusbtn.nextElementSibling.innerHTML = parseInt(plusbtn.nextElementSibling.innerHTML) + 1;
        totalns[plusbtns.indexOf(plusbtn)] = totalns[plusbtns.indexOf(plusbtn)] + parseInt(prices[plusbtns.indexOf(plusbtn)].innerHTML);
        console.log('Total number:', totalns);  
        refresh ();
    });
}

for (let minusbtn of minusbtns) {
    minusbtn.addEventListener('click', function() {
        if (parseInt(minusbtn.previousElementSibling.innerHTML) > 0) {
            minusbtn.previousElementSibling.innerHTML = parseInt(minusbtn.previousElementSibling.innerHTML) - 1;
            totalns[minusbtns.indexOf(minusbtn)] = totalns[minusbtns.indexOf(minusbtn)] - parseInt(prices[minusbtns.indexOf(minusbtn)].innerHTML );
            console.log('Total number:', totalns);
            refresh ();
        }   
    });
}

for (let trash of trashs) {
    let r = trashs.indexOf(trash);
    trash.addEventListener('click', function() {
        totalns[trashs.indexOf(trash)] =  0 ;
        cards[r].remove();
        console.log('Total number:', totalns);  
        refresh ();
    });
}

for (let fav of favs) {
    let c = 0;
    fav.addEventListener('click', function() {
        if (c === 0) {
            fav.style.color = 'red';
            c = 1;
        } else {
            fav.style.color = '#007bff' ;
            c = 0;
        }
    });
}