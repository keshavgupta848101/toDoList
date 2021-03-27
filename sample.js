let inputText = document.querySelector('input');
const btn = document.getElementById('btn');
const ul = document.querySelector('ul');



// let li = document.createElement('li');
// li.textContent = lang;
// return li;

// btn.addEventListener("click", function(){
//     inputText =  inputText.value;
//     let webTask = localStorage.getItem("localtask");
//     if()
// })

btn.onclick = function (e){
    console.log("Clicked");   
    let b = inputText.value;
    console.log(b.length);
    


const todoItem = inputText.value;

    let li = document.createElement('li');
    li.innerText = todoItem;
    ul.appendChild(li);
    inputText.value = "";
    
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);
    
    function deleteListItem(){
      
            li.remove();
        }
        var edit = document.createElement("button");
        edit.appendChild(document.createTextNode("Edit"));
        li.appendChild(edit);
        edit.addEventListener("click", editLi);
        
        function editLi(){
             let p = prompt("Edit Your Entry");
             li.innerText = p;
             li.appendChild(dBtn);
             li.appendChild(edit);

        }
    }
    
    
       




// END ADD DELETE BUTTON