
class App {
  constructor(parentNode) {
    console.log("Game started", this);
    this.parentNode = parentNode;
    
    this.server = new Server();  
    
    

    this.difficultyLevel=null;
    this.timeInGame=null;
    this.cards = [];
    this.selectedCards = [];

    
  }

  hide() {
    this.parentNode.firstChild.remove();
  }
}

document.addEventListener("DOMContentLoaded", onContentLoaded);
function onContentLoaded(e) {
  window.application = new App(document.querySelector("#app"));
}