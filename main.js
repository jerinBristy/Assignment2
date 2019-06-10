const quote =['It always seems impossible until its done.' , 'Your limitation—its only your imagination.' , 'Well done is better than well said', 'Great things never come from comfort zones.', 'Don’t stop when you’re tired. Stop when you’re done.'];
const rand = quote[Math.floor(Math.random() * quote.length)];

const ul = document.querySelector('#quoteBox');
ul.lastElementChild.innerHTML = "<h1>"+rand+"</h1>";

const btn1 = document.querySelector('.qbtn1');
btn1.addEventListener('click', e => {
    e.preventDefault();
    ul.style.background = 'blueviolet';
    ul.style.borderColor= 'red';
    ul.style.fontFamily= 'monospace';
    ul.style.color= 'white';
});

const btn2 = document.querySelector('.qbtn2');
btn2.addEventListener('click', e => {
    e.preventDefault();
    ul.style.background = 'red';
    ul.style.borderColor= 'blueviolet';
    ul.style.fontFamily= 'arial';
    ul.style.color= 'white';
});

const btn3 = document.querySelector('.qbtn3');
btn3.addEventListener('click', e => {
    e.preventDefault();
    ul.style.background = 'yellow';
    ul.style.borderColor= 'blue';
    ul.style.fontFamily= 'fantasy';
    ul.style.color= 'black';
});

const btn4 = document.querySelector('.qbtn4');
btn4.addEventListener('click', e => {
    e.preventDefault();
    ul.style.background = 'skyblue';
    ul.style.borderColor= 'green';
    ul.style.fontFamily= 'serif';
    ul.style.color= 'black';
});

//hero converter
const hero= document.querySelector('#hero');
const text= document.querySelector('#hero input[type=text]');
const drop= document.querySelector('#hero select');
const result= document.querySelector('#hero .result');



hero.addEventListener('submit', onsubmit);

function onsubmit(e)
{
        e.preventDefault();
        
            
                if(drop.value=="lb"){
                  
                result.innerText= text.value*0.4536+ " kilograms";
            }
            else{
                result.innerText= text.value*2.2046+ " pounds";
            };
       
}

//min max

const minmax =document.querySelector('#minmax');
const num= document.querySelector('#minmax input[type=text]');
const res =document.querySelector('#minmax .res');
const max =document.querySelector('#minmax .max');
const min =document.querySelector('#minmax .min');
const summ =document.querySelector('#minmax .sum');
const avg =document.querySelector('#minmax .avg');
const rev =document.querySelector('#minmax .rev');

num.addEventListener('keyup', myFunction);
function myFunction(e){
    const numarr= e.target.value.split(',');
    let abc=[];
    for(let i=0;i<numarr.length;i++){
        abc.push(parseInt(numarr[i]));
    }
    let sum=0;
    
    for(let i=0;i<abc.length;i++){
        
        
        if(isNaN(abc[abc.length-1]))
        {
            abc.splice(length-1);
            
        }
        
        sum =sum+abc[i];
        var maximum = abc.reduce(function(a, b) {
            return Math.max(a, b);
        });
       
    }
    
    var minimum = abc.reduce(function(a, b) {
        return Math.min(a, b);
    });
    var new_arr = abc.reverse();
    
    max.innerHTML="<p>Max: "+maximum +"</p>";
    min.innerHTML="<p>Min: "+minimum +"</p>";
    summ.innerHTML = "<p>Sum: "+sum +"</p>";
    avg.innerHTML = "<p>Average: "+sum/abc.length +"</p>";
    rev.innerHTML="<p>Reverse Order: "+new_arr +"</p>";
}

//magic

const magic =document.querySelector('#magic');
const textar=document.querySelector('#magic textarea[type=input]')
const clr=document.querySelector('#magic .clr');
const cap=document.querySelector('#magic .cap');
const sort=document.querySelector('#magic .sort');
const rvr=document.querySelector('#magic .rvr');
const blnk=document.querySelector('#magic .blnk');
const addnum=document.querySelector('#magic .addnum');
const shuffle=document.querySelector('#magic .shuffle');

let upper=false;
let lower=true;
let sd;
// -------------clear------------------------
clr.addEventListener('click', e => {
    e.preventDefault();
    textar.value="";
     upper=false;
     lower=true;
});

//----------capitalize--------------------
cap.addEventListener('click', e => {
    e.preventDefault();
    sd= textar.value.split('\n');
    if(upper===false){
        let up=[];
        for(let i=0;i<sd.length;i++){
            up[i]=sd[i].toUpperCase();
        }
        
        textar.value=up.join("\n");
        upper=true;
        lower=false;
    }
    else if(lower===false)
    {
        let low=[];
        for(let i=0;i<sd.length;i++){
            low[i]=sd[i].toLowerCase();
        }
        textar.value=low.join("\n");
        upper=false;
        lower=true;  
    }

});

//----------sort--------------------
sort.addEventListener('click', e => {
    e.preventDefault();
    sd= textar.value.split('\n');
    sd.sort();
    textar.value=sd.join("\n");
});
//----------Reverse--------------------
rvr.addEventListener('click', e=> {
    e.preventDefault();
    sd= textar.value.split('\n');
    let revarr=[];
    for(let i=0;i<sd.length;i++){
        revarr=sd[i].split(' ');
        sd[i]=revarr.reverse().join(' ');
    }
    textar.value=sd.join('\n');
   
});
//----------Strip blank--------------------
blnk.addEventListener('click', e => {
    e.preventDefault();

    sd= textar.value.split('\n');
    for(let i=0;i<sd.length;i++){
      sd[i]= sd[i].trim();
      if(sd[i]==='')
        {
            sd.splice(i,1);
            i--;
        }   
    }
    textar.value=sd.join("\n");
});
//-------------add numbers-----------------------
addnum.addEventListener('click', e => {
    e.preventDefault();
    sd= textar.value.split('\n');
    for(let i=0;i<sd.length;i++){
        sd[i]=i+1+".".concat(sd[i])
    }
    textar.value=sd.join("\n");
});
//-----------shuffle----------------------------
shuffle.addEventListener('click', e => {
    e.preventDefault();
    sd= textar.value.split('\n');
    let ctr = sd.length, temp, index;
    while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp=sd[ctr];
            sd[ctr]=sd[index]; 
            sd[index]=temp;
   }

    textar.value=sd.join("\n");
});