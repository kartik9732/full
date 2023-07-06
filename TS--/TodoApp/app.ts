var task = document.getElementById("tasks") as HTMLInputElement;
var ul = document.getElementsByClassName("list-group")[0] as HTMLUListElement;
function addList(){
    if(task.value.trim() == "") return false;
    let li = document.createElement("li") as HTMLLIElement;
    li.classList.add("list-group-item");

    let div1 = document.createElement("div") as HTMLDivElement;
    div1.classList.add("form-check");

    let input = document.createElement("input") as HTMLInputElement;
    input.setAttribute('type','checkbox');
    input.classList.add("form-check-input");

    let label = document.createElement("label") as HTMLLabelElement;
    label.classList.add("form-check-label");
    label.innerHTML = task.value.trim();
    task.value = "";
    input.addEventListener("click",()=>{
        if(input.checked == true){
                label.style.textDecoration = "line-through";
            }else{
                label.style.textDecoration = "none";
        }
    });
    

    

    
    let span = document.createElement("span") as HTMLSpanElement;

    let button = document.createElement("button") as HTMLButtonElement;
    button.classList.add("btn-close");
    button.setAttribute('aria-label','Close');

    
    span.appendChild(button);
    div1.appendChild(input);
    div1.appendChild(label);
    div1.appendChild(span);

    li.appendChild(div1);
    ul.appendChild(li);
    
    button.addEventListener("click",()=>{
        li.style.display = "none";
    });
    return false;
}


