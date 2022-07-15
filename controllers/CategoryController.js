import Category from "../models/Category.js";

const allCategory = async (req, res) => {
  const categories = await Category.find({});
  res.send(categories);
};

const addCategory = async (req, res) => {
  const { name } = req.body;
  const category = new Category({ name });
  await category.save();
  res.send(category);
};

export { allCategory, addCategory };
