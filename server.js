// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const authRoutes = require("./routes/auth");
// const transactionRoutes = require("./routes/transactions");

// const app = express();
// const corsOptions = {
//   origin: "https://bright-project-main.vercel.app", // or "*" temporarily to test
//   credentials: true,
// };
// app.use(cors(corsOptions));
// app.use(bodyParser.json());

// app.use("/api/auth", authRoutes);
// app.use("/api/transactions", transactionRoutes);

// // Connect to MongoDB Atlas
// mongoose.connect(process.env.MONGO_URI)
// // mongoose.connect("mongodb+srv://collinsbright567:bKZeJsduKRVaFiO1@cluster0.5xexmtr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

// .then(() => {
//   console.log(" MongoDB connected");

//   const PORT = 5000;
//   app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
// })
// .catch((err) => console.error(" MongoDB connection error:", err));




const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");
const transactionRoutes = require("./routes/transactions");

const app = express();

// ✅ HERE: CORS config should be added before any routes or body parsing
app.use(cors({
  origin: "https://frontend-project-ochre-mu.vercel.app"  // <-- replace with your actual frontend URL
}));

app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionRoutes);

// Connect to MongoDB Atlas
mongoose.connect(
  "mongodb+srv://collinsbright567:bKZeJsduKRVaFiO1@cluster0.5xexmtr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => {
  console.log("✅ MongoDB connected");

  const PORT = 5000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch((err) => console.error("❌ MongoDB connection error:", err));
