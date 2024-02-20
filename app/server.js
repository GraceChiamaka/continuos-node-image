const express = require("express");
const app = express();

const HOST = "0.0.0.0";
const PORT = 80;

app.get("/", (req, res) => {
	return res.send("Hello world!")
});

app.listen(PORT, HOST, () => {
	console.log("App is listening on port", PORT);
})
