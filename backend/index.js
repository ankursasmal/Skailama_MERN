const express = require('express');
const cors = require('cors');
const cookie = require('cookie-parser');
const dotenv = require('dotenv');
const rout = require('./route/router');
const connections = require('./db/contection');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  'https://project-dashboard-front.onrender.com',
  'http://localhost:5173',
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.options('*', cors()); // <- important

app.use(cookie());
app.use(express.json());
app.use("/", rout);

connections.then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}, DB connected`);
  });
}).catch(() => {
  console.log(`Server running on ${PORT}, DB not connected`);
});
