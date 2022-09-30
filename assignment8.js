let div = document.getElementById('SIvCob');
let lang = div.querySelectorAll('a');
for(let i=0;i<lang.length;i+=2){
    lang[i].remove();
}