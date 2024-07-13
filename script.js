let input1 = document.querySelector("#text");
let chatboard = document.querySelector(".chat");
let send1 = document.querySelector("#btn3");
let send2 = document.querySelector("#btn2");
let input2 = document.querySelector("#text2");


send2.style.display = "none";
input2.style.display="none";



send1.addEventListener("click" ,function(){
        if(input1.value ===""){
            alert("Please Enter Some Message");
        }else{

        let message = document.createElement("p");
         message.textContent = input1.value;
         message.classList.add("first");
         chatboard.appendChild(message);
         storage();
        }

        input1.value="";
        send2.style.display = "block";
        input2.style.display="block";
        send1.style.display = "none";
        input1.style.display="none";
        
})


send2.addEventListener("click" ,function(){
    if(input2.value ===""){
        alert("Please Enter Some Message");

    }else{
    let message = document.createElement("p");
     message.textContent = input2.value;
     message.classList.add("second");
     chatboard.appendChild(message);
     storage();
    }

    input2.value="";
    send2.style.display = "none";
    input2.style.display="none";
    send1.style.display = "block";
    input1.style.display="block";
    
})


function rightclick(){
    document.addEventListener("contextmenu",event => event.preventDefault());
    alert("Right Click is Disabled");
}
rightclick();

function storage (){
    localStorage.setItem("data",chatboard.innerHTML);
}


function show(){
   chatboard.innerHTML = localStorage.getItem("data");
}

chatboard.addEventListener("dblclick" , function(e){
   if(e.target.classList.contains("second")){
    e.target.remove();  
    storage(); 
   }
   if(e.target.classList.contains("first")){
    e.target.remove();
    storage();
   }
})
show();


