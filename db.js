const mongoose = require('mongoose');
require('dotenv').config();  // Ensure dotenv is used if you're using environment variables


const uri = process.env.DATABASE || 'mongodb://localhost:27017/myDatabaseName/TravelBlog';  // Use environment variable or hard-coded string

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Database connected successfully'))
.catch((err) => console.log('Database connection failed:', err));
