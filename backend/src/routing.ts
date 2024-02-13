import express from 'express';
import IndexController from '@src/controllers/index.controller';


const app = express();

app.get('/', (req, res) => new IndexController(req, res));


module.exports = app;
