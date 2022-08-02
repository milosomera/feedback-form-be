import Category from "../models/Category.js";

const allCategory = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.send(categories);
  } catch (err) {
    res.status(400);
    res.send(err);
  }
};

const addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = new Category({ name });
    await category.save();
    res.send(category);
  } catch (err) {
    res.send(err);
  }
};

export { allCategory, addCategory };
