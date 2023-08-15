import { makeAutoObservable } from "mobx";

const roomsFormStateLS = localStorage.getItem("trigger");

function defaultState() {
    if (roomsFormStateLS === 'create') {
        return 'my';
    }

    if (roomsFormStateLS === 'all') {
        return 'all';
    }
}

console.log(defaultState());
 
class NavbarState {
    state = defaultState();
    constructor() {
        makeAutoObservable(this)
    }
 
    openAll() {
        this.state = 'all';
    }
 
    openAccess() {
        this.state = 'access';
    }

    openMy() {
        this.state = 'my';
    }
}
 
export default new NavbarState();