// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Create$Savvy from "../components/Create/Create.bs.js";
import * as Questions$Savvy from "../components/Questions/Questions.bs.js";
import * as QuizContext$Savvy from "../context/QuizContext.bs.js";

function QuizCategory(Props) {
  var title = Props.title;
  var categoryId = Props.categoryId;
  var match = React.useState((function () {
          return false;
        }));
  var setShowQuestions = match[1];
  var match$1 = React.useState((function () {
          return true;
        }));
  var setShowCreateQuiz = match$1[1];
  var toggleShowQuestions = function (param) {
    return Curry._1(setShowQuestions, (function (param) {
                  return true;
                }));
  };
  var toggleShowCreate = function (param) {
    return Curry._1(setShowCreateQuiz, (function (param) {
                  return false;
                }));
  };
  var quizContext = QuizContext$Savvy.useQuiz(/* () */0);
  React.useEffect((function () {
          Curry._1(quizContext[/* dispatch */1], /* ClearContext */1);
          return ;
        }), /* array */[]);
  return React.createElement(React.Fragment, undefined, React.createElement("h1", undefined, title), match$1[0] ? React.createElement(Create$Savvy.make, {
                    categoryId: categoryId,
                    toggleShowQuestions: toggleShowQuestions,
                    toggleShowCreate: toggleShowCreate
                  }) : null, match[0] ? React.createElement(Questions$Savvy.make, { }) : null);
}

var make = QuizCategory;

export {
  make ,
  
}
/* react Not a pure module */
