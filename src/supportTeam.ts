import { ROLES} from "./iaac_enum"
import { bucket_url } from "./bear_enum";
import { TeamMember } from "./TeamMember";

const stasja:TeamMember = {"name": "Stanislava Fedorova",
    "link": "https://www.linkedin.com/in/stasja-fedorova/",
    "role": ROLES.PROF,
    "image": `${bucket_url}/bears/special/stasja.png`
};

const joscha:TeamMember = {"name": "Serjoscha Düring",
    "link": "https://www.linkedin.com/in/serjoscha-d%C3%BCring-920644173/",
    "role": ROLES.PROF,
    "image": `${bucket_url}/bears/special/joscha.png`
};


const angelos:TeamMember = {"name": "Angelos Chronis",
    "link": "https://www.linkedin.com/in/angeloschronis/",
    "role": ROLES.DIRECTOR,
    "image": `${bucket_url}/bears/special/angelos.png`
};

const SupportTeamMap = new Map<string, TeamMember>([
    ["stasja", stasja],
    ["joscha", joscha],
    ["angelos", angelos]
])

export {SupportTeamMap}