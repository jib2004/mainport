import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';


const num = document.querySelector('.number')
const numVal = Number(num.getAttribute('data-value'))
let counter = 0
let bars_icon = document.querySelector('.icon')
let close_icon = document.querySelector('.icon-x')
const orderButton =document.querySelectorAll(".order-button")
const paymentForm = document.getElementById('paymentForm');
// const priceAmt = document.querySelectorAll('.price-amt')
const formClose = document.querySelector(".form-close")
let z =document.getElementById("amount")
let t = document.getElementById("amount").value 
// let page = document.querySelectorAll("sect")

window.addEventListener("load", ()=>{
loader()
bars_icon.addEventListener('click', ()=>{
  document.querySelector('nav').classList.add('show')
})

close_icon.addEventListener("click",()=>{
  document.querySelector("nav").classList.remove('show')
})

const options = {
  root:null,
  threshold:0.25,
  rootMargin:"-150px"
}


let observer =new IntersectionObserver(e=>{
  e.forEach(entry=>{
    console.log(entry.target)
    if(entry.isIntersecting){
      entry.target.classList.add("shows")

    }
  })
})

const hiddenElement = document.querySelectorAll(".hidden")
hiddenElement.forEach(el=>observer.observe(el))

let result = function h1(e,h1Element,amt){
  h1Element = e.target.parentElement.querySelector('.price-amt');
  // console.log(h1Element.innerHTML)
   amt = Number(h1Element.innerHTML)
  // console.log(amt)
  paymentForm.classList.add("display")
  t = amt
  return  z.setAttribute("value",t);
}

orderButton.forEach(order=>{
  order.addEventListener("click", result)
})



formClose.addEventListener("click",()=>{
  paymentForm.classList.remove("display")
})

paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(e) {
  e.preventDefault();

  
  
  let handler = PaystackPop.setup({
    key: 'pk_test_46f241be533ea3c26f9b4871d3a81003d2897376', // Replace with your public key
    email: document.getElementById("email-address").value,
    amount: t*100,
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
  });

  handler.openIframe();
}


})

function loader(interval){
  interval = setInterval(() => {
    if (counter !== numVal) {
      //document.querySelector(".loader").style.display ="block";
      counter++
      num.innerHTML = `${counter}%`
      document.querySelector("body").style.overflowY= "hidden";
    }
    if(counter === numVal){

      console.log('done')
      document.querySelector(".loader").style.display ="none";
      document.querySelector("body").style.overflowY= "scroll";
      clearInterval(interval)
    }
  }, 80)
}





// const scrollTracker= document.querySelector(".scroll-tracker")
// const scrollTrackingTimeline = new ScrollTimeline({
//   source:document.scrollingElement,
//   orientation:"block",
//   scrollOffsets: [CSS.percent(0), CSS.percent(100)]
// });

// scrollTracker.animate(
//   {
//     transform:["scaleX(0)", "scaleY(1)"],
//   },
//   { 
//     duration: 1,
//     timeline:scrollTrackingTimeline,
//   }
// );













// page.forEach(i=>{
//   i.addEventListener('click',()=>{
//     document.querySelector("nav").classList.remove('show')
//   })
// })

// var page = 1;

// function showPage(n) {
//   var pages = document.getElementsByClassName('page');
  
//   if (n > pages.length) {
//     page = 1;
//   }
//   if (n < 1) {
//     page = pages.length;
//   }
//   for (var i = 0; i < pages.length; i++) {
//     pages[i].style.display = 'none';
//   }
//   pages[page-1].style.display = 'block';
// }

// function prevPage() {
//   showPage(page -= 1);
// }

// function nextPage() {
//   showPage(page += 1);
// }


// var prevBtn = document.querySelector('.prev');

// function showPage(n) {
//   var pages = document.getElementsByClassName('page');
  
//   if (n > pages.length) {
//     page = 1;
//   }
//   if (n < 1) {
//     page = pages.length;
//   }
//   for (var i = 0; i < pages.length; i++) {
//     pages[i].style.display = 'none';
//   }
//   pages[page-1].style.display = 'block';
  
//   // check if first page
//   if (page === 1) {
//     prevBtn.style.display = 'none';
//   } else {
//     prevBtn.style.display = 'block';
//   }
// }

// function prevPage() {
//   showPage(page -= 1);
// }

// function nextPage() {
//   showPage(page += 1);
// }

// showPage(page);

// showPage(page);


// var page = 1;
// var prevBtn = document.querySelector('.prev');
// var controls = document.querySelectorAll('.control');

// function showPage(n) {
//   var pages = document.getElementsByClassName('page');
  
//   if (n > pages.length) {
//     page = 1;
//   }
//   if (n < 1) {
//     page = pages.length;
//   }
//   for (var i = 0; i < pages.length; i++) {
//     pages[i].style.display = 'none';
//   }
//   pages[page-1].style.display = 'block';
  
//   // check if first page
//   if (page === 1) {
//     prevBtn.style.display = 'none';
//   } else {
//     prevBtn.style.display = 'block';
//   }
  
//   // update active control
//   for (var i = 0; i < controls.length; i++) {
//     controls[i].classList.remove('active');
//   }
//   controls[page-1].classList.add('active');
// }

// function prevPage() {
//   showPage(page -= 1);
// }

// function nextPage() {
//   showPage(page += 1);
// }

// showPage(page);
