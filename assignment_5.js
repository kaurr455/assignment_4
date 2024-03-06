function addItem() {
    var item = prompt("Enter a new item:");
    if (item) {
        var list = document.getElementById("todoList");
        var li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    }
}

function clearList() {
    var list = document.getElementById("todoList");
    list.innerHTML = "";
}

function sortList() {
    var list = document.getElementById("todoList");
    var items = list.getElementsByTagName("li");
    var sortedItems = Array.from(items).sort((a, b) => a.textContent.localeCompare(b.textContent));
    list.innerHTML = "";
    sortedItems.forEach(item => list.appendChild(item));
}

function deleteItem() {
    var itemToDelete = document.getElementById("deleteItemInput").value.toLowerCase();
    var list = document.getElementById("todoList");
    var items = list.getElementsByTagName("li");

    for (var i = 0; i < items.length; i++) {
        if (items[i].textContent.toLowerCase() === itemToDelete) {
            list.removeChild(items[i]);
            break;
        }
    }
}