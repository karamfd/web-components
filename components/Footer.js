class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <small>Copyright &copy; 2023. All Rights Reserved.</small>
      </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
