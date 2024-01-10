class Title extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "closed" }).innerHTML = `
      <h1>
        <slot name="title">Title Page</slot>
      </h1>
    `;
  }
}

customElements.define("my-title", Title);
