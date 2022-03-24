const app = require('express')();

app.get("/", (req, res) => res.send("this is a lightweight container!"))

app.listen(9999, ()=> console.log("Listening on 9999"));
