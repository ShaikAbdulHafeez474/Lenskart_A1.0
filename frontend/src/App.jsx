import { useState } from "react";
import ImageUploader from "./components/ImageUploader.jsx";
import ResultViewer from "./components/ResultViewer.jsx";

function App() {
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto", padding: "20px" }}>
      <h1>Visual Product Measurement System</h1>

      <ImageUploader
        setAnalysisResult={setAnalysisResult}
        setLoading={setLoading}
        setError={setError}
      />

      {loading && <p>Analyzing images...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {analysisResult && <ResultViewer result={analysisResult} />}
    </div>
  );
}

export default App;
