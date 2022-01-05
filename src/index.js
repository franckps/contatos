const express = require('express');
const path = require('path');
const backendRoutes = require('./backend/routes');
const frontendRoutes = require('./frontend/routes');

const app = express();

app.use('/public', express.static(path.join(__dirname, 'frontend', 'public')));

app.use('/api', backendRoutes);

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'frontend', 'views'));
app.use('/', frontendRoutes);

app.listen('80');
