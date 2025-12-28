/**
 * Builds the prompt used for visual product analysis.
 * The prompt is intentionally strict to ensure
 * consistent, visual-only outputs.
 */
export const buildVisionPrompt = () => {
  return `
You are a visual analysis system.

Analyze the given product images strictly based on visible appearance.
Do NOT infer brand, price, material quality, or user intent.
If something is not clearly visible, mark it as "uncertain".

Return the result ONLY as valid JSON in the following structure:

{
  "visual_dimensions": {
    "gender_expression": number,        // range -5 (masculine) to +5 (feminine)
    "visual_weight": number,            // range -5 (light) to +5 (heavy)
    "embellishment": number,            // range -5 (simple) to +5 (ornate)
    "unconventionality": number,        // range -5 (classic) to +5 (avant-garde)
    "formality": number                 // range -5 (casual) to +5 (formal)
  },
  "observable_attributes": {
    "dominant_colors": [string],
    "transparency": "opaque | semi-transparent | transparent | uncertain",
    "structure_type": "rimmed | rimless | semi-rimless | uncertain",
    "visible_texture": string | "uncertain",
    "suitable_for_kids": boolean | "uncertain"
  },
  "confidence": number                 // range 0.0 to 1.0
}

Rules:
- Use floating point numbers where applicable.
- Base all judgments only on what is visible.
- If multiple images conflict, average reasonably.
- Do not add any extra text outside JSON.
`;
};
