/**
 * Safely formats and validates the AI response.
 * Handles cases where the model returns extra text
 * or slightly malformed JSON.
 */
export const formatVisionResponse = (rawText) => {
  if (!rawText || typeof rawText !== "string") {
    throw new Error("Empty response from vision model");
  }

  try {
    // Attempt to extract JSON block
    const jsonStart = rawText.indexOf("{");
    const jsonEnd = rawText.lastIndexOf("}");

    if (jsonStart === -1 || jsonEnd === -1) {
      throw new Error("No JSON object found in response");
    }

    const jsonString = rawText.slice(jsonStart, jsonEnd + 1);
    const parsed = JSON.parse(jsonString);

    // Normalize numeric ranges (defensive programming)
    const normalizeScore = (value) => {
      if (typeof value !== "number") return null;
      return Math.max(-5, Math.min(5, value));
    };

    const dims = parsed.visual_dimensions || {};

    parsed.visual_dimensions = {
      gender_expression: normalizeScore(dims.gender_expression),
      visual_weight: normalizeScore(dims.visual_weight),
      embellishment: normalizeScore(dims.embellishment),
      unconventionality: normalizeScore(dims.unconventionality),
      formality: normalizeScore(dims.formality)
    };

    // Normalize confidence
    if (typeof parsed.confidence === "number") {
      parsed.confidence = Math.max(0, Math.min(1, parsed.confidence));
    } else {
      parsed.confidence = null;
    }

    return parsed;

  } catch (error) {
    throw new Error("Failed to parse vision model response");
  }
};
