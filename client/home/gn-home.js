import {
  component,
  withMarkup,
  withStyle,
  html,
  css
} from "/node_modules/compo/index.js";

import "./gn-home-main.js";

component(
  "gn-home-container",
  withStyle(
    () => css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    `
  )
);

component(
  "gn-home",
  withMarkup(
    () => html`
      <gn-home-container>
        <header>
          <h1>Genesia</h1>
        </header>
        <gn-home-main></gn-home-main>
        <footer>
          Footer
        </footer>
      </gn-home-container>
    `
  )
);
