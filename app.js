let inputText = document.querySelector('input');
const btn = document.getElementById('btn');
const ul = document.querySelector('ul');
const dateprint = document.getElementById('date');


// let li = document.createElement('li');
// li.textContent = lang;
// return li;

// btn.addEventListener("click", function(){
//     inputText =  inputText.value;
//     let webTask = localStorage.getItem("localtask");
//     if()
// })

btn.onclick = function (e) {
    if (inputText.value.length === 0) {
        return false;
    }

    else {
        const todoItem = inputText.value;

        let li = document.createElement('li');
        li.innerText = todoItem;
        ul.appendChild(li);
        inputText.value = "";

        var dBtn = document.createElement("button");
        dBtn.appendChild(document.createTextNode("X"));
        li.appendChild(dBtn);
        dBtn.addEventListener("click", deleteListItem);

        function deleteListItem() {

            li.remove();
        }
        var edit = document.createElement("button");
        edit.appendChild(document.createTextNode("Edit"));
        li.appendChild(edit);
        edit.addEventListener("click", editLi);

        function editLi() {
            let p = prompt("Edit Your Entry");
            li.innerText = p;
            li.appendChild(dBtn);
            li.appendChild(edit);

        }
    }
}

// Date code 

var WeekDay = new Date;
let week = ["Monday", "Tuesday","Wednday","Thrusday","Friday","Saturday","Sunday"];
let month = ["January", "Febuary","March","April","May","June","July","August", "September","October","November","December"];

console.log(`${ WeekDay.getFullYear()} + ${ WeekDay.getMonth()}`);

dateprint.innerText = `${week[WeekDay.getDay()-1]}/  ${month[WeekDay.getMonth()]} / ${WeekDay.getFullYear()} `;






// END ADD DELETE BUTTON