import { analyzeImagesWithVision } from "../services/vision.service.js";

/**
 * Controller to analyze product images
 */
export const analyzeProductImages = async (req, res, next) => {
  try {
    // Validate input
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        error: "At least one product image is required"
      });
    }

    // Extract image buffers
    const images = req.files.map(file => ({
      buffer: file.buffer,
      mimetype: file.mimetype
    }));

    // Call vision service
    const analysisResult = await analyzeImagesWithVision(images);

    // Send response
    return res.status(200).json({
      success: true,
      data: analysisResult
    });
  } catch (error) {
    next(error);
  }
};
