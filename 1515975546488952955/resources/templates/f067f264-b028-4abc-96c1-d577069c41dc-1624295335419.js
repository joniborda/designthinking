jQuery("#simulation")
.on("click", ".t-f067f264-b028-4abc-96c1-d577069c41dc .click", function(event, data) {
var jEvent, jFirer, cases;
if(jimUtil.isAlternateModeActive()) return;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#t-Rectangle_1")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": [ "#t-Group_1" ],
"top": {
"type": "movetoposition",
"value": "350.0"
},
"left": {
"type": "movetoposition",
"value": "0.0"
},
"containment": false,
"effect": {
"type": "none",
"easing": "swing",
"duration": 500
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
},
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": [ "#t-Group_1" ],
"top": {
"type": "movebyoffset",
"value": "150.0"
},
"left": {
"type": "nomove"
},
"containment": false,
"effect": {
"type": "none",
"easing": "swing",
"duration": 500
}
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
} else if(jFirer.is("#t-Image_3")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": [ "#t-Group_2" ],
"top": {
"type": "movetoposition",
"value": "0.0"
},
"left": {
"type": "movetoposition",
"value": "0.0"
},
"containment": true,
"effect": {
"type": "none",
"easing": "swing",
"duration": 500
}
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
.on("mouseenter dragenter", ".t-f067f264-b028-4abc-96c1-d577069c41dc .mouseenter", function(event, data) {
var jEvent, jFirer, cases;
if(jimUtil.isAlternateModeActive()) return;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#t-Rectangle_1") && jFirer.has(event.relatedTarget).length === 0) {
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
"#t-f067f264-b028-4abc-96c1-d577069c41dc #t-Rectangle_1": {
"attributes": {
"font-size": "0pt"
}
}
},{
"#t-f067f264-b028-4abc-96c1-d577069c41dc #t-Rectangle_1 > .backgroundLayer > .colorLayer": {
"attributes": {
"background-color": "rgba(25,118,210,0.9)"
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
.on("mouseleave dragleave", ".t-f067f264-b028-4abc-96c1-d577069c41dc .mouseleave", function(event, data) {
var jEvent, jFirer, cases;
if(jimUtil.isAlternateModeActive()) return;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#t-Rectangle_1")) {
jEvent.undoCases(jFirer);
}
});