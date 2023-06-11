const template = document.createElement("template");
const style = document.createElement("style");

template.innerHTML = /* html */ `
  <nav>
    <ul>
      <li><a href="/">home</a></li>
      <li><a href="/">about</a></li>
      <li><a href="/">contact</a></li>
    </ul>
  </nav>
`;

style.textContent = /* css */ `
  nav li {
    margin-block: 1rem;
  }

  nav a {
    background-color: yellow;
    color: blue;
  }

  @media screen and (max-width: 700px) {
    nav a {
      color: green;
    }
  }
`;

class Nav extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
    shadow.append(style);
  }
}

customElements.define("nav-component", Nav);
