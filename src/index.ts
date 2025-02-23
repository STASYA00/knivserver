// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import { bucket_url, website } from "./bear_enum";
import { SupportTeamMap } from "./supportTeam";

dotenv.config();

import { EntityMap, EventFormatMap, EventEndpointMap, EventEntityMap, EventTaksMap, EventTargetMap, EventProjectsMap, EventProgramMap, EventCourseMap, EventYearMap } from "./event_map";
import { EVENTS} from "./event_enum";
import { capFirst, get_keys } from "./utils";
import cors from "cors";
import { AECdata,ALC, Citylayers, Cryptopanties, GH } from "./catalog";

import { getArticles, getTools, getProjects, getEvents, getEventNames } from "./fetching/knivkit";
import { downloadIntoMemory, listFiles } from "./fetching/gcs";

const domain = process.env["DOMAIN"] || "http://localhost"; 


const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
  origin: ['https://learn.knivkit.com', "https://www.knivkit.com/"]
}));
// app.use(cors());


app.get("/", (req: Request, res: Response) => {
  res.send("Stanislava AB");
});

app.get('/articles', (req, res)=>{
  getArticles().then((as:string[])=>res.send(as))});

app.get('/shipped', (req, res)=>{
  res.send(getProjects());
});

app.get('/tools', (req, res)=>{
  getArticles().then(
    (articles:string[]) => {
      res.send([...articles, ...getTools().map(t=>t.name)])})}
    );

app.get('/articles/items', (req, res)=>{
  res.send(getArticles().then(articles=>articles.map((a:string)=>{
    return {"name": capFirst(a.split("_").join(" ")),
            "image": `${bucket_url}/${a}/cover.png`,
            "link": `${website}/article/${a}`}}
  )))
});
  
app.get('/shipped/items', (req, res)=>{
  res.send(getProjects())
});
  
app.get('/tools/items', (req, res)=>{
  getArticles().then(articles=>res.send([...articles.map(
        (a:string)=>{
          return {"name": capFirst(a.split("_").join(" ")),
                  "image": `${bucket_url}/articles/${a}/cover.png`,
                  "link": `${website}/article/${a}`}
        }
      ), ...getTools()]))});

app.get('/events/items', (req, res)=>{
  res.send(getEvents())
});

app.get('/item/:name', (req, res)=>{
  let item = req.params.name;
  let _items = [ALC, GH, AECdata, Citylayers, Cryptopanties].filter(c=>c.name.toLowerCase()==item.toLowerCase());
  _items.length==0 ? res.send({
    name: item,
    image: `${bucket_url}/${item}/cover.png`,
    link: `${website}/articles/${item}`
  }) : res.send(JSON.stringify(_items[0]));
});


app.get('/bears', (req, res)=>{
    listFiles("bears/all").catch(console.error).then(b=>res.send({"content":b}));
    ;
});

app.get('/bear/girls', (req, res)=>{

  listFiles("bears/all").then(bears =>res.send({"content":bears.filter((bear:string)=>bear.includes("girl"))}));
  ;
});

app.get('/bear/group', (req, res)=>{

  listFiles("bears/group").then(bears=>res.send({"content": bears[Math.ceil(Math.random()* (bears.length-1))]}));
  ;
});

app.get('/bear/groups', (req, res)=>{

  listFiles("bears/group").then(b=>res.send({"content":b}));
  ;
});


app.get('/bear/thematic/:bear', (req, res)=>{

  listFiles("bears/all").then(bears=>res.send({"content":bears.filter((b:string)=>b.includes(req.params.bear))}
  ));
  ;
});

app.get('/bear/guys', (req, res)=>{

  listFiles("bears/all").then(bears =>res.send({"content":bears.filter((bear:string)=>bear.includes("guy"))}));
  ;
});

app.get('/bear/neutral', (req, res)=>{

  listFiles("bears/all").then(bears =>res.send({"content":bears.filter((bear:string)=>bear.includes("neutral"))}));
  ;
});

app.get('/bear', (req, res)=>{

  listFiles("bears/all").catch(console.error).then(bears=>{
    res.send({"content": bears[Math.ceil(Math.random()* (bears.length-1))]})
  });
  ;
});

app.get('/bear/random/:amount', (req, res)=>{
  let amount = parseInt(req.params.amount);

  listFiles("bears/all").catch(console.error).then(bears=>{
    res.send({"content": [...Array(amount).keys()].map(b=>bears[Math.ceil(Math.random()* (bears.length-1))])});
  });
  ;
});

app.get('/article/:aid', (req, res)=>{
  downloadIntoMemory(`articles/${req.params.aid}/content.json`).catch(console.error).then(r=>res.send(JSON.parse(r)))
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
    getEventNames()
  );
  ;
});

app.get('/events/all', (req, res)=>{

  res.send(
    getEventNames().map((ev:EVENTS)=>{
      return {"name": ev,
        "projects": EventProjectsMap.get(ev),
        "endpoint": EventEndpointMap.get(ev)
      
      }
    }
  ))
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