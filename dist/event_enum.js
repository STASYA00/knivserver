"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FORMATS = exports.TARGETS = exports.PROJECTS = exports.EVENTS = void 0;
var EVENTS;
(function (EVENTS) {
    EVENTS["WEB_EXPLAIN_ML"] = "Web explanation of an ML algorithm";
    EVENTS["INTRO_TO_VP"] = "Introduction to Visual programming";
})(EVENTS || (exports.EVENTS = EVENTS = {}));
var TASKDETAILS;
(function (TASKDETAILS) {
    TASKDETAILS["NAME"] = "name";
    TASKDETAILS["TARGET"] = "target";
    TASKDETAILS["TASK"] = "task";
})(TASKDETAILS || (TASKDETAILS = {}));
var TARGETS;
(function (TARGETS) {
    TARGETS["ZERO"] = "Good starting point";
    TARGETS["STARTED"] = "can\u2019t really code but have already tried something";
    TARGETS["OK"] = "Can write basic code";
    TARGETS["ADVANCED"] = "";
})(TARGETS || (exports.TARGETS = TARGETS = {}));
var FORMATS;
(function (FORMATS) {
    FORMATS["IB"] = "intensive block";
    FORMATS["LECTURE"] = "lecture";
    FORMATS["GL"] = "guest lecture";
    FORMATS["GIB"] = "guest intensive block";
    FORMATS["SEMINAR"] = "seminar";
    FORMATS["TECH_SUPPORT"] = "tech support";
})(FORMATS || (exports.FORMATS = FORMATS = {}));
var PROJECTS;
(function (PROJECTS) {
    PROJECTS["DBSCAN"] = "dbscan";
    PROJECTS["EMBEDDINGS"] = "embeddings";
    PROJECTS["LP"] = "linearprogramming";
    PROJECTS["RANDOMFOREST"] = "randomforest";
    PROJECTS["SVM"] = "svm";
    PROJECTS["XGBOOST"] = "xgboost";
})(PROJECTS || (exports.PROJECTS = PROJECTS = {}));
