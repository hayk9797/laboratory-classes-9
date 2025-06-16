const express = require("express");
// const cors = require("cors");
const dotenv = require("dotenv");

const bookRoutes = require("./routes/bookRoutes");
const authorRoutes = require("./routes/authorRoutes");
const { default: mongoose } = require("mongoose");

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();
// app.use();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connection successfull'))
.catch((err) => console.error('MongoDB connection error:', err));

// app.use("/api/books", bookRoutes);
// app.use("/api/authors", authorRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
