import { makeAutoObservable } from "mobx";

class Chat {
    isActive = false;

    constructor() {
        makeAutoObservable(this);
    }

    openChat() {
        this.isActive = true;
    }

    closeChat() {
        this.isActive = false;
    }
}

export default new Chat;
