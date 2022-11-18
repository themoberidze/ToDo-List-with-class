let button = document.querySelector('.add');
let inputValue = document.querySelector('.inputvalue');
let list = document.querySelector('.list');

class toDo{
    constructor(input, list){
        this.input = input;
        this.list = list;
        this.addList();
        this.saveList();
        this.editList();
        this.deleteList();
    }

    addList(){
        let div = document.createElement('div');
        div.className = 'listdiv';
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        let input = document.createElement('input');
        let saveItem = document.createElement('button');
        saveItem.className = 'save';
        saveItem.innerHTML = 'Save';
        let editItem = document.createElement('button');
        editItem.className = 'edit'
        editItem.innerHTML = 'Edit';
        let deleteItem = document.createElement('button');
        deleteItem.className = 'delete'
        deleteItem.innerHTML = 'Delete';
        input.value = inputValue.value;
        input.disabled = true;
        div.append(checkbox);
        div.append(input);
        div.append(saveItem);
        div.append(editItem);
        div.append(deleteItem);
        list.append(div);
    }

    saveList(){
        let saveButton = document.querySelectorAll('.save');
        for(let item of saveButton){
            item.addEventListener('click', ()=>{
                item.parentNode.childNodes[1].disabled = true;
            })
        }
    }

    editList(){
        let editButton = document.querySelectorAll('.edit');
        for(let item of editButton){
            item.addEventListener('click', ()=>{
                item.parentNode.childNodes[1].disabled = false;
            })
        }
    }

    deleteList(){
        let deleteButton = document.querySelectorAll('.delete');
        for(let item of deleteButton){
            item.addEventListener('click', ()=>{
                item.parentNode.remove();  
            })
        }
    }
}

button.addEventListener('click', ()=>{
    if(inputValue.value === ''){
        alert('გთხოვთ შეიყვანეთ ტექსტი!');
    }
    else{
        let toDoList = new toDo(inputValue.value, list);
        inputValue.value = '';
    }
});