const inputBox=document.getElementById("inputbox");
const listContainer=document.getElementById("listcontainer");


function addTask(){
    if(inputBox.value === ""){
        alert("please enter something!")
    }
    else{
        let li=document.createElement("li")
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    
    saveData();

}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check0");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
