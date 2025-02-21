import { Entity } from "./entity";
import { TARGETS, PROJECTS, EVENTS, FORMATS} from "./event_enum";

import { PROGRAMS, COURSES, YEAR } from "./iaac_enum";


const IAAC:Entity = {
        name: "IAAC",
        link: "https://iaac.net",
        logo: "https://iaac.net/wp-content/uploads/2023/02/iaac-logo-barcelona-286px.png",
    }

const UMU:Entity = {
    name: "UMU",
    link: "https://www.umu.se/",
    logo: "https://www.umu.se/Static/img/umu-logo-left-neg-SE.svg",
}

const EventEndpointMap:Map<EVENTS, string> = new Map([
    [EVENTS.WEB_EXPLAIN_ML, "web_explain_ml"],
    [EVENTS.INTRO_TO_VP, "intro_to_vp"],
  ]
  );

  const ProjectEndpointMap:Map<PROJECTS, string> = new Map([
    [PROJECTS.DBSCAN, "dbscan"],
    [PROJECTS.EMBEDDINGS, "embeddings"],
    [PROJECTS.LP, "linearprogramming"],
    [PROJECTS.RANDOMFOREST, "randomforest"],
    [PROJECTS.SVM, "svm"],
    [PROJECTS.XGBOOST, "xgboost"],
  ]
  );

  const ProjectNameMap:Map<PROJECTS, string> = new Map([
    [PROJECTS.DBSCAN, "DBSCAN"],
    [PROJECTS.EMBEDDINGS, "Embeddings"],
    [PROJECTS.LP, "Linear Programming"],
    [PROJECTS.RANDOMFOREST, "Random Forest"],
    [PROJECTS.SVM, "SVM"],
    [PROJECTS.XGBOOST, "XGBoost"],
  ]
  );

  const EventTaksMap: Map<EVENTS, string> = new Map(
    [
        [EVENTS.WEB_EXPLAIN_ML, "Create a webpage with an animated / interactive explanation of an ML algorithm of your choice to an [architect]. "],
        [EVENTS.INTRO_TO_VP, "Choose one of the forms and follow the recipe to recreate it."],
    ]
  );

  const EventTargetMap: Map<EVENTS, TARGETS> = new Map(
    [
        [EVENTS.WEB_EXPLAIN_ML, TARGETS.STARTED],
        [EVENTS.INTRO_TO_VP, TARGETS.ZERO],
    ]
  );

  const EventFormatMap: Map<EVENTS, FORMATS> = new Map(
    [
        [EVENTS.WEB_EXPLAIN_ML, FORMATS.IB],
        [EVENTS.INTRO_TO_VP, FORMATS.GIB],
    ]
  );
  

const EventProjectsMap:Map<EVENTS, PROJECTS[]> = new Map([
    [EVENTS.WEB_EXPLAIN_ML, [PROJECTS.DBSCAN, PROJECTS.EMBEDDINGS, PROJECTS.LP, PROJECTS.RANDOMFOREST, PROJECTS.SVM, PROJECTS.XGBOOST]],
    [EVENTS.INTRO_TO_VP, []],
  ]
  );

const EventEntityMap:Map<EVENTS, Entity> = new Map([
    [EVENTS.WEB_EXPLAIN_ML, IAAC],
    [EVENTS.INTRO_TO_VP, UMU],
    ]
);

const EntityMap:Map<string, Entity> = new Map([
  ["iaac", IAAC],
  ["umu", UMU],
  ]
);

const EventProgramMap:Map<EVENTS, PROGRAMS> = new Map([
    [EVENTS.WEB_EXPLAIN_ML, PROGRAMS.MAAI],
    [EVENTS.INTRO_TO_VP, PROGRAMS.ARCH],
    ]
);

const EventCourseMap:Map<EVENTS, COURSES> = new Map([
    [EVENTS.WEB_EXPLAIN_ML, COURSES.AI_ABE],
    [EVENTS.INTRO_TO_VP, COURSES.STUDIO2],
    ]
);

const EventYearMap:Map<EVENTS, YEAR> = new Map([
    [EVENTS.WEB_EXPLAIN_ML, YEAR.Y2425],
    [EVENTS.INTRO_TO_VP, YEAR.Y2425],
    ]
);

const ProgramLinkMap:Map<PROGRAMS, string> = new Map([
    [PROGRAMS.MAAI, "https://iaac.net/educational-programmes/masters-programmes/master-in-ai-for-architecture-and-built-environment/"],
    [PROGRAMS.ARCH, "https://www.umu.se/utbildning/program/arkitektprogrammet/"],
    ]
);


  export {EventProjectsMap, EventEntityMap, EventTaksMap, EventProgramMap, EventCourseMap, EventYearMap, ProgramLinkMap, EventFormatMap, EventTargetMap, EventEndpointMap, ProjectEndpointMap, ProjectNameMap, EntityMap}