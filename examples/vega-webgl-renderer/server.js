const express = require('express');
const app = express();
const port = 5555; // You can use any available port

app.use(express.static('public'));

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
