// import "../components/Nav.js";
// import "../components/Footer.js";

async function importComponents() {
  const componentNames = ["Nav", "Footer", "Title"];

  Promise.all(
    componentNames.map((componentName) =>
      import(`../components/${componentName}.js`)
    )
  );
}

importComponents();
