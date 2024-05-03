export default function ProgressBar({ percent }) {
  const containerStyles = {
    height: "32px",
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: "16px",
  };

  const fillerStyles = {
    height: "100%",
    width: `${percent}%`,
    backgroundColor: "lightgreen",
    borderRadius: "inherit",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
}
