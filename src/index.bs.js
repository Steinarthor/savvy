// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Css from "bs-css/src/Css.js";
import * as React from "react";
import * as ReactDOMRe from "reason-react/src/ReactDOMRe.js";
import * as Router$Codex from "./Router.bs.js";

var globalFont = Css.fontFace("MontserratMedium", /* :: */[
      Css.url("./src/fonts/Montserrat-Light.otf"),
      /* [] */0
    ], undefined, undefined, /* () */0);

Css.$$global("html", /* :: */[
      Css.boxSizing(Css.borderBox),
      /* :: */[
        Css.selector("*, *:before, *:after", /* :: */[
              Css.boxSizing(Css.inherit_),
              /* :: */[
                Css.fontFamily(globalFont),
                /* [] */0
              ]
            ]),
        /* [] */0
      ]
    ]);

Css.$$global("body", /* :: */[
      Css.fontFamily(globalFont),
      /* :: */[
        Css.margin(Css.px(0)),
        /* [] */0
      ]
    ]);

ReactDOMRe.renderToElementWithId(React.createElement(Router$Codex.make, { }), "app");

export {
  globalFont ,
  
}
/* globalFont Not a pure module */
