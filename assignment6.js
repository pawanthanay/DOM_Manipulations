// document.getElementsByClassName("searchinput___19uW0")[0].style.backgroundColor = "red";

// input.addEventListener('mouseenter',function(){
//     document.getElementsByClassName("searchinput___19uW0")[0].style.backgroundColor = "red";
// });


let list = document.getElementsByClassName("searchinput___19uW0")[0];
list.addEventListener('mouseenter',function(){
    list.style.backgroundColor = "red"
});
console.log(list);
list.addEventListener('mouseout',function(){
    list.style.backgroundColor = "white"
});
console.log(list);

