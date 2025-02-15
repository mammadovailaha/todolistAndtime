
//1.tapsiriq
// let time = 0;
// let interval;

// document.getElementById("startBtn").addEventListener("click", function() {
//     if (!interval) { 
//         interval = setInterval(() => {
//             time++;
//             document.getElementById("timer").innerText = time;
//         }, 1000);
//     }
// });

// document.getElementById("stopBtn").addEventListener("click", function() {
//     clearInterval(interval);
//     interval = null; 
// });


//2.tapsiriq
const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector("#list-Container");
const addButton=document.querySelector('#addBtn');

addButton.addEventListener('click', function(){
    if(inputBox.value===''){
        alert('you must write something');
    }
    else{
    let listLi=document.createElement('li');
    listLi.innerHTML=inputBox.value;
    listContainer.appendChild(listLi);
    let spanTag=document.createElement('span');
    spanTag.innerHTML='\u00d7';
    listLi.appendChild(spanTag);
    }
    inputBox.value='';
})

listContainer.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('chicked');
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
    }
},false);

