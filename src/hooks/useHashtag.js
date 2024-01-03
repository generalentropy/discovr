import { useEffect, useState } from "react";

export function useHashtag(name) {
  const [bgColor, setBgColor] = useState(null);

  const hashtagName = name.toLowerCase().trim();
  useEffect(() => {
    console.log("hashtag render");

    if (hashtagName === "server") setBgColor("#f45bf1");
    if (hashtagName === "discovr") setBgColor("#00c7ba");
    if (hashtagName === "discord") setBgColor("#f7754f");
    if (hashtagName === "dev") setBgColor("#00c7ba");
    if (hashtagName === "javascript") setBgColor("#ffa726");
    if (hashtagName === "france") setBgColor("#29b6f6");
    if (hashtagName === "français") setBgColor("#29b6f6");
    if (hashtagName === "design") setBgColor("#06b900");
    if (hashtagName === "backend") setBgColor("#d500f9");
    if (hashtagName === "frontend") setBgColor("#fe693a");

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
      setBgColor(colors[color]);
    }
  }, [bgColor, setBgColor, hashtagName]);

  const style = {
    backgroundColor: bgColor,
    padding: "3px 6px",
    borderRadius: "5px",
  };

  return { style, hashtagName };
}
