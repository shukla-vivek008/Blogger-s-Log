import User from "../models/user.model.js";
import Post from "../models/post.model.js";
import Comment from "../models/comment.model.js";
import { Webhook } from "svix";

export const clerkWebHook = async (req, res) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Webhook secret needed!");
  }

  const payload = req.body;

  const svix_id = req.headers["svix-id"];
  const svix_timestamp = req.headers["svix-timestamp"];
  const svix_signature = req.headers["svix-signature"];

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return res.status(400).json({
      message: "Missing svix headers",
    });
  }

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt;

  try {
    evt = wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    return res.status(400).json({
      message: "Webhook verification failed",
    });
  }

  console.log("Webhook event:", evt.type);
  console.log("User data:", evt.data);

  if (evt.type === "user.created") {
    const email = evt.data.email_addresses[0].email_address;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const newUser = new User({
        clerkUserId: evt.data.id,
        username:
          evt.data.username ||
          evt.data.first_name ||
          evt.data.email_addresses[0].email_address.split("@")[0],
        email: evt.data.email_addresses[0].email_address,
        img: evt.data.profile_image_url,
      });
    }
  }
  try {
    await newUser.save();
  } catch (err) {
    console.error(err);
  }

  if (evt.type === "user.deleted") {
  const deletedUser = await User.findOneAndDelete({
    clerkUserId: evt.data.id,
  });

  if (deletedUser) {
    await Post.deleteMany({ user: deletedUser._id });
    await Comment.deleteMany({ user: deletedUser._id });
  }
}
  return res.status(200).json({
    message: "Webhook received",
  });
};
