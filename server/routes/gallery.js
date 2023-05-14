import express from "express";
import multer from "multer";
import galleryController from "../controllers/galleryController.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/upload");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.fieldname;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

// Routes
router.post(
  "/upload/image",
  upload.single("image"),
  galleryController.uploadImage
);

router.post("/add/category", galleryController.addNewCategory)
router.get("/get/categories", galleryController.getAllCategories)
router.get("/get/images", galleryController.getAllImages)
router.get("/get/singleimage", galleryController.getSingleImage)

export default router;
