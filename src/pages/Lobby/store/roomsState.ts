import { makeAutoObservable } from "mobx";

class RoomsState {
    state = '';
    constructor() {
        makeAutoObservable(this)
    }

    openEditForm() {
        this.state = 'edit';
    }

    closeEditForm() {
        this.state = '';
    }
}

export default new RoomsState();