const mongoose = require('mongoose');

async function connection() {
    // const conn = await mongoose.connect('mongodb://localhost:27017/Expenses');
    // mongodb+srv://tcollegewala30:fOcy87YhffoTWgnJ@cluster0.qqtdpgf.mongodb.net/b.net/
    const conn = await mongoose.connect('mongodb+srv://tcollegewala30:fOcy87YhffoTWgnJ@cluster0.qqtdpgf.mongodb.net/Expenses');
    console.log('Database Connected');
    return conn;
}

module.exports = connection; // Export the function itself, not the result
