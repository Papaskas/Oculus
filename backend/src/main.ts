import { env } from '@env';

const express = require('express');
const routing = require('@src/routing');


const app = express();

app.use(routing);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(env.PORT,  () => {
  console.log('app started');
});