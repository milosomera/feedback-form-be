import User from "../models/User.js";
import bcrypt from "bcrypt";

const registerUser = (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email }).then((user) => {
    if (user) {
      res.status(400);
      throw new Error("User already exists.");
    } else {
      bcrypt.hash(password, 12, (err, hash) => {
        if (err) throw err;
        let newUser = new User();
        newUser.name = name;
        newUser.email = email;
        newUser.password = hash;
        newUser.save();
        res.status(201);
        res.send(newUser);
      });
    }
  });
};

const authUser = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password).then((match) => {
        if (match) {
          console.log(user);
          res.send(user);
        } else {
          res.status(401);
          throw new Error("Login failed.");
        }
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or password.");
    }
  });
};

export { authUser, registerUser };
