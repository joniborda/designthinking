jQuery("#simulation")
.on("mouseenter dragenter", ".s-15d0b1c7-4ee4-4d2a-8a6e-4770470e7269 .mouseenter", function(event, data) {
var jEvent, jFirer, cases;
if(jimUtil.isAlternateModeActive()) return;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#s-Paragraph_8") && jFirer.has(event.relatedTarget).length === 0) {
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
"#s-15d0b1c7-4ee4-4d2a-8a6e-4770470e7269 #s-Paragraph_8": {
"attributes": {
"font-size": "0pt"
}
}
},{
"#s-15d0b1c7-4ee4-4d2a-8a6e-4770470e7269 #s-Paragraph_8 span": {
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
} else if(jFirer.is("#s-Paragraph_9") && jFirer.has(event.relatedTarget).length === 0) {
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
"#s-15d0b1c7-4ee4-4d2a-8a6e-4770470e7269 #s-Paragraph_9": {
"attributes": {
"font-size": "0pt"
}
}
},{
"#s-15d0b1c7-4ee4-4d2a-8a6e-4770470e7269 #s-Paragraph_9 span": {
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
.on("mouseleave dragleave", ".s-15d0b1c7-4ee4-4d2a-8a6e-4770470e7269 .mouseleave", function(event, data) {
var jEvent, jFirer, cases;
if(jimUtil.isAlternateModeActive()) return;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#s-Paragraph_8")) {
jEvent.undoCases(jFirer);
} else if(jFirer.is("#s-Paragraph_9")) {
jEvent.undoCases(jFirer);
}
});