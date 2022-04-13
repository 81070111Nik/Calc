let weight = document.querySelector('#weight'),
vol = document.querySelector('#vol'),
load = document.querySelector('#load'),
del = document.querySelector('#del'),
frag = document.querySelector('#frag'),
dist = document.querySelector('.distance').textContent = 500,
range = document.querySelector('#range'),
btn = document.querySelector('#btn'),
out = document.querySelector('#out');

range.onchange = function(){
    document.querySelector('.distance').textContent = range.value;
}
calc = function(){
    if(load.checked){
        load.value = 300;
    }else{
        load.value = 0;
    }
    if(del.checked){
        del.value = 100;
    }else{
        del.value = 0;
    }
    if(frag.checked){
        frag.value = 500;
    }else{
        frag.value = 0;
    }
    let sum = Number(range.value*2) + Number(weight.value*3) + Number(vol.value*4)+ Number(load.value)+ Number(del.value)+ Number(frag.value);
    out.textContent = sum;
}
btn.onclick = function(){
    if(weight.value ==="" && vol.value !=""){
       alert('Укажите вес');
    }else  if(weight.value !="" && vol.value ===""){
        alert('Укажите объем');
    }else if(weight.value !="" && vol.value !=""){
        calc();
    }else{
        alert('Укажите вес и объем');
    }
   
    }
    