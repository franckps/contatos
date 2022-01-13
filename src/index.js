const express = require('express');
const path = require('path');
const cors = require('cors');
const { port } = require('./configs');
const backendRoutes = require('./backend/routes');
const frontendRoutes = require('./frontend/routes');

const app = express();
app.use(cors());

app.use('/public', express.static(path.join(__dirname, 'frontend', 'public')));

app.use('/api', backendRoutes);

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'frontend', 'views'));
app.use('/', frontendRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
