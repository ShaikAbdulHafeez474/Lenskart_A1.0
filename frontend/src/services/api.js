const API_BASE_URL = "http://localhost:5000/api";

/**
 * Sends images to backend for analysis
 */
export const analyzeImages = async (images) => {
  const formData = new FormData();

  images.forEach((image) => {
    formData.append("images", image);
  });

  const response = await fetch(`${API_BASE_URL}/analyze`, {
    method: "POST",
    body: formData
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Analysis failed");
  }

  const data = await response.json();
  return data.data;
};
