"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const supportTeam_1 = require("./supportTeam");
dotenv_1.default.config();
// import neo4j, { DateTime } from 'neo4j-driver';
const storage_1 = require("@google-cloud/storage");
const event_map_1 = require("./event_map");
const event_enum_1 = require("./event_enum");
const utils_1 = require("./utils");
const domain = process.env["DOMAIN"] || "http://localhost";
const storage = new storage_1.Storage();
const bucket = "upplys_assets";
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
function listFiles() {
    return __awaiter(this, arguments, void 0, function* (prefix = "") {
        // Lists files in the bucket
        const options = {
            prefix: prefix,
        };
        const [files] = yield storage.bucket(bucket).getFiles(options);
        return files.map((file) => file.name);
    });
}
function downloadIntoMemory(fname) {
    return __awaiter(this, void 0, void 0, function* () {
        // Downloads the file into a buffer in memory.
        return yield storage.bucket(bucket).file(fname).download().then(res => res.toString());
    });
}
app.get("/", (req, res) => {
    res.send("Stanislava AB");
});
app.get('/articles', (req, res) => {
    listFiles("articles").catch(console.error).then(b => res.send(b.map((a) => a.split("/")[1]).filter(utils_1.onlyUnique).filter((a) => a.length > 0)));
    ;
});
app.get('/bears', (req, res) => {
    listFiles("bears/all").catch(console.error).then(b => res.send(b));
    ;
});
app.get('/bear/girls', (req, res) => {
    listFiles("bears/all").then(bears => res.send(bears.filter((bear) => bear.includes("girl"))));
    ;
});
app.get('/bear/group', (req, res) => {
    listFiles("bears/group").then(b => res.send(b));
    ;
});
app.get('/bear/thematic/:bear', (req, res) => {
    listFiles("bears/all").then(bears => res.send(bears.filter((b) => b.includes(req.params.bear))));
    ;
});
app.get('/bear/guys', (req, res) => {
    listFiles("bears/all").then(bears => res.send(bears.filter((bear) => bear.includes("guy"))));
    ;
});
app.get('/bear/neutral', (req, res) => {
    listFiles("bears/all").then(bears => res.send(bears.filter((bear) => bear.includes("neutral"))));
    ;
});
app.get('/bear', (req, res) => {
    listFiles("bears/all").catch(console.error).then(bears => {
        res.send(bears[Math.ceil(Math.random() * (bears.length - 1))]);
    });
    ;
});
app.get('/article/:aid', (req, res) => {
    downloadIntoMemory(`articles/${req.params.aid}/content.html`).catch(console.error).then(r => res.send(r));
});
app.get('/entity/:name', (req, res) => {
    res.send(JSON.stringify(event_map_1.EntityMap.get(req.params.name.toLowerCase())));
    ;
});
app.get('/events', (req, res) => {
    res.send([event_enum_1.EVENTS.WEB_EXPLAIN_ML, event_enum_1.EVENTS.INTRO_TO_VP]);
    ;
});
app.get('/events/:name', (req, res) => {
    let ev = (0, utils_1.get_keys)(event_enum_1.EVENTS, req.params.name)[0];
    let format = event_map_1.EventFormatMap.get(ev);
    let descr = event_map_1.EventTaksMap.get(ev);
    let target = event_map_1.EventTargetMap.get(ev);
    res.send({
        name: ev,
        format: format,
        descr: descr,
        target: target
    });
    ;
});
app.get('/events/:name/projects', (req, res) => {
    let ev = (0, utils_1.get_keys)(event_enum_1.EVENTS, req.params.name)[0];
    res.send(event_map_1.EventProjectsMap.get(ev));
    ;
});
app.get('/events/:name/program', (req, res) => {
    let ev = (0, utils_1.get_keys)(event_enum_1.EVENTS, req.params.name)[0];
    res.send(event_map_1.EventProgramMap.get(ev));
    ;
});
app.get('/events/:name/course', (req, res) => {
    let ev = (0, utils_1.get_keys)(event_enum_1.EVENTS, req.params.name)[0];
    res.send(event_map_1.EventCourseMap.get(ev));
    ;
});
app.get('/events/:name/entity', (req, res) => {
    let ev = (0, utils_1.get_keys)(event_enum_1.EVENTS, req.params.name)[0];
    res.send(event_map_1.EventEntityMap.get(ev));
    ;
});
app.get('/events/:name/endpoint', (req, res) => {
    let ev = (0, utils_1.get_keys)(event_enum_1.EVENTS, req.params.name)[0];
    res.send(event_map_1.EventEndpointMap.get(ev));
    ;
});
app.get('/events/:name/year', (req, res) => {
    let ev = (0, utils_1.get_keys)(event_enum_1.EVENTS, req.params.name)[0];
    res.send(event_map_1.EventYearMap.get(ev));
    ;
});
app.get('/support/:name', (req, res) => {
    res.send(JSON.stringify(supportTeam_1.SupportTeamMap.get(req.params.name.toLowerCase())));
    ;
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
