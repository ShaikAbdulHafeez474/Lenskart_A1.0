# Prompt Design Approach

## Design Goals
The prompt is designed to:
- Enforce visual-only reasoning
- Prevent business or brand inference
- Encourage explicit uncertainty
- Produce consistent, structured output

---

## Key Constraints
- All judgments must be derived from visible appearance
- If information is unclear, the model must return "uncertain"
- Output must be valid JSON without additional text

---

## Handling Ambiguity
Rather than forcing a prediction, the system explicitly allows uncertainty.  
This reflects real-world visual ambiguity and avoids misleading downstream consumers.

---

## Non-Deterministic Output Handling
Since LLM responses may vary, a response normalization layer is used to:
- Extract valid JSON
- Clamp numeric ranges
- Preserve schema consistency
