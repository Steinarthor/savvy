// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Input$Savvy from "../Input/Input.bs.js";
import * as Button$Savvy from "../Button/Button.bs.js";
import * as Select$Savvy from "../Select/Select.bs.js";
import * as Network$Savvy from "../../network/Network.bs.js";
import * as QuizContext$Savvy from "../../context/QuizContext.bs.js";

function Create(Props) {
  var categoryId = Props.categoryId;
  var toggleShowQuestions = Props.toggleShowQuestions;
  var toggleShowCreate = Props.toggleShowCreate;
  var quizContext = QuizContext$Savvy.useQuiz(/* () */0);
  var createQuiz = function (param) {
    Network$Savvy.fetchQuestions(quizContext[/* state */0][/* numberOfQuestions */4], categoryId, quizContext[/* state */0][/* token */0], quizContext[/* state */0][/* quizDifficulty */5], quizContext[/* state */0][/* quizType */6]).then((function (res) {
            Curry._1(quizContext[/* dispatch */1], /* SetQuestions */Block.__(3, [res[/* results */1]]));
            Curry._1(quizContext[/* dispatch */1], /* MakeStream */0);
            Curry._1(quizContext[/* dispatch */1], /* FetchingQuestions */Block.__(6, [false]));
            return Promise.resolve(/* () */0);
          }));
    return /* () */0;
  };
  var selectDiffultLevel = function (level) {
    return Curry._1(quizContext[/* dispatch */1], /* SetQuizDifficulty */Block.__(1, [level]));
  };
  var setQuestionType = function (quizType) {
    return Curry._1(quizContext[/* dispatch */1], /* SetQuizType */Block.__(2, [quizType]));
  };
  return React.createElement(React.Fragment, undefined, React.createElement(Input$Savvy.make, {
                  value: String(quizContext[/* state */0][/* numberOfQuestions */4]),
                  onChange: (function ($$event) {
                      return Curry._1(quizContext[/* dispatch */1], /* SetNumberOfQuestions */Block.__(0, [$$event.target.value]));
                    }),
                  type_: "number",
                  isValid: true,
                  placeholder: "Number of questions",
                  required: true,
                  max: "50"
                }), React.createElement(Select$Savvy.make, {
                  options: /* :: */[
                    /* record */[
                      /* value */"any",
                      /* label */"Any"
                    ],
                    /* :: */[
                      /* record */[
                        /* value */"easy",
                        /* label */"Easy"
                      ],
                      /* :: */[
                        /* record */[
                          /* value */"medium",
                          /* label */"Medium"
                        ],
                        /* :: */[
                          /* record */[
                            /* value */"hard",
                            /* label */"Hard"
                          ],
                          /* [] */0
                        ]
                      ]
                    ]
                  ],
                  onChange: selectDiffultLevel
                }), React.createElement(Select$Savvy.make, {
                  options: /* :: */[
                    /* record */[
                      /* value */"any",
                      /* label */"Any"
                    ],
                    /* :: */[
                      /* record */[
                        /* value */"multiple",
                        /* label */"Multiple"
                      ],
                      /* :: */[
                        /* record */[
                          /* value */"boolean",
                          /* label */"Boolean"
                        ],
                        /* [] */0
                      ]
                    ]
                  ],
                  onChange: setQuestionType
                }), React.createElement(Button$Savvy.make, {
                  text: "Create Quiz",
                  type_: "button",
                  onClick: (function (param) {
                      Curry._1(quizContext[/* dispatch */1], /* FetchingQuestions */Block.__(6, [true]));
                      createQuiz(/* () */0);
                      Curry._1(toggleShowCreate, /* () */0);
                      return Curry._1(toggleShowQuestions, /* () */0);
                    }),
                  disabled: false
                }));
}

var make = Create;

export {
  make ,
  
}
/* react Not a pure module */
