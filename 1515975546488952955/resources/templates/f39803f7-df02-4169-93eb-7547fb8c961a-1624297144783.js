jQuery("#simulation")
.on("click", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .click", function(event, data) {
var jEvent, jFirer, cases;
if(jimUtil.isAlternateModeActive()) return;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#t-f39803f7-df02-4169-93eb-7547fb8c961a")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": [ "#t-Menu-maximum-width" ],
"top": {
"type": "movetoposition",
"value": "0.0"
},
"left": {
"type": "movetoposition",
"value": "-285.0"
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
} else if(jFirer.is("#t-Image_1")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": [ "#t-Menu-maximum-width" ],
"top": {
"type": "movetoposition",
"value": "0.0"
},
"left": {
"type": "movetoposition",
"value": "1.0"
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
} else if(jFirer.is("#t-Image_2")) {
cases = [
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "variable",
"element": "showNotificaciones"
},"0" ]
},
"actions": [
{
"action": "jimShow",
"parameter": {
"target": [ "#t-Bubble-top-title" ]
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"variable": [ "showNotificaciones" ],
"value": "1"
},
"exectype": "serial",
"delay": 0
}
]
},
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": [ "#t-Bubble-top-title" ]
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimSetValue",
"parameter": {
"variable": [ "showNotificaciones" ],
"value": "0"
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
"action": "jimNavigation",
"parameter": {
"target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
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
} else if(jFirer.is("#t-Item_1")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Item_1": {
"attributes": {
"font-size": "0pt"
}
}
},{
"#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Item_1 > .backgroundLayer > .colorLayer": {
"attributes": {
"background-color": "#F0E8FC"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Item_1": {
"attributes": {
"font-size": "0pt"
}
}
},{
"#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Item_1 > .backgroundLayer > .colorLayer": {
"attributes": {
"background-color": "#FFFFFF"
}
}
} ],
"exectype": "timed",
"delay": 500
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
} else if(jFirer.is("#t-Item_2")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
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
} else if(jFirer.is("#t-Item_3")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/ad188ccd-9ce9-4207-a49e-60ff76215392"
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
} else if(jFirer.is("#t-Item_4")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/0ed0120f-327b-41e7-a5ce-2f4ca9fff67d"
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
} else if(jFirer.is("#t-Item_5")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/a9ef09e4-1e4a-4b22-95ad-778c2a7cfcdb"
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
} else if(jFirer.is("#t-Item_6")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/857b1682-c246-4760-81d7-207ff11d8277"
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
} else if(jFirer.is("#t-Item_7")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/cdd74eb2-e28b-4c1f-a698-92d8705c1acc"
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
} else if(jFirer.is("#t-Item_8")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/d8582f5a-837a-4301-a3b8-5891e7805335"
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
} else if(jFirer.is("#t-Item_9")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
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
} else if(jFirer.is("#t-Item_10")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/8154ed3c-eb20-4784-9e51-9fac28601d3b"
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
} else if(jFirer.is("#t-Paragraph_1")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
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
} else if(jFirer.is("#t-Rectangle_2")) {
cases = [
{
"blocks": [
{
"condition": {
"action": "jimEquals",
"parameter": [ {
"datatype": "variable",
"element": "chatBoxVisible"
},"1" ]
},
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": [ "chatBoxVisible" ],
"value": "0"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimMove",
"parameter": {
"target": [ "#t-Group_2" ],
"top": {
"type": "movebyoffset",
"value": "300.0"
},
"left": {
"type": "nomove"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 100
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimHide",
"parameter": {
"target": [ "#t-Group_3" ],
"effect": {
"type": "fold",
"duration": 10
}
},
"exectype": "serial",
"delay": 0
}
]
},
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"variable": [ "chatBoxVisible" ],
"value": "1"
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimMove",
"parameter": {
"target": [ "#t-Group_2" ],
"top": {
"type": "movebyoffset",
"value": "-300.0"
},
"left": {
"type": "nomove"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 100
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimShow",
"parameter": {
"target": [ "#t-Group_3" ]
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
.on("pageload", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .pageload", function(event, data) {
var jEvent, jFirer, cases;
if(jimUtil.isAlternateModeActive()) return;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#t-Bg_1")) {
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
"type": "nomove"
},
"containment": false
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
} else if(jFirer.is("#t-Image_4")) {
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
"type": "nomove"
},
"containment": false
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
} else if(jFirer.is("#t-Image_5")) {
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
"type": "nomove"
},
"containment": false
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
} else if(jFirer.is("#t-Input_4")) {
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
"type": "nomove"
},
"containment": false
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
} else if(jFirer.is("#t-Rectangle_45")) {
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
"type": "nomove"
},
"containment": false
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
} else if(jFirer.is("#t-Image_8")) {
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
"type": "nomove"
},
"containment": false
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
} else if(jFirer.is("#t-Rectangle_46")) {
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
"type": "nomove"
},
"containment": false
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
} else if(jFirer.is("#t-Image_9")) {
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
"type": "nomove"
},
"containment": false
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
} else if(jFirer.is("#t-Rectangle_2")) {
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
"value": "800.0"
},
"left": {
"type": "nomove"
},
"containment": false
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimHide",
"parameter": {
"target": [ "#t-Group_3" ]
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
} else if(jFirer.is("#t-Image_24")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": [ "#t-Bubble-top-title" ]
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
} else if(jFirer.is("#t-Rectangle_40")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": [ "#t-Bubble-top-title" ]
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
} else if(jFirer.is("#t-Paragraph_3")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": [ "#t-Bubble-top-title" ]
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
} else if(jFirer.is("#t-Image_7")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": [ "#t-Bubble-top-title" ]
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
} else if(jFirer.is("#t-Paragraph_5")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": [ "#t-Bubble-top-title" ]
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
} else if(jFirer.is("#t-Paragraph_2")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": [ "#t-Bubble-top-title" ]
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
} else if(jFirer.is("#t-Paragraph_6")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": [ "#t-Bubble-top-title" ]
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
} else if(jFirer.is("#t-Paragraph_4")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": [ "#t-Bubble-top-title" ]
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
} else if(jFirer.is("#t-Image_10")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimHide",
"parameter": {
"target": [ "#t-Bubble-top-title" ]
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
.on("mouseenter dragenter", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .mouseenter", function(event, data) {
var jEvent, jFirer, cases;
if(jimUtil.isAlternateModeActive()) return;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#t-Item_2") && jFirer.has(event.relatedTarget).length === 0) {
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
"#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Item_2": {
"attributes": {
"font-size": "0pt"
}
}
},{
"#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Item_2 > .backgroundLayer > .colorLayer": {
"attributes": {
"background-color": "rgba(0,0,0,0.04)"
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
} else if(jFirer.is("#t-Item_3") && jFirer.has(event.relatedTarget).length === 0) {
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
"#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Item_3": {
"attributes": {
"font-size": "0pt"
}
}
},{
"#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Item_3 > .backgroundLayer > .colorLayer": {
"attributes": {
"background-color": "rgba(0,0,0,0.04)"
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
} else if(jFirer.is("#t-Item_4") && jFirer.has(event.relatedTarget).length === 0) {
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
"#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Item_4": {
"attributes": {
"font-size": "0pt"
}
}
},{
"#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Item_4 > .backgroundLayer > .colorLayer": {
"attributes": {
"background-color": "rgba(0,0,0,0.04)"
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
} else if(jFirer.is("#t-Item_5") && jFirer.has(event.relatedTarget).length === 0) {
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
"#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Item_5": {
"attributes": {
"font-size": "0pt"
}
}
},{
"#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Item_5 > .backgroundLayer > .colorLayer": {
"attributes": {
"background-color": "rgba(0,0,0,0.04)"
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
} else if(jFirer.is("#t-Item_6") && jFirer.has(event.relatedTarget).length === 0) {
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
"#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Item_6": {
"attributes": {
"font-size": "0pt"
}
}
},{
"#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Item_6 > .backgroundLayer > .colorLayer": {
"attributes": {
"background-color": "rgba(0,0,0,0.04)"
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
} else if(jFirer.is("#t-Item_7") && jFirer.has(event.relatedTarget).length === 0) {
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
"#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Item_7": {
"attributes": {
"font-size": "0pt"
}
}
},{
"#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Item_7 > .backgroundLayer > .colorLayer": {
"attributes": {
"background-color": "rgba(0,0,0,0.04)"
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
} else if(jFirer.is("#t-Item_8") && jFirer.has(event.relatedTarget).length === 0) {
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
"#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Item_8": {
"attributes": {
"font-size": "0pt"
}
}
},{
"#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Item_8 > .backgroundLayer > .colorLayer": {
"attributes": {
"background-color": "rgba(0,0,0,0.04)"
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
} else if(jFirer.is("#t-Item_9") && jFirer.has(event.relatedTarget).length === 0) {
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
"#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Item_9": {
"attributes": {
"font-size": "0pt"
}
}
},{
"#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Item_9 > .backgroundLayer > .colorLayer": {
"attributes": {
"background-color": "rgba(0,0,0,0.04)"
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
} else if(jFirer.is("#t-Item_10") && jFirer.has(event.relatedTarget).length === 0) {
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
"#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Item_10": {
"attributes": {
"font-size": "0pt"
}
}
},{
"#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Item_10 > .backgroundLayer > .colorLayer": {
"attributes": {
"background-color": "rgba(0,0,0,0.04)"
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
} else if(jFirer.is("#t-Rectangle_2") && jFirer.has(event.relatedTarget).length === 0) {
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
"#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_2": {
"attributes": {
"font-size": "0pt"
}
}
},{
"#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_2 > .backgroundLayer > .colorLayer": {
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
.on("mouseleave dragleave", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .mouseleave", function(event, data) {
var jEvent, jFirer, cases;
if(jimUtil.isAlternateModeActive()) return;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#t-Item_2")) {
jEvent.undoCases(jFirer);
} else if(jFirer.is("#t-Item_3")) {
jEvent.undoCases(jFirer);
} else if(jFirer.is("#t-Item_4")) {
jEvent.undoCases(jFirer);
} else if(jFirer.is("#t-Item_5")) {
jEvent.undoCases(jFirer);
} else if(jFirer.is("#t-Item_6")) {
jEvent.undoCases(jFirer);
} else if(jFirer.is("#t-Item_7")) {
jEvent.undoCases(jFirer);
} else if(jFirer.is("#t-Item_8")) {
jEvent.undoCases(jFirer);
} else if(jFirer.is("#t-Item_9")) {
jEvent.undoCases(jFirer);
} else if(jFirer.is("#t-Item_10")) {
jEvent.undoCases(jFirer);
} else if(jFirer.is("#t-Rectangle_2")) {
jEvent.undoCases(jFirer);
}
});