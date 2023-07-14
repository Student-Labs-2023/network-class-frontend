import { makeAutoObservable, makeObservable } from "mobx";

class RoomsState {
    state = 'all';
    constructor() {
        makeAutoObservable(this)
    }

    choiceAll() {
        this.state = 'all';
    }

    choiceAccess() {
        this.state = 'access';
    }

    choiceMy() {
        this.state = 'my';
    }
}

export default new RoomsState()
