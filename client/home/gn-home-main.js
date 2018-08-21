import {
  component,
  withMarkup,
  withStyle,
  withHandler,
  html,
  css
} from "/node_modules/compo/index.js";

import { withRouteAction } from "/node_modules/compo/router.js";

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
  withRouteAction(),
  withHandler("subscribe", ({ go }) => event => go("/subscribe")),
  withHandler("login", ({ go }) => event => go("/login")),
  withMarkup(
    ({ subscribe, login }) => html`
      <gn-home-main-container>
        <gn-home-main-button onClick=${subscribe}>
          Identification
        </gn-home-main-button>
        <gn-home-main-button onClick=${login}>
          Inscription
        </gn-home-main-button>
      </gn-home-main-container>
    `
  )
);
