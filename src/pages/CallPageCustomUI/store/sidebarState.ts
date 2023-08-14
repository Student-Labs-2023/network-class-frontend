import { makeAutoObservable } from "mobx";

class SidebarState {
  isActive = false;
  selected = "participants";

  constructor() {
    makeAutoObservable(this);
  }

  openSidebar() {
    this.isActive = true;
  }

  closeSidebar() {
    this.isActive = false;
  }

  selectParticipants() {
    this.selected = "participants";
  }

  selectChat() {
    this.selected = "chat";
  }
}

export default new SidebarState();
