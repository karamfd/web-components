class Title extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const template = document.createElement("template");

    template.innerHTML = `
      <h1>
        <slot name="title">Title Page</slot>
      </h1>
    `;

    const shadow = this.attachShadow({ mode: "closed" });
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("my-title", Title);
