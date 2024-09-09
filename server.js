const express = require("express");

const app = express();

const PORT = 3002;

app.get("/health", (req, res) => {
	res.json({
		health: "ok",
	});
});

app.listen(PORT, () => {
	console.log(`server listening on ${PORT}`);
});
