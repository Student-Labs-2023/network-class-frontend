import { makeAutoObservable } from "mobx";
 
class Socket {
    state = new WebSocket(`${import.meta.env.VITE_WS_API}/channel_search/ws/`);
    constructor() {
        makeAutoObservable(this)
    }
}
 
export default new Socket();
