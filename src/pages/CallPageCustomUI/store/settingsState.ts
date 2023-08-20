import { makeAutoObservable } from "mobx";

class SettingsState {
  isActive = false;
  selected = "My";

  constructor() {
    makeAutoObservable(this);
  }

  openSettings() {
    this.isActive = true;
  }

  closeSettings() {
    this.isActive = false;
  }

  selectClass() {
    this.selected = "Class";
  }

  selectMy() {
    this.selected = "My";
  }
}

export default new SettingsState();
