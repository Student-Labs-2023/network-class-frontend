import { makeAutoObservable } from "mobx";

class FormState {
    state = '';
    constructor() {
        makeAutoObservable(this)
    }

    openCreateForm() {
        this.state = 'create';
    }

    closeCreateForm() {
        this.state = '';
    }
}

export default new FormState();
