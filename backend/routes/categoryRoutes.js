// import express from "express";
// const router = express.Router();
// import {
//   createCategory,
//   updateCategory,
//   removeCategory,
//   listCategory,
//   readCategory,
// } from "../controllers/categoryController.js";

// import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

// router.route("/").post(authenticate, authorizeAdmin, createCategory);
// router.route("/:categoryId").put(authenticate, authorizeAdmin, updateCategory);
// router
//   .route("/:categoryId")
//   .delete(authenticate, authorizeAdmin, removeCategory);

// router.route("/categories").get(listCategory);
// router.route("/:id").get(readCategory);

// export default router;

import express from "express";
import {
  createCategory,
  updateCategory,
  removeCategory,
  listCategory,
  readCategory,
} from "../controllers/categoryController.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Create a new category
router.post("/", authenticate, authorizeAdmin, createCategory);

// Update and delete a category by ID
router.route("/:categoryId")
  .put(authenticate, authorizeAdmin, updateCategory)
  .delete(authenticate, authorizeAdmin, removeCategory);

// List all categories
router.get("/categories", listCategory);

// Read a category by ID
router.get("/:id", readCategory);

export default router;
