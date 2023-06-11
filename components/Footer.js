const template = document.createElement("template");
const style = document.createElement("style");

template.innerHTML = /* html */ `
  <footer>
    <small>Your footer text goes here</small>
  </footer>
`;

style.textContent = /* css */ `
  /* footer-component local style */
  :host {
    margin-block-start: auto;
    background-color: pink;
    padding: 1rem;
    text-align: center;
  }
`;

class Footer extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "closed" });
    shadow.append(template.content.cloneNode(true));
    shadow.append(style);
  }
}

customElements.define("footer-component", Footer);
