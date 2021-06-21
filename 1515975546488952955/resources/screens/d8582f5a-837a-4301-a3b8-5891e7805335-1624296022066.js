jQuery("#simulation")
.on("click", ".s-d8582f5a-837a-4301-a3b8-5891e7805335 .click", function(event, data) {
var jEvent, jFirer, cases;
if(jimUtil.isAlternateModeActive()) return;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Paragraph_8")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/15d0b1c7-4ee4-4d2a-8a6e-4770470e7269",
"transition": {
"type": "fade",
"duration": 300
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
.on("mouseenter dragenter", ".s-d8582f5a-837a-4301-a3b8-5891e7805335 .mouseenter", function(event, data) {
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
"#s-d8582f5a-837a-4301-a3b8-5891e7805335 #s-Paragraph_8": {
"attributes": {
"font-size": "0pt"
}
}
},{
"#s-d8582f5a-837a-4301-a3b8-5891e7805335 #s-Paragraph_8 span": {
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
.on("mouseleave dragleave", ".s-d8582f5a-837a-4301-a3b8-5891e7805335 .mouseleave", function(event, data) {
var jEvent, jFirer, cases;
if(jimUtil.isAlternateModeActive()) return;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#s-Paragraph_8")) {
jEvent.undoCases(jFirer);
}
});