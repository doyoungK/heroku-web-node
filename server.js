var express = require('express');
var app = express();


app.set("port", process.enc.PORT || 3030);

app.get('/', function(req, res){
  res send("heroku works!")
});

app.listen(app.get("port"), function(){
  console.log("Express Server is running at localhost:" + app.get("port"));
});
