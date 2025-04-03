import express from 'express'
import router from './route.js';

const app = express();

app.use(express.json())

const PORT = 1000;

// app.get("/", (req, res) => {
//   res.send("Hello, Expresssoooo");
// });

app.use('/', router)



app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
