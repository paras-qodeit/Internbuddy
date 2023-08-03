require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const certificateRoute = require("./routes/certificateRoute");
const authRoutes = require("./routes/authRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();
app.use(cookieParser());

// Connect to MongoDB
connectDB();

// Middleware
app.use(
  cors({
    origin: "*",
    allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/ask", certificateRoute);
app.use("/api/payment", paymentRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
