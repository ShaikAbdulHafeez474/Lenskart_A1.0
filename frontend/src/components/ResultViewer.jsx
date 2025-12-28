function ResultViewer({ result }) {
  if (!result) return null;

  const { visual_dimensions, observable_attributes, confidence } = result;

  const downloadJSON = () => {
  const blob = new Blob(
    [JSON.stringify(result, null, 2)],
    { type: "application/json" }
  );

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "visual-analysis-result.json";
  a.click();
  URL.revokeObjectURL(url);
};


  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Analysis Result</h2>

      <h3>Visual Dimensions</h3>
      <ul>
        {Object.entries(visual_dimensions).map(([key, value]) => (
          <li key={key}>
            <strong>{key.replace("_", " ")}:</strong> {value}
          </li>
        ))}
      </ul>

      <h3>Observable Attributes</h3>
      <ul>
        {Object.entries(observable_attributes).map(([key, value]) => (
          <li key={key}>
            <strong>{key.replace("_", " ")}:</strong>{" "}
            {Array.isArray(value) ? value.join(", ") : String(value)}
          </li>
        ))}
      </ul>

      <h3>Confidence</h3>
      <p>{confidence}</p>

      <h3>Raw JSON</h3>
      <pre
        style={{
          background: "#f4f4f4",
          padding: "15px",
          overflowX: "auto"
        }}
      >
        {JSON.stringify(result, null, 2)}
      </pre>

      <button
  style={{ marginTop: "10px" }}
  onClick={downloadJSON}
>
  Download JSON
</button>

    </div>
  );
}

export default ResultViewer;
