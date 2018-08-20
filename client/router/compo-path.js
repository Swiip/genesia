import {
  component,
  withConnected,
  withProp,
  withMarkup,
  html
} from "/node_modules/compo/index.js";

import { withRouteEvent } from "./router.js";

component(
  "compo-path",
  withProp("path"),
  withProp("component"),
  withRouteEvent((url, context) => {
    context.activated = context.path === url;
  }),
  withMarkup(
    ({ activated, component }) =>
      activated ? html`<${component}></${component}>` : html`<div></div>`
  )
);
