const express = require("express");

const conn=require('./db')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

const CreditRoute=require('./routes/Credit.Routes')
const DebitRoute=require('./routes/Debit.Routes')
const RollRoute=require('./routes/Roll.Routes');
const ConnectRoute=require('./routes/Connect.Route');

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://expense-backed.onrender.com',
  'https://burhaniexpenses.netlify.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error('Blocked by CORS:', origin); // Debug log
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true // If cookies or auth tokens are needed
}));

// Preflight requests
app.options('*', cors());


app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/credit', CreditRoute);
app.use('/api/debit', DebitRoute);
app.use('/api/roll', RollRoute);
app.use('/api/connect', ConnectRoute);
app.get("/", async(req, res) => {
    var data=await conn
    res.send('connected ')
});


app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});