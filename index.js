const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the parent directory
app.use(express.static('../'));

// Route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/../index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
