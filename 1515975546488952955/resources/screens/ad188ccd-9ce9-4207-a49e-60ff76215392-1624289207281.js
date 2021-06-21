jQuery("#simulation")
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
},
{
"action": "jimHide",
"parameter": {
"target": [ "#s-Progress-bar" ],
"effect": {
"type": "fade",
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
},
{
"action": "jimHide",
"parameter": {
"target": [ "#s-Progress-bar_1" ],
"effect": {
"type": "fade",
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
},
{
"action": "jimHide",
"parameter": {
"target": [ "#s-Progress-bar_2" ],
"effect": {
"type": "fade",
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
},
{
"action": "jimHide",
"parameter": {
"target": [ "#s-Progress-bar_3" ],
"effect": {
"type": "fade",
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
});