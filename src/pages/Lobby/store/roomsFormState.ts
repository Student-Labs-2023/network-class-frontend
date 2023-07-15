import { makeAutoObservable } from "mobx";

class FormState {
    state = 'create';
    constructor() {
        makeAutoObservable(this)
    }

    openEditForm() {
        this.state = 'edit';
    }

    openCreateForm() {
        this.state = 'create';
    }
}

export default new FormState();
