jQuery("#simulation")
.on("mouseup", ".s-ad188ccd-9ce9-4207-a49e-60ff76215392 .mouseup", function(event, data) {
var jEvent, jFirer, cases;
if(jimUtil.isAlternateModeActive()) return;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Rectangle_9")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-ad188ccd-9ce9-4207-a49e-60ff76215392 #s-Rectangle_9": {
"attributes": {
"font-size": "0pt"
}
}
},{
"#s-ad188ccd-9ce9-4207-a49e-60ff76215392 #s-Rectangle_9 > .backgroundLayer > .colorLayer": {
"attributes": {
"background-color": "#282828"
}
}
} ],
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
}
})
.on("mousedown", ".s-ad188ccd-9ce9-4207-a49e-60ff76215392 .mousedown", function(event, data) {
var jEvent, jFirer, cases;
if(jimUtil.isAlternateModeActive()) return;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Rectangle_9")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-ad188ccd-9ce9-4207-a49e-60ff76215392 #s-Rectangle_9": {
"attributes": {
"font-size": "0pt"
}
}
},{
"#s-ad188ccd-9ce9-4207-a49e-60ff76215392 #s-Rectangle_9 > .backgroundLayer > .colorLayer": {
"attributes": {
"background-color": "#999999"
}
}
} ],
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
}
})
.on("pageload", ".s-ad188ccd-9ce9-4207-a49e-60ff76215392 .pageload", function(event, data) {
var jEvent, jFirer, cases;
if(jimUtil.isAlternateModeActive()) return;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-line-grey")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": [ "#s-line-purple" ],
"effect": {
"type": "slide",
"easing": "linear",
"duration": 1000,
"direction": "left"
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimPause",
"parameter": {
"pause": 1000
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-line-grey_1")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": [ "#s-line-purple_1" ],
"effect": {
"type": "slide",
"easing": "linear",
"duration": 1000,
"direction": "left"
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimPause",
"parameter": {
"pause": 1000
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-line-grey_2")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": [ "#s-line-purple_2" ],
"effect": {
"type": "slide",
"easing": "linear",
"duration": 1000,
"direction": "left"
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimPause",
"parameter": {
"pause": 1000
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-line-grey_3")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimShow",
"parameter": {
"target": [ "#s-line-purple_3" ],
"effect": {
"type": "slide",
"easing": "linear",
"duration": 1000,
"direction": "left"
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimPause",
"parameter": {
"pause": 1000
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
}
})
.on("mouseenter dragenter", ".s-ad188ccd-9ce9-4207-a49e-60ff76215392 .mouseenter", function(event, data) {
var jEvent, jFirer, cases;
if(jimUtil.isAlternateModeActive()) return;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#s-Rectangle_9") && jFirer.has(event.relatedTarget).length === 0) {
event.backupState = true;
event.target = jFirer;
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-ad188ccd-9ce9-4207-a49e-60ff76215392 #s-Rectangle_9": {
"attributes": {
"font-size": "0pt"
}
}
},{
"#s-ad188ccd-9ce9-4207-a49e-60ff76215392 #s-Rectangle_9 > .backgroundLayer > .colorLayer": {
"attributes": {
"background-color": "#5E5E5E"
}
}
} ],
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
jEvent.launchCases(cases);
}
})
.on("mouseleave dragleave", ".s-ad188ccd-9ce9-4207-a49e-60ff76215392 .mouseleave", function(event, data) {
var jEvent, jFirer, cases;
if(jimUtil.isAlternateModeActive()) return;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#s-Rectangle_9")) {
jEvent.undoCases(jFirer);
}
});