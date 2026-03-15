import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import webHookRouter from "./routes/webhook.route.js";
import {
  clerkMiddleware,
  clerkClient,
  requireAuth,
  getAuth,
} from "@clerk/express";
import cors from "cors";

const app = express();

app.use(cors(process.env.VITE_API_URL))
app.use(clerkMiddleware());
app.use("/webhooks", webHookRouter);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
const port = 3000;

app.get("/protected", requireAuth(), async (req, res) => {
  const { userId } = getAuth(req);
  
  const user = await clerkClient.users.getUser(userId);

  return res.json({ user });
});

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  res.json({
    message: err.message || "Something Went Wrong",
    status: err.status,
    stack: err.stack,
  });
});

app.listen(port, (req, res) => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});
