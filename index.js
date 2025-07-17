const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require("./routes/UserRoutes");
require('dotenv').config();

// Middleware setup
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("Connection Error:", err));

// Use routes
app.use("/api", userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running in ${process.env.PORT}`)
})
