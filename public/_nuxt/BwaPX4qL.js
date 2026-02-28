import{b as e}from"./BLt7TXlb.js";function t(){let t=e(()=>e=>!e||!e.theme?!1:[`default`,`dark`,`celebration`,`celebrationNight`,`hack`,`zen`,`concrete`,`minimal`,`minimalDark`].includes(e.theme));function n(e){e?.debug&&console.warn(`Vue Data UI - "${e?.theme}" is not a valid theme.

Available themes:

- default (or "")
- dark
- celebration
- celebrationNight 
- hack
- zen
- concrete`)}return{isThemeValid:t,warnInvalidTheme:n}}export{t};