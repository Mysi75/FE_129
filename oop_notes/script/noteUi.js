import { Notes } from "./notes.js";

class NoteUI extends Notes {
    constructor(selector) {
        super();
        this.container = null;
        this.noteContainer = null;
        this.init(selector);
    }

    async init(selector) {
        this.container = this.search(null, selector);

        let formContainer = document.createElement('form');
        formContainer.classList.add('form');
        let titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('placeholder', 'Введите название заметки');
        let contentInput = document.createElement('input');
        contentInput.setAttribute('type', 'text');
        contentInput.setAttribute('placeholder', 'Введите текст заметки');
        let buttonAdd = document.createElement('button');
        buttonAdd.setAttribute('type', 'submit');
        buttonAdd.innerText = 'Добавить заметку';
        this.noteContainer = document.createElement('div');
        this.noteContainer.classList.add('note__container');
        formContainer.addEventListener('submit', event => {
            event.preventDefault();

            event.preventDefault();

            let title = titleInput.value; 
            let body = contentInput.value;

            this.add({ title, body });

            titleInput.value = '';
            contentInput.value = '';
            // console.log(this.notes);
            this.render();
            this.store = this.notes;
        });
        formContainer.append(titleInput, contentInput, buttonAdd);
        this.container.append(formContainer, this.noteContainer);
        if (this.store) {
            let data = this.store;
            // this.notes = data;
            data.forEach(note => {
                // console.log(Object.keys(note));
                Object.keys(note).forEach(key => this.add(note[key]));
            });
            this.render();
        }else{
            let data = await this.getData();
            data.forEach(note => {
                this.add(note);
            });
            console.log(data);
            console.log(this.notes);
            this.store = this.notes;
            this.render();
        }
    }

    search(target, selector) {
        target = target || document;
        return target.querySelector(selector);
    }
    render() {
        this.noteContainer.innerHTML = '';
        this.notes.forEach(note => {
            let flag = true;
            let noteContainer = document.createElement('div');
            noteContainer.classList.add('note__element');

            let h2 = document.createElement('h2');
            h2.classList.add('title');
            h2.innerText = note.data.title;

            let p = document.createElement('p');
            p.classList.add('content');
            p.innerText = note.data.body;

            let del = document.createElement('button');
            del.classList.add('del');
            del.innerText = 'Удалить заметку';
            del.addEventListener('click', () => {
                this.remove(note.data.id);
            });

            let edit = document.createElement('button');
            edit.classList.add('edit');
            edit.innerText = 'Редактировать заметку';
            edit.addEventListener('click', () => {
                if (flag) {
                    h2.contentEditable = true;
                    p.contentEditable = true;
                    edit.innerText = 'Сохранить изменения';
                    flag = !flag;
                } else {
                    let data = {
                        title: h2.innerText,
                        body: p.innerText,
                    }

                    h2.contentEditable = false;
                    p.contentEditable = false;
                    super.edit(note.data.id, data);
                    edit.innerText = 'Редактировать заметку';
                    flag = !flag;
                    this.store = this.notes;
                }
            });   
            
            noteContainer.append(h2, p, edit, del);
            this.noteContainer.append(noteContainer);
        });
    }

    remove(id) {
        super.remove(id);
        this.render();
    }
}

export {NoteUI};