jQuery("#simulation")
.on("mouseenter dragenter", ".s-857b1682-c246-4760-81d7-207ff11d8277 .mouseenter", function(event, data) {
var jEvent, jFirer, cases;
if(jimUtil.isAlternateModeActive()) return;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#s-Paragraph_18") && jFirer.has(event.relatedTarget).length === 0) {
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
"#s-857b1682-c246-4760-81d7-207ff11d8277 #s-Paragraph_18": {
"attributes": {
"font-size": "0pt"
}
}
},{
"#s-857b1682-c246-4760-81d7-207ff11d8277 #s-Paragraph_18 span": {
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
.on("mouseleave dragleave", ".s-857b1682-c246-4760-81d7-207ff11d8277 .mouseleave", function(event, data) {
var jEvent, jFirer, cases;
if(jimUtil.isAlternateModeActive()) return;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#s-Paragraph_18")) {
jEvent.undoCases(jFirer);
}
});