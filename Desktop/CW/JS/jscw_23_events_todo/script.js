function toDo(selector){
    let containerToDo = document.querySelector(selector);
    if (!containerToDo) return;

    let formToDo = containerToDo.querySelector(`${selector}__form`);
    if (!formToDo) return;

    let input = formToDo.querySelector('input');
    if (!input) return;

    let toDoList = containerToDo.querySelector(`${selector}__list`);
    if (!toDoList) return;

    let clearToDo = containerToDo.querySelector('.clear');
    if (!clearToDo) return;

    clearToDo.addEventListener('click', () => {
        toDoList.innerHTML = '';
    });

    formToDo.addEventListener('submit', function(event){
        event.preventDefault();
        console.log(event);
        if (!input.value) return;
        toDoList.append(createItem(input.value));
        input.value = '';
    });

    toDoList.addEventListener('click', event => {
        let target = event.target;

        if (target.tagName !== 'SPAN') return;
 
        target.classList.toggle('done');

        let check = target.previousElementSibling;

        check.checked = target.classList.contains('done');

        // if (target.classList.contains('done')){
        //     check.checked = true;
        // }else{
        //     check.checked = false;
        // }
        
    });

    const createItem = (toDoText) => {
        let item = document.createElement('li');
        item.classList.add('item');

        let check = document.createElement('input');
        check.setAttribute('type', 'checkbox');

        let text = document.createElement('span');
        text.classList.add('text');
        text.innerText = toDoText;

        let buttons = document.createElement('div');
        buttons.classList.add('item__buttons');

        let del = document.createElement('div');
        del.classList.add('item__button');
        del.classList.add('del');
        del.innerHTML = '&#128465;';

        let edit = document.createElement('div');
        edit.classList.add('item__button');
        edit.classList.add('edit');
        edit.innerHTML = '&#9998;';

        del.addEventListener('click', () => {
            item.remove();
        });

        edit.addEventListener('click', function(e){
            text.contentEditable = true;
            text.focus();
            // edit.removeEventListener(e.type, arguments.callee) // --> Удаление анонимного обработчика событий
        });

        text.addEventListener('keydown', event => {
            if (event.altKey && event.code === 'Enter'){
                text.contentEditable = false;
            }
        });

        buttons.append(del, edit);
        item.append(check, text, buttons);

        return item;
    }
}

toDo('.container');
