var bot = (Math.random() * 1000).toFixed();
var up = (Math.random() * 1000).toFixed();
var change = (Math.random() * 1000).toFixed();

bot %= 8;
up %= 8;
change %= 6;

const DIAGRAM_MAP = {
  1: "乾",
  2: "兑",
  3: "离",
  4: "震",
  5: "巽",
  6: "坎",
  7: "艮",
  0: "坤",
};

const CHANGE_MAP = {
  1: "初",
  2: "二",
  3: "三",
  4: "四",
  5: "五",
  0: "上",
};

var originNum = `${up}-${bot}-${change}`;

var diagramWords = `${DIAGRAM_MAP[up]}上${DIAGRAM_MAP[bot]}下 变爻在${CHANGE_MAP[change]}`;

var searchWords = `${diagramWords} 易安居吉祥网`;

var analysisLink = `https://www.baidu.com/s?ie=utf-8&wd=${encodeURI(
  searchWords
)}`;

console.log(originNum, diagramWords, analysisLink);
