const COLOR_MAP = {
  SUNNY: "#ffeaa7",
  RAINY: "#74b9ff",
  SNOWY: "#81ecec",
  WINDY: "#ffcccc",
  CLOUDY: "#dfe6e9",
};
const WEATHER_MAP = ["SUNNY", "RAINY", "SNOWY", "WINDY", "CLOUDY"];
var randomNum = (Math.random() * 5 - 1).toFixed();
if (randomNum >= 0) {
  var nickNode = document.querySelector("#nickname");
  if (nickNode) {
    document.body.style.backgroundColor = COLOR_MAP.SUNNY;
  } else {
    document.body.style.backgroundColor = COLOR_MAP[WEATHER_MAP[randomNum]];
  }
}
