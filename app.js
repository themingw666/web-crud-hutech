const express = require("express");
const routers = require("./routes");
const PORT = 80;
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded( { extended: false }));

app.use(routers);

app.listen(PORT, ()=>{
    console.log(`App dang chay voi port ${PORT}`);
});