import express from 'express';
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
import cors from 'cors';
const app = express();
app.use(cors());
//app.get('/hello',(req, res) => {res.send('Hello World')})
app.get('/', (req, res) => {res.send('Welcome to FullStack Development!')})
helloController(app);
app.use(express.json());
userController(app);
tuitsController(app);
app.listen(process.env.PORT || 4000);