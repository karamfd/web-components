class Title extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "closed" });

    const styleSheet = new CSSStyleSheet();
    styleSheet.replaceSync("h1 { color: red; }");

    this.root.adoptedStyleSheets = [styleSheet];

    this.root.innerHTML = `
      <h1>
        <slot name="title">Title Page</slot>
      </h1>
    `;
  }
}

customElements.define("my-title", Title);

// Code below also works
// class Title extends HTMLElement {
//   constructor() {
//     super();

//     const template = document.createElement("template");
//     const styleSheet = new CSSStyleSheet();

//     styleSheet.replaceSync(`h1 { color: red; }`);
//     template.innerHTML = `
//       <h1>
//         <slot name="title">Title Page</slot>
//       </h1>
//     `;

//     const shadow = this.attachShadow({ mode: "closed" });
//     shadow.appendChild(template.content.cloneNode(true));
//     shadow.adoptedStyleSheets = [styleSheet];
//   }
// }

// customElements.define("my-title", Title);
