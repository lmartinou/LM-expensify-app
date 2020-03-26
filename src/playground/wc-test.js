class TopMenu extends HTMLElement {
    connectedCallback() {
      const menuContainer = document.createElement('div');
      
      const menuItem1 = document.createElement('div');
      const menuItem2 = document.createElement('div');
      const menuItem3 = document.createElement('div');
  
      menuItem1.innerHTML = 'Home';
      menuItem2.innerHTML = 'About';
      menuItem3.innerHTML = 'Log out';
  
      menuContainer.appendChild(menuItem1);
      menuContainer.appendChild(menuItem2);
      menuContainer.appendChild(menuItem3);
  
      this.attachShadow({ mode: 'open' }).appendChild(menuContainer);
    }
  }
  
  window.customElements.define('top-menu', TopMenu);