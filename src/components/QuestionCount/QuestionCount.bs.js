// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as React from "react";

function QuestionCount(Props) {
  var count = Props.count;
  var total = Props.total;
  return React.createElement("div", undefined, React.createElement("p", undefined, "Question " + (String(count) + (" / " + String(total)))));
}

var make = QuestionCount;

export {
  make ,
  
}
/* react Not a pure module */
