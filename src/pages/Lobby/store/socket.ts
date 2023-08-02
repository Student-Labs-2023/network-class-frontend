import { makeAutoObservable } from "mobx";
 
class Socket {
    state = new WebSocket('ws://194.67.74.187:8000/channel_search/ws/');
    constructor() {
        makeAutoObservable(this)
    }
}
 
export default new Socket();