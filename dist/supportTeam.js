"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportTeamMap = void 0;
const iaac_enum_1 = require("./iaac_enum");
const bear_enum_1 = require("./bear_enum");
const stasja = { "name": "Stanislava Fedorova",
    "link": "https://www.linkedin.com/in/stasja-fedorova/",
    "role": iaac_enum_1.ROLES.PROF,
    "image": `${bear_enum_1.bucket_url}/bears/special/stasja.png`
};
const joscha = { "name": "Serjoscha Düring",
    "link": "https://www.linkedin.com/in/serjoscha-d%C3%BCring-920644173/",
    "role": iaac_enum_1.ROLES.PROF,
    "image": `${bear_enum_1.bucket_url}/bears/special/joscha.png`
};
const angelos = { "name": "Angelos Chronis",
    "link": "https://www.linkedin.com/in/angeloschronis/",
    "role": iaac_enum_1.ROLES.DIRECTOR,
    "image": `${bear_enum_1.bucket_url}/bears/special/angelos.png`
};
const SupportTeamMap = new Map([
    ["stasja", stasja],
    ["joscha", joscha],
    ["angelos", angelos]
]);
exports.SupportTeamMap = SupportTeamMap;
