//Add item
btnAdd.addEventListener('click', addTodoItem, false);

var arrTodoItems = [];


function addTodoItem(e){
    if (todoitem.value.length < 1){
        return;
    }
    if (!arrTodoItems.includes(todoitem.value)){
    var newTodoItem = document.createElement("div");
    newTodoItem.setAttribute("class", "item");
    newTodoItem.innerText = todoitem.value;

    var newSpanDeleteItem = document.createElement("span");
    newSpanDeleteItem.setAttribute("class", "fa fa-times")
    newSpanDeleteItem.setAttribute("id", "deleteItem")
    newSpanDeleteItem.setAttribute("aria-hidden", "true")
    

    var newSpanItemDone = document.createElement('span');
    newSpanItemDone.setAttribute('class', 'fa fa-check');
    newSpanItemDone.setAttribute("id", "doneItem")
    

    main.appendChild(newTodoItem);
    newTodoItem.appendChild(newSpanDeleteItem);
    newTodoItem.appendChild(newSpanItemDone);
    arrTodoItems.push(todoitem.value);
    todoitem.value = "";
    
    newSpanDeleteItem.addEventListener('click', ItemRemove, false)
    newSpanItemDone.addEventListener('click', ItemDone, false)
        
}
    function ItemRemove() {
        if (confirm("Do you realy want delete item?")){
        main.removeChild(newTodoItem)
    }
   }
   function ItemDone(){
    if (newTodoItem.style.textDecoration == "line-through"){
        newTodoItem.style.textDecoration = "";
        newTodoItem.style.color = "black";
    } else {
        newTodoItem.style.textDecoration = "line-through";
        newTodoItem.style.color = "green";
    }
}
}  






    
