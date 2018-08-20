import { component, withMarkup, html } from "/node_modules/compo/index.js";

import "./router/router.js";
import "./router/compo-path.js";
import "./home/gn-home.js";
import "./subscribe/gn-subscribe.js";

component(
  "gn-app",
  withMarkup(
    () => html`
      <div>
        <compo-path path=${"/"} component=${"gn-home"}></compo-path>
        <compo-path path=${"/subscribe"} component=${"gn-subscribe"}></compo-path>
        <compo-path path=${"/login"} component=${"gn-login"}></compo-path>
      </div>
    `
  )
);
