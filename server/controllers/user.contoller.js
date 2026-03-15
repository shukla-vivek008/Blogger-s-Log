import User from "../models/user.model.js";
import { getAuth } from "@clerk/express";

export const getUserSavedPosts = async (req, res) => {
  const { userId: clerkUserId } = getAuth(req);

  if (!clerkUserId) {
    return res.status(401).json("Not authenticated!");
  }

  const user = await User.findOne({ clerkUserId });

  if (!user) {
  return res.status(404).json("User not found");
}

  res.status(200).json(user.savedPosts);
};

export const savePost = async (req, res) => {
  const { userId: clerkUserId } = getAuth(req);
  const postId = req.body.postId;

  if (!clerkUserId) {
    return res.status(401).json("Not authenticated!");
  }

  const user = await User.findOne({ clerkUserId });

  if (!user) {
  return res.status(404).json("User not found");
}

  const isSaved = user.savedPosts.some((p) => p === postId);

  if (!isSaved) {
    await User.findByIdAndUpdate(user._id, {
      $push: { savedPosts: postId },
    });
  } else {
    await User.findByIdAndUpdate(user._id, {
      $pull: { savedPosts: postId },
    });
  }

  res.status(200).json(isSaved ? "Post unsaved" : "Post saved");
};