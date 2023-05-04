export const SITE = {
  title: "Mu-PRO Knowledge",
  description: "Your website description.",
  defaultLanguage: "en-us",
} as const;

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/muprosoftware/knowledge/blob/main/public/mupro-leftright.png?raw=true",
    alt:
      "MuPRO software - We provide mesoscale materials simulation solutions."
  },
  twitter: "muprosoftware",
};

export const KNOWN_LANGUAGES = {
  English: "en",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);
export const GITHUB_EDIT_URL = `https://github.com/muprosoftware/knowledge/edit/main`;
export const COMMUNITY_INVITE_URL = `https://github.com/orgs/muprosoftware/discussions`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "knowledge-muprosoftware",
  appId: "ESNTMT1QML",
  apiKey: "2e8ab46bb2a1427e9612eb66f7de7666",
};

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  en: {
    "Prepare": [
      { text: "Introduction", link: "en/introduction" },
      // { text: "For users", link: "en/prepare/user" },
      { text: "For developers", link: "en/prepare/developer" },
    ],
    // "Pre-simulation":[
    //   {text: "Configuration",link:"en/pre-simulation/input"},
    //   {text: "Structure",link:"en/pre-simulation/structure"}
    // ],
    "Run simulation":[
      {text: "Start simulation",link:"en/simulation/run"},
      {text: "Q&A",link:"en/simulation/questions"}
    ],
    // "Post-simulation":[
    //   {text:"Visualization",link:"en/post-simulation/visualize"}
    // ],
    "Programming":[
      {text:"Collaboration",link:"en/programming/contribute"},
      {text:"Best practices",link:"en/programming/recommendation"}
    ],
  },
};
