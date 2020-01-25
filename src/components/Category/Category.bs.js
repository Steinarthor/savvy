// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as React from "react";
import * as ReasonReactRouter from "reason-react/src/ReasonReactRouter.js";
import * as CategoryStyles$Codex from "./CategoryStyles.bs.js";

function Category(Props) {
  var category = Props.category;
  return React.createElement("div", {
              className: CategoryStyles$Codex.category
            }, React.createElement("h1", {
                  onClick: (function (param) {
                      return ReasonReactRouter.push("/general");
                    })
                }, category[/* name */1]));
}

var make = Category;

export {
  make ,
  
}
/* react Not a pure module */
