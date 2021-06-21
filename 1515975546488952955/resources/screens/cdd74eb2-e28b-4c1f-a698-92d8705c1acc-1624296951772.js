jQuery("#simulation")
.on("mouseenter dragenter", ".s-cdd74eb2-e28b-4c1f-a698-92d8705c1acc .mouseenter", function(event, data) {
var jEvent, jFirer, cases;
if(jimUtil.isAlternateModeActive()) return;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#s-Paragraph_26") && jFirer.has(event.relatedTarget).length === 0) {
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
"#s-cdd74eb2-e28b-4c1f-a698-92d8705c1acc #s-Paragraph_26": {
"attributes": {
"font-size": "0pt"
}
}
},{
"#s-cdd74eb2-e28b-4c1f-a698-92d8705c1acc #s-Paragraph_26 span": {
"attributes": {
"text-decoration": "underline"
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
} else if(jFirer.is("#s-Paragraph_31") && jFirer.has(event.relatedTarget).length === 0) {
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
"#s-cdd74eb2-e28b-4c1f-a698-92d8705c1acc #s-Paragraph_31": {
"attributes": {
"font-size": "0pt"
}
}
},{
"#s-cdd74eb2-e28b-4c1f-a698-92d8705c1acc #s-Paragraph_31 span": {
"attributes": {
"text-decoration": "underline"
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
.on("mouseleave dragleave", ".s-cdd74eb2-e28b-4c1f-a698-92d8705c1acc .mouseleave", function(event, data) {
var jEvent, jFirer, cases;
if(jimUtil.isAlternateModeActive()) return;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#s-Paragraph_26")) {
jEvent.undoCases(jFirer);
} else if(jFirer.is("#s-Paragraph_31")) {
jEvent.undoCases(jFirer);
}
});