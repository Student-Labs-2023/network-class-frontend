import { makeAutoObservable } from "mobx";

class Participants {
  isActive = false;

  constructor() {
    makeAutoObservable(this);
  }

  openParticipants() {
    this.isActive = true;
  }

  closeParticipants() {
    this.isActive = false;
  }
}

export default new Participants();
