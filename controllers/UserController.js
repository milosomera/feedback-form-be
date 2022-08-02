import User from "../models/User.js";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    res.status(400);
    res.send({ error: "User already exists." });
  } else {
    bcrypt.hash(password, 12, async (err, hash) => {
      try {
        const newUser = new User({
          name,
          email,
          password: hash,
        });
        await newUser.save();
        res.status(201);
        res.send(newUser);
      } catch (err) {
        res.status(400);
        res.send(err);
      }
    });
  }
};

const authUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      res.send(user);
    } else {
      res.status(401);
      res.send({ error: "Login failed." });
    }
  } else {
    res.status(401);
    res.send({ error: "Invalid email/password." });
  }
};

export { authUser, registerUser };
