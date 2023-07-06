var task = document.getElementById("tasks");
var ul = document.getElementsByClassName("list-group")[0];
function addList() {
    if (task.value.trim() == "")
        return false;
    var li = document.createElement("li");
    li.classList.add("list-group-item");
    var div1 = document.createElement("div");
    div1.classList.add("form-check");
    var input = document.createElement("input");
    input.setAttribute('type', 'checkbox');
    input.classList.add("form-check-input");
    var label = document.createElement("label");
    label.classList.add("form-check-label");
    label.innerHTML = task.value.trim();
    task.value = "";
    input.addEventListener("click", function () {
        if (input.checked == true) {
            label.style.textDecoration = "line-through";
        }
        else {
            label.style.textDecoration = "none";
        }
    });
    var span = document.createElement("span");
    var button = document.createElement("button");
    button.classList.add("btn-close");
    button.setAttribute('aria-label', 'Close');
    span.appendChild(button);
    div1.appendChild(input);
    div1.appendChild(label);
    div1.appendChild(span);
    li.appendChild(div1);
    ul.appendChild(li);
    button.addEventListener("click", function () {
        li.style.display = "none";
    });
    return false;
}
