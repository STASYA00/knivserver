"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityMap = exports.ProjectNameMap = exports.ProjectEndpointMap = exports.EventEndpointMap = exports.EventTargetMap = exports.EventFormatMap = exports.ProgramLinkMap = exports.EventYearMap = exports.EventCourseMap = exports.EventProgramMap = exports.EventTaksMap = exports.EventEntityMap = exports.EventProjectsMap = void 0;
const event_enum_1 = require("./event_enum");
const iaac_enum_1 = require("./iaac_enum");
const IAAC = {
    name: "IAAC",
    link: "https://iaac.net",
    logo: "https://iaac.net/wp-content/uploads/2023/02/iaac-logo-barcelona-286px.png",
};
const UMU = {
    name: "UMU",
    link: "https://www.umu.se/",
    logo: "https://www.umu.se/Static/img/umu-logo-left-neg-SE.svg",
};
const EventEndpointMap = new Map([
    [event_enum_1.EVENTS.WEB_EXPLAIN_ML, "web_explain_ml"],
    [event_enum_1.EVENTS.INTRO_TO_VP, "intro_to_vp"],
]);
exports.EventEndpointMap = EventEndpointMap;
const ProjectEndpointMap = new Map([
    [event_enum_1.PROJECTS.DBSCAN, "dbscan"],
    [event_enum_1.PROJECTS.EMBEDDINGS, "embeddings"],
    [event_enum_1.PROJECTS.LP, "linearprogramming"],
    [event_enum_1.PROJECTS.RANDOMFOREST, "randomforest"],
    [event_enum_1.PROJECTS.SVM, "svm"],
    [event_enum_1.PROJECTS.XGBOOST, "xgboost"],
]);
exports.ProjectEndpointMap = ProjectEndpointMap;
const ProjectNameMap = new Map([
    [event_enum_1.PROJECTS.DBSCAN, "DBSCAN"],
    [event_enum_1.PROJECTS.EMBEDDINGS, "Embeddings"],
    [event_enum_1.PROJECTS.LP, "Linear Programming"],
    [event_enum_1.PROJECTS.RANDOMFOREST, "Random Forest"],
    [event_enum_1.PROJECTS.SVM, "SVM"],
    [event_enum_1.PROJECTS.XGBOOST, "XGBoost"],
]);
exports.ProjectNameMap = ProjectNameMap;
const EventTaksMap = new Map([
    [event_enum_1.EVENTS.WEB_EXPLAIN_ML, "Create a webpage with an animated / interactive explanation of an ML algorithm of your choice to an [architect]. "],
    [event_enum_1.EVENTS.INTRO_TO_VP, "Choose one of the forms and follow the recipe to recreate it."],
]);
exports.EventTaksMap = EventTaksMap;
const EventTargetMap = new Map([
    [event_enum_1.EVENTS.WEB_EXPLAIN_ML, event_enum_1.TARGETS.STARTED],
    [event_enum_1.EVENTS.INTRO_TO_VP, event_enum_1.TARGETS.ZERO],
]);
exports.EventTargetMap = EventTargetMap;
const EventFormatMap = new Map([
    [event_enum_1.EVENTS.WEB_EXPLAIN_ML, event_enum_1.FORMATS.IB],
    [event_enum_1.EVENTS.INTRO_TO_VP, event_enum_1.FORMATS.GIB],
]);
exports.EventFormatMap = EventFormatMap;
const EventProjectsMap = new Map([
    [event_enum_1.EVENTS.WEB_EXPLAIN_ML, [event_enum_1.PROJECTS.DBSCAN, event_enum_1.PROJECTS.EMBEDDINGS, event_enum_1.PROJECTS.LP, event_enum_1.PROJECTS.RANDOMFOREST, event_enum_1.PROJECTS.SVM, event_enum_1.PROJECTS.XGBOOST]],
    [event_enum_1.EVENTS.INTRO_TO_VP, []],
]);
exports.EventProjectsMap = EventProjectsMap;
const EventEntityMap = new Map([
    [event_enum_1.EVENTS.WEB_EXPLAIN_ML, IAAC],
    [event_enum_1.EVENTS.INTRO_TO_VP, UMU],
]);
exports.EventEntityMap = EventEntityMap;
const EntityMap = new Map([
    ["iaac", IAAC],
    ["umu", UMU],
]);
exports.EntityMap = EntityMap;
const EventProgramMap = new Map([
    [event_enum_1.EVENTS.WEB_EXPLAIN_ML, iaac_enum_1.PROGRAMS.MAAI],
    [event_enum_1.EVENTS.INTRO_TO_VP, iaac_enum_1.PROGRAMS.ARCH],
]);
exports.EventProgramMap = EventProgramMap;
const EventCourseMap = new Map([
    [event_enum_1.EVENTS.WEB_EXPLAIN_ML, iaac_enum_1.COURSES.AI_ABE],
    [event_enum_1.EVENTS.INTRO_TO_VP, iaac_enum_1.COURSES.STUDIO2],
]);
exports.EventCourseMap = EventCourseMap;
const EventYearMap = new Map([
    [event_enum_1.EVENTS.WEB_EXPLAIN_ML, iaac_enum_1.YEAR.Y2425],
    [event_enum_1.EVENTS.INTRO_TO_VP, iaac_enum_1.YEAR.Y2425],
]);
exports.EventYearMap = EventYearMap;
const ProgramLinkMap = new Map([
    [iaac_enum_1.PROGRAMS.MAAI, "https://iaac.net/educational-programmes/masters-programmes/master-in-ai-for-architecture-and-built-environment/"],
    [iaac_enum_1.PROGRAMS.ARCH, "https://www.umu.se/utbildning/program/arkitektprogrammet/"],
]);
exports.ProgramLinkMap = ProgramLinkMap;
