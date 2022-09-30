let val = [];
let res = [];
for(i=0;i<7;i++){
    val[i] = document.querySelectorAll('div.as-imagegrid-item span.as-imagegrid-item-title')[i].innerText;
    res[i] = val[i].replace('\nSupport','');
}
console.log(res);