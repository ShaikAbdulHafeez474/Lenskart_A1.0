import { useState } from "react";
import { analyzeImages } from "../services/api.js";

function ImageUploader({ setAnalysisResult, setLoading, setError }) {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleFileChange = (event) => {
    setSelectedImages(Array.from(event.target.files));
  };

  const handleSubmit = async () => {
    if (selectedImages.length === 0) {
      setError("Please select at least one image.");
      return;
    }

    try {
      setError(null);
      setLoading(true);
      setAnalysisResult(null);

      const result = await analyzeImages(selectedImages);
      setAnalysisResult(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />

      <br /><br />

      <button onClick={handleSubmit}>
        Analyze Product Images
      </button>
    </div>
  );
}

export default ImageUploader;
