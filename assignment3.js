// document.querySelectorAll('nav.accordion-homepage section.parent h3')[0].innerText;

// const sec = document.createElement('section');
// document.body.append(sec);
// sec.className='parent';
// sec.innerHTML = '<h3>New FAQ</h3>';


let list = document.querySelector(".accordion-homepage");
let sec = document.createElement('section');
sec.className='parent';
let h3 = document.createElement('h3');
let text = document.createTextNode('New FAQ');
h3.append(text);
sec.append(h3);
list.append(sec);