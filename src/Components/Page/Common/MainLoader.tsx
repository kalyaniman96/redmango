//dynamic loading animation
function MiniLoader({ type = "warning", size = 100 }) {
  return (
    <>
      <div
        className={`spinner-border text-${type}`}
        style={{ scale: `${size}%` }}
      ></div>{" "}
      &nbsp;
      <p className="pt-2">Loading...</p>
    </>
  );
}

export default MiniLoader;
