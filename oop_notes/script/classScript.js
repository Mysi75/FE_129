
            
class Note {
    constructor() {
        this._data = null;
    }
    get data() {
        return this._data;
    }
    set data(data) {
        if (data.title) this._data = data
    }
    edit(data) {
        Object.assign(this._data, data);
    }
}
class Notes {
    constructor() {
        this.notes = [];
    }
    add(data) {
        if (!data.title) return;
        let note = new Note();
        note.data = data;
        let id = this.getRandomId()
        note.edit({ id });
        this.notes.push(note);
    }

    getRandomId() {
        let id = Math.floor(Math.random() * 100);
        if (this.notes.length === 0) return id;
        let flag = this.notes.some(note => note.data.id === id);
        if (flag) {
            return this.getRandomId();
        } else {
            return id;
        }
    }
    edit(id, data) {
        this.notes.forEach(note => {
            if (note.data.id === id) {
                note.edit(data);
            }
        });
    }
    remove(id) {
        this.notes = this.notes.filter(note => note.data.id !== id);
    }
    set store(data) {
        let json = JSON.stringify(data);
        // console.dir(json);
        localStorage.setItem('notes', json);
        this.cookie = 10;
    }

    get store() {
        if (!localStorage.getItem('notes')) return false;
        if (!this.cookie) {
            localStorage.removeItem('notes');
            return false;
        }
        let data = localStorage.getItem('notes');
        data = JSON.parse(data);
        return data;
    }
    get cookie() {
        let name = 'note';
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches || false;
    }
    set cookie(time) {
        let name = 'note';
        let value = 'note';
        let options = {
            path: '/',
            secure: true,
            'max-age': time
        };

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }
        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }

        document.cookie = updatedCookie;
    }

    async getData(){
        let resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        return await resp.json();
    }
}

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

    saveEdit(e, id, title, content) {
        if (e.altKey && e.code === 'Enter') {
            let data = {
                title: title.innerText,
                body: content.innerText
            }
            title.contentEditable = false;
            content.contentEditable = false;
            super.edit(id, data);
            console.log(this.notes);
        }
    }
    remove(id) {
        super.remove(id);
        this.render();
    }
}

new NoteUI('.container');

// for(let i = 0; i < 10; i++){
//     setTimeout(() => console.log(i), 0);
// }
// let time = new Date;
// setTimeout(function go() {
//     let diff = new Date - time;
//     console.log(diff);
//     time = new Date;
//     setTimeout(go, 100);
// }, 100);

// let f1 = function () {
//     console.log('a');
// }

// function f2() {
//     console.log('b');
// }

// f1();
// f2();

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Промис выполнен'), 7000);
//     setTimeout(() => reject('Промис выполнен с ошибкой'), 4000);
// });

// console.log(promise);

// promise
//     .then(rez => {
//         console.log(rez);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// let el = document.createElement('div');
// el.classList.add('square');

// const rotate = () => {
//     let r = el.style.transform;
//     r = r.replace('rotate(', '');
//     r = parseInt(r) || 0;
//     el.style.transform = `rotate(${r + 360}deg)`;
//     let promise = new Promise((resolve) => {
//         let time = getComputedStyle(el).transitionDuration;
//         setTimeout(() => resolve(), parseFloat(time) * 1000);

//     });

//     promise
//         .then(() => el.addEventListener('click', rotate));

//     el.removeEventListener('click', rotate);
// }   

// el.addEventListener('click', rotate);

// document.body.append(el);

// let a = '';

//fetch

// fetch('https://jsonplaceholder.typicode.com/todos', {
//     method: "GET",
//     body: '',
//     headers: ''
// })
//     .then(response => {
//         console.log(response);
//         if (response.status === 200){
//             return response.json();
//         }else{
//             throw new Error(response.status);
//         }
//     })
//     .then(data => {
//         console.log(data);
//         a = data;
//     })
//     .catch(error => console.log(error));

// console.log(a);

//async await

// async function query() {
//     let a = '';
//     let el = document.createElement('div');
//     el.classList.add('square');
//     document.body.append(el);
//     let response = await fetch('https://jsonplaceholder.typicode.com/todos');
//     a = await response.json();
//     el.remove();
//     // console.log(a);
//     return a;
// }

// console.log(query().then(a => a));


let a = fetch('https://jsonplaceholder.typicode.com/todos/1');
let b = fetch('https://jsonplaceholder.typicode.com/comments/3');
let c = fetch('https://jsonplaceholder.typicode.com/users/8');

Promise.all([a, b, c])
    .then(data => console.log(data))
    .catch(err => console.log(err));

    Promise.race([a, b, c])
    .then(resp => console.log(resp.json()))
    .catch(error => console.log(error));