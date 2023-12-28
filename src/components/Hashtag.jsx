function Hashtag({ customStyle, name }) {
  let bgColor = null;

  const hashtagName = name.toLowerCase().trim();

  if (hashtagName === "dev") bgColor = "#00c7ba";
  if (hashtagName === "javascript") bgColor = "#ffa726";
  if (hashtagName === "france") bgColor = "#29b6f6";
  if (hashtagName === "français") bgColor = "#29b6f6";
  if (hashtagName === "design") bgColor = "#06b900";
  if (hashtagName === "backend") bgColor = "#d500f9";
  if (hashtagName === "frontend") bgColor = "#fe693a";

  if (bgColor === null) {
    const colors = {
      color1: "#f67088",
      color2: "#f7754f",
      color3: "#db8831",
      color4: "#c29431",
      color5: "#ad9c31",
      color6: "#96a331",
      color7: "#77aa31",
      color8: "#31b23e",
      color9: "#33b07a",
      color10: "#34ae92",
      color11: "#35aca4",
      color12: "#36abb3",
      color13: "#38a8c5",
      color14: "#3aa5de",
      color15: "#6e9af4",
      color16: "#a38cf4",
      color17: "#cc79f4",
      color18: "#f45bf1",
      color19: "#f565cc",
      color20: "#f66bad",
    };

    const color = "color" + (Math.floor(Math.random() * 20) + 1);
    bgColor = colors[color];
  }

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
