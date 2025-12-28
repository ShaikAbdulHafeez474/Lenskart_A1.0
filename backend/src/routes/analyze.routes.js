import express from "express";
import multer from "multer";
import { analyzeProductImages } from "../controllers/analyze.controller.js";

const router = express.Router();

/**
 * Multer configuration
 * We store files in memory because they are directly
 * sent to the vision model and not saved on disk.
 */
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB per image
  }
});

/**
 * POST /api/analyze
 * Accepts one or more product images
 */
router.post(
  "/",
  upload.array("images", 5),
  analyzeProductImages
);

export default router;
