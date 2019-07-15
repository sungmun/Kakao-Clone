import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { rootRouter } from './router/index';
import {
  middleWareCoustomErrorCatch,
  middleWareETCErrorCatch,
} from './router/utile';
import bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.use('/', rootRouter);

app.use(middleWareCoustomErrorCatch);
app.use(middleWareETCErrorCatch);

export default app;
