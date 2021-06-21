(function(window, undefined) {
var dictionary = {
"ad188ccd-9ce9-4207-a49e-60ff76215392": "Course",
"0ed0120f-327b-41e7-a5ce-2f4ca9fff67d": "Programa de benificios",
"15d0b1c7-4ee4-4d2a-8a6e-4770470e7269": "Video",
"9f58e4c3-8280-42f0-b742-05736e9b88c6": "Score",
"c4e08afc-2a15-4dbc-a7ab-0a2b2caa4ea3": "Login",
"d8582f5a-837a-4301-a3b8-5891e7805335": "Rule",
"a9ef09e4-1e4a-4b22-95ad-778c2a7cfcdb": "Tasks",
"8154ed3c-eb20-4784-9e51-9fac28601d3b": "Organigrama",
"cdd74eb2-e28b-4c1f-a698-92d8705c1acc": "Equipo",
"9c97c116-0442-42ff-9f13-0ec8bf1cf713": "Home",
"d12245cc-1680-458d-89dd-4f0d7fb22724": "Profile",
"857b1682-c246-4760-81d7-207ff11d8277": "Grupo",
"a99d477c-ef1e-4e5b-9208-df5496cf2e44": "Empty",
"f067f264-b028-4abc-96c1-d577069c41dc": "ChatBot",
"f39803f7-df02-4169-93eb-7547fb8c961a": "Toolbar",
"bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
};

var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
window.lookUpURL = function(fragment) {
var matches = uriRE.exec(fragment || "") || [],
folder = matches[2] || "",
canvas = matches[3] || "",
name, url;
if(dictionary.hasOwnProperty(canvas)) { /* search by name */
url = folder + "/" + canvas;
}
return url;
};

window.lookUpName = function(fragment) {
var matches = uriRE.exec(fragment || "") || [],
folder = matches[2] || "",
canvas = matches[3] || "",
name, canvasName;
if(dictionary.hasOwnProperty(canvas)) { /* search by name */
canvasName = dictionary[canvas];
}
return canvasName;
};
})(window);