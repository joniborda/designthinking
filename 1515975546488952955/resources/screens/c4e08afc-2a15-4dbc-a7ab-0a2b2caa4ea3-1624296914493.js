jQuery("#simulation")
.on("click", ".s-c4e08afc-2a15-4dbc-a7ab-0a2b2caa4ea3 .click", function(event, data) {
var jEvent, jFirer, cases;
if(jimUtil.isAlternateModeActive()) return;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Button")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-c4e08afc-2a15-4dbc-a7ab-0a2b2caa4ea3 #s-Button": {
"attributes": {
"font-size": "0pt"
}
}
},{
"#s-c4e08afc-2a15-4dbc-a7ab-0a2b2caa4ea3 #s-Button span": {
"attributes": {
"color": "#80B8F1"
}
}
} ],
"exectype": "serial",
"delay": 0
},
{
"action": "jimChangeStyle",
"parameter": [ {
"#s-c4e08afc-2a15-4dbc-a7ab-0a2b2caa4ea3 #s-Button": {
"attributes": {
"font-size": "0pt"
}
}
},{
"#s-c4e08afc-2a15-4dbc-a7ab-0a2b2caa4ea3 #s-Button span": {
"attributes": {
"color": "#007AFF"
}
}
} ],
"exectype": "timed",
"delay": 300
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
}
});