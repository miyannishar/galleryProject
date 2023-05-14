import categoryModel from "../models/category.js";
import galleryModel from "../models/gallery.js";

class galleryController {
  static uploadImage = async (req, res) => {
    const { category } = req.body;
    try {
      if (category) {
        const addImage = galleryModel({
          name: req.file.filename,
          category: category,
        });

        const savedImage = await addImage.save();
        if (savedImage) {
          return res
            .status(200)
            .json({ message: "File uploaded successfully" });
        } else {
          return res.status(400).json({ message: "File not uploaded" });
        }
      } else {
        return res.status(400).json({ message: "All fields are required" });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  static addNewCategory = async (req, res) => {
    const { name } = req.body;
    try {
      if (name) {
        const newCategory = categoryModel({
          name: name,
        });
        const saved_category = await newCategory.save();

        if (saved_category) {
          return res
            .status(200)
            .json({ message: "Category Saved Successfully" });
        } else {
          return res.status(400).json({ message: "Category Not Saved" });
        }
      } else {
        return res.status(400).json({ message: "Name field is required" });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  static getAllCategories = async (req, res) => {
    try {
      const fetchAllCategories = await categoryModel.find({});
      return res.status(400).json(fetchAllCategories);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  static getAllImages = async (req, res) => {
    try {
      const fetchAllImages = await galleryModel.find({});
      return res.status(200).json(fetchAllImages);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  static getSingleImage = async (req, res) => {
    const { category } = req.query;
    try {
      if (category) {
        const fetchSingleImage = await galleryModel.find({
          category: category,
        });
        return res.status(200).json(fetchSingleImage);
      } else {
        return res.status(400).json({ message: "All fields are required" });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
}

export default galleryController;
