import express from 'express';
 import { handleUser } from './controller/userController';
const app = express();

app.set('view engine','ejs');
app.get('/user',handleUsers);

app.listen(3200);