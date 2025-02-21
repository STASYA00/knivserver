"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = exports.Maai = exports.YEAR = exports.ROLES = exports.COURSES = exports.PROGRAMS = exports.GENDER = void 0;
class Maai {
    constructor() {
        this.name = "MAAI program"; //"Master in AI for Architecture & the Built Environment"
        this.link = "https://iaac.net/educational-programmes/masters-programmes/master-in-ai-for-architecture-and-built-environment/";
    }
}
exports.Maai = Maai;
class Course {
    constructor(name) {
        this.name = name;
    }
}
exports.Course = Course;
var GENDER;
(function (GENDER) {
    GENDER["F"] = "girl";
    GENDER["M"] = "guy";
    GENDER["N"] = "neutral";
})(GENDER || (exports.GENDER = GENDER = {}));
var COURSES;
(function (COURSES) {
    COURSES["AI_ABE"] = "AI for Architecture & the Built Environment";
    COURSES["STUDIO2"] = "Architecture Design Studio II";
})(COURSES || (exports.COURSES = COURSES = {}));
var YEAR;
(function (YEAR) {
    YEAR["Y2223"] = "2022/23";
    YEAR["Y2324"] = "2023/24";
    YEAR["Y2425"] = "2024/25";
    YEAR["Y2526"] = "2025/26";
})(YEAR || (exports.YEAR = YEAR = {}));
var PROGRAMS;
(function (PROGRAMS) {
    PROGRAMS["MAAI"] = "MAAI program";
    PROGRAMS["ARCH"] = "Arkitektprogrammet 300hp";
})(PROGRAMS || (exports.PROGRAMS = PROGRAMS = {}));
var ROLES;
(function (ROLES) {
    ROLES["DIRECTOR"] = "program director";
    ROLES["PROF"] = "professor";
    ROLES["INV_PROF"] = "invited professor";
    ROLES["COORDINATOR"] = "coordinator";
    ROLES["STUDENT"] = "student";
})(ROLES || (exports.ROLES = ROLES = {}));
