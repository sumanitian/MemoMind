import dotenv from "dotenv";
dotenv.config();
import express from "express";
import authRouter from "./routes/auth";
import contentRouter from "./routes/content";
import cookieParser from "cookie-parser";
import cors from "cors";
import brainRouter from "./routes/brain";

const app = express();

const allowedOrigins = [
  process.env.FRONTEND_URL || "http://localhost:5173",
  "https://memo-mind.vercel.app",   // add this if needed
  "https://memo-mind-pi.vercel.app" // keep this one too
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
  })
);

app.options("*", cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
}));

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/content", contentRouter);
app.use("/api/v1/brain", brainRouter);

export default app;
