const express = require('express');
const app = express();
const cors = require('cors');
const api = require('./routes/api');
const sequelize = require('./database/config/database');
// require('./config/associations'); 

// Use Cors
app.use(cors());

// Use json type
app.use(express.json());

// Use api routes
app.use('/api', api);

const PORT = process.env.PORT;

// Sync Sequelize models with the database
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port https://localhost:${PORT}`);
  });
}).catch(err => console.error('Unable to sync database:', err));