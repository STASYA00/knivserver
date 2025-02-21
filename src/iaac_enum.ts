



class Maai{
    name:string;
    link: string;
    constructor(){
        this.name="MAAI program"; //"Master in AI for Architecture & the Built Environment"
        this.link="https://iaac.net/educational-programmes/masters-programmes/master-in-ai-for-architecture-and-built-environment/"
    }
}

class Course{
    name:string;
    constructor(name:string){
        this.name=name;
    }
}

enum GENDER{
    F = "girl",
    M = "guy",
    N = "neutral",
  }
  
  enum COURSES{
    AI_ABE = "AI for Architecture & the Built Environment",
    STUDIO2 = "Architecture Design Studio II"
  }
  
  enum YEAR{
    Y2223 = "2022/23",
    Y2324 = "2023/24",
    Y2425 = "2024/25",
    Y2526 = "2025/26",
  }
  
  enum PROGRAMS{
    MAAI = "MAAI program", //AI for Architecture & the Built Environment
    ARCH = "Arkitektprogrammet 300hp"
  }
  
  enum ROLES{
    DIRECTOR = "program director",
    PROF = "professor",
    INV_PROF = "invited professor",
    COORDINATOR = "coordinator",
    STUDENT = "student"
  }
  


  
  export{GENDER, PROGRAMS, COURSES, ROLES, YEAR, Maai, Course}