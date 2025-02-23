import { listFiles } from "./gcs";
import { onlyUnique } from "../utils";
import { EVENTS } from "../event_enum";
import {ALC, GH, AECdata, Citylayers, Cryptopanties} from "../catalog";

 async function getArticles(){
  return listFiles("articles").catch(console.error).then(
    b=>
     { 
      return b==undefined ? [] : b.map((a:string)=>a.split("/")[1]).filter(onlyUnique).filter((a:string)=>a.length>0);
 } )}

 function getTools(){
  return [ALC,GH,AECdata];
 }

function getProjects(){
  return [Citylayers, Cryptopanties]
}

function getEventNames(){
  return [EVENTS.WEB_EXPLAIN_ML, EVENTS.INTRO_TO_VP];
}

function getEvents(){
  return {
    "name": EVENTS.WEB_EXPLAIN_ML,
    "link": "/events/web_explain_ml",
    "image": "https://storage.googleapis.com/upplys_assets/activities/iaac_hackathon2501/randomforest/cover.png"
  };
}

export {getArticles, getTools, getProjects, getEvents, getEventNames}