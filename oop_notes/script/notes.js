import Note from "./note.js";

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

export {Notes}