// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import { THEMATIC_BEARS } from "./bear_enum";
import { SupportTeamMap } from "./supportTeam";

dotenv.config();

// import neo4j, { DateTime } from 'neo4j-driver';
import {Storage, File} from '@google-cloud/storage';
import { EntityMap, EventFormatMap, EventEndpointMap, EventEntityMap, EventTaksMap, EventTargetMap, EventProjectsMap, EventProgramMap, EventCourseMap, EventYearMap } from "./event_map";
import { EVENTS } from "./event_enum";
import { get_keys, onlyUnique } from "./utils";
import { Console } from "console";

const domain = process.env["DOMAIN"] || "http://localhost"; 
const storage = new Storage();
const bucket = "upplys_assets";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

async function listFiles(prefix:string="") {
  // Lists files in the bucket
  const options = {
    prefix: prefix,
  };
  
  const [files]: any[] = await storage.bucket(bucket).getFiles(options);

  return files.map((file: any) => file.name);
}

async function downloadIntoMemory(fname:string) {
  // Downloads the file into a buffer in memory.
  
  return await storage.bucket(bucket).file(fname).download().then(res=>res.toString());
  }

app.get("/", (req: Request, res: Response) => {
  res.send("Stanislava AB");
});

app.get('/articles', (req, res)=>{
  listFiles("articles").catch(console.error).then(b=>res.send(b.map((a:string)=>a.split("/")[1]).filter(onlyUnique).filter((a:string)=>a.length>0)));
  ;
});


app.get('/bears', (req, res)=>{
    listFiles("bears/all").catch(console.error).then(b=>res.send(b));
    ;
});

app.get('/bear/girls', (req, res)=>{

  listFiles("bears/all").then(bears =>res.send(bears.filter((bear:string)=>bear.includes("girl"))));
  ;
});

app.get('/bear/group', (req, res)=>{

  listFiles("bears/group").then(b=>res.send(b));
  ;
});

app.get('/bear/thematic/:bear', (req, res)=>{

  listFiles("bears/all").then(bears=>res.send(bears.filter((b:string)=>b.includes(req.params.bear))
  ));
  ;
});

app.get('/bear/guys', (req, res)=>{

  listFiles("bears/all").then(bears =>res.send(bears.filter((bear:string)=>bear.includes("guy"))));
  ;
});

app.get('/bear/neutral', (req, res)=>{

  listFiles("bears/all").then(bears =>res.send(bears.filter((bear:string)=>bear.includes("neutral"))));
  ;
});

app.get('/bear', (req, res)=>{

  listFiles("bears/all").catch(console.error).then(bears=>{
    res.send(bears[Math.ceil(Math.random()* (bears.length-1))])
  });
  ;
});

app.get('/article/:aid', (req, res)=>{
  downloadIntoMemory(`articles/${req.params.aid}/content.html`).catch(console.error).then(r=>res.send(r))
  ;
});

app.get('/entity/:name', (req, res)=>{

  res.send(
    JSON.stringify(EntityMap.get(req.params.name.toLowerCase()))
  );
  ;
});

app.get('/events', (req, res)=>{

  res.send(
    [EVENTS.WEB_EXPLAIN_ML, EVENTS.INTRO_TO_VP]
  );
  ;
});

app.get('/events/:name', (req, res)=>{
  let ev:EVENTS = get_keys(EVENTS, req.params.name)[0];
  let format = EventFormatMap.get(ev)!;
  let descr = EventTaksMap.get(ev)!;
  let target = EventTargetMap.get(ev)!;
  res.send(
    
  {
    name: ev,
    format: format,
    descr: descr,
    target: target
  }
  );
  ;
});

app.get('/events/:name/projects', (req, res)=>{
  let ev:EVENTS = get_keys(EVENTS, req.params.name)[0];
  res.send(
    EventProjectsMap.get(ev)
  );
  ;
});

app.get('/events/:name/program', (req, res)=>{
  let ev:EVENTS = get_keys(EVENTS, req.params.name)[0];
  res.send(
    EventProgramMap.get(ev)
  );
  ;
});

app.get('/events/:name/course', (req, res)=>{
  let ev:EVENTS = get_keys(EVENTS, req.params.name)[0];
  res.send(
    EventCourseMap.get(ev)
  );
  ;
});

app.get('/events/:name/entity', (req, res)=>{
  let ev:EVENTS = get_keys(EVENTS, req.params.name)[0];
  res.send(
    EventEntityMap.get(ev)
  );
  ;
});

app.get('/events/:name/endpoint', (req, res)=>{
  let ev:EVENTS = get_keys(EVENTS, req.params.name)[0];
  res.send(
    EventEndpointMap.get(ev)
  );
  ;
});
app.get('/events/:name/year', (req, res)=>{
  let ev:EVENTS = get_keys(EVENTS, req.params.name)[0];
  res.send(
    EventYearMap.get(ev)
  );
  ;
});

app.get('/support/:name', (req, res)=>{

  res.send(
    JSON.stringify(SupportTeamMap.get(req.params.name.toLowerCase()))
  );
  ;
});


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});