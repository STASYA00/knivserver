enum EVENTS{
    WEB_EXPLAIN_ML = "Web explanation of an ML algorithm",
    INTRO_TO_VP = "Introduction to Visual programming",
  }
  
enum TASKDETAILS {
  NAME = "name",
  TARGET = "target",
  TASK = "task"
}

enum TARGETS {
  ZERO = "Good starting point",
  STARTED = "can’t really code but have already tried something",
  OK = "Can write basic code",
  ADVANCED = ""
}

enum FORMATS {
  IB = "intensive block",
  LECTURE = "lecture",
  GL = "guest lecture",
  GIB = "guest intensive block",
  SEMINAR = "seminar",
  TECH_SUPPORT = "tech support"
}

enum PROJECTS {
    DBSCAN = "dbscan",
    EMBEDDINGS = "embeddings",
    LP = "linearprogramming",
    RANDOMFOREST = "randomforest",
    SVM = "svm",
    XGBOOST = "xgboost"
  }

export{EVENTS, PROJECTS, TARGETS, FORMATS}

