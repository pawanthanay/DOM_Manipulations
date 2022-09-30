
let btn = document.querySelectorAll('div.col-lg-8 span.login-btn-text')[0];
btn.addEventListener('mouseenter',function(){
    btn.style.backgroundColor = "red"
});
console.log(btn);
btn.addEventListener('mouseout',function(){
    btn.style.backgroundColor = "transparent"
});
console.log(btn);