export default class Note {
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