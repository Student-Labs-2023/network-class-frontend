import { makeAutoObservable } from "mobx";
import { IUser } from "../../../entities/user/api/models";
 
class User {
state = {};
    constructor() {
        makeAutoObservable(this)
    }

    addUser(user: IUser) {
        this.state = user; 
    }
}
 
export default new User();
