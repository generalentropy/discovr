function Hashtag({ customStyle, name }) {
  const defaultColor = "#512da8";

  let bgColor = defaultColor;
  const hashtagName = name.toLowerCase();

  if (hashtagName === "dev") bgColor = "#00c7ba";
  if (hashtagName === "javascript") bgColor = "#ffa726";
  if (hashtagName === "france") bgColor = "#29b6f6";
  if (hashtagName === "français") bgColor = "#29b6f6";
  if (hashtagName === "design") bgColor = "#06b900";
  if (hashtagName === "backend") bgColor = "#d500f9";
  if (hashtagName === "frontend") bgColor = "#fe693a";

  const style = {
    backgroundColor: bgColor,
    padding: "3px 6px",
    borderRadius: "5px",
  };

  return (
    <div className="hashtag" style={{ ...style, ...customStyle }}>
      #{name}
    </div>
  );
}

export default Hashtag;
