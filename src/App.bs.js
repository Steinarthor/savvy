// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as List from "bs-platform/lib/es6/list.js";
import * as $$Array from "bs-platform/lib/es6/array.js";
import * as React from "react";
import * as Category$Codex from "./components/Category/Category.bs.js";
import * as Categories$Codex from "./components/Categories/Categories.bs.js";

function App(Props) {
  return React.createElement(Categories$Codex.make, {
              children: (function (categoryList) {
                  return $$Array.of_list(List.map((function (category) {
                                    return React.createElement(Category$Codex.make, {
                                                category: category,
                                                key: String(category[/* id */0])
                                              });
                                  }), categoryList));
                })
            });
}

var make = App;

export {
  make ,
  
}
/* react Not a pure module */
