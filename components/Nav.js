class Nav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>
        <ul>
          <li><a href="/">home</a></li>
          <li><a href="/about">about</a></li>
          <li><a href="/contact">contact</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define("nav-component", Nav);
