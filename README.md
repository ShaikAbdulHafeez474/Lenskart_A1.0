# VISUAL PRODUCT MEASUREMENT

## Setup Instructions

### Backend
cd backend
npm install
npm run dev

Create a .env file:
GEMINI_API_KEY=your_api_key_here

### Frontend
cd frontend
npm install
npm run dev


## Steps to Run Locally
1. Open the frontend in a browser
2. Upload one or more images of a product
3. Click Analyze Product Images
4. Inspect structured results or download raw JSON output


## Assumptions and Dependencies

### Assumptions
- The system analyzes products strictly based on visible appearance and does not use business or merchandising context.
- Image uploads are assumed to be clear enough for visual inspection.
- Multiple images of the same product represent different views of the same item.

### Dependencies
- Node.js (v20.19+ or v22+ recommended)
- Gemini Vision API (API key required)
- Modern web browser for frontend usage





