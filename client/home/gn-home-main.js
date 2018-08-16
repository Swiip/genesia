import {
  component,
  withMarkup,
  withStyle,
  html,
  css
} from "/node_modules/compo/index.js";

component(
  "gn-home-main-container",
  withStyle(
    () => css`
      :host {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `
  )
);

component(
  "gn-home-main-button",
  withStyle(
    () => css`
      :host {
        margin: 10px;
        padding: 10px;
        border: 1px solid black;
        border-radius: 5px;
        width: 200px;
        text-align: center;
      }
    `
  )
);

component(
  "gn-home-main",
  withMarkup(
    () => html`
      <gn-home-main-container>
        <gn-home-main-button>Identification</gn-home-main-button>
        <gn-home-main-button>Inscription</gn-home-main-button>
      </gn-home-main-container>
    `
  )
);
