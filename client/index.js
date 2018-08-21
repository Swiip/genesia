import { component, withMarkup, html } from "/node_modules/compo/index.js";

import "/node_modules/compo/router.js";

import "./home/gn-home.js";
import "./subscribe/gn-subscribe.js";
import "./login/gn-login.js";

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
