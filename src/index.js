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
dotenv_1.default.config();
// import neo4j, { DateTime } from 'neo4j-driver';
const storage_1 = require("@google-cloud/storage");
const domain = process.env["DOMAIN"] || "http://localhost";
const storage = new storage_1.Storage();
const bucket = "https://storage.googleapis.com/upplys_assets";
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
function listFiles() {
    return __awaiter(this, void 0, void 0, function* () {
        // Lists files in the bucket
        const [files] = yield storage.bucket(bucket).getFiles();
        console.log('Files:');
        files.forEach((file) => {
            console.log(file.name);
        });
    });
}
app.get("/", (req, res) => {
    res.send("Stanislava AB");
});
app.get('/bears', (req, res) => {
    res.send(listFiles().catch(console.error));
    ;
});
// app.get('/bear_generic', (req, res)=>{
//     listFilesByPrefix("bears/all").then(
//         (bears)=>{
//             let r = Math.floor(Math.random() * bears.length);
//             res.send(bears[r]);
//         }
//     )
//     ;
// });
app.get("/", (req, res) => {
    res.send("Stanislava AB");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
