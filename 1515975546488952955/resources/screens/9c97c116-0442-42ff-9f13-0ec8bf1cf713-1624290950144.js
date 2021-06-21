jQuery("#simulation")
.on("mouseenter dragenter", ".s-9c97c116-0442-42ff-9f13-0ec8bf1cf713 .mouseenter", function(event, data) {
var jEvent, jFirer, cases;
if(jimUtil.isAlternateModeActive()) return;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#s-Paragraph_10") && jFirer.has(event.relatedTarget).length === 0) {
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
"#s-9c97c116-0442-42ff-9f13-0ec8bf1cf713 #s-Paragraph_10": {
"attributes": {
"font-size": "0pt"
}
}
},{
"#s-9c97c116-0442-42ff-9f13-0ec8bf1cf713 #s-Paragraph_10 span": {
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
.on("mouseleave dragleave", ".s-9c97c116-0442-42ff-9f13-0ec8bf1cf713 .mouseleave", function(event, data) {
var jEvent, jFirer, cases;
if(jimUtil.isAlternateModeActive()) return;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#s-Paragraph_10")) {
jEvent.undoCases(jFirer);
}
});