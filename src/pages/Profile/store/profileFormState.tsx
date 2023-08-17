import { makeAutoObservable } from "mobx";

class FormState {
  state = "";
  isEmailConfirmed = false;
  constructor() {
    makeAutoObservable(this);
  }

  openEditForm() {
    this.state = "edit";
  }

  closeEditForm() {
    this.state = "";
  }

  confirmEmail() {
    this.isEmailConfirmed = true;
  }
}

export default new FormState();
