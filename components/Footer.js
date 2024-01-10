class Footer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <footer>
        <small>Copyright &copy; 2023. All Rights Reserved.</small>
      </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
