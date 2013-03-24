var ewd = require('ewdglobals');
var nodem = require('nodem');

var db = new nodem.Gtm();

ewd.init(db);

console.log("Setting a Global");

db.open();

var patient = new ewd.GlobalNode('patient',[123456]);

var document = {
  "name": "John Doe",
  "city": "New York"
  };

patient._setDocument(document);


console.log("Getting its content");

var record = patient._getDocument();
console.log("patient info: " + JSON.stringify(record));

db.close();

