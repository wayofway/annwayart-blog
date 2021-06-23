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

var originNum = `${up}-${bot}-${change}`;

var diagramWords = `上${DIAGRAM_MAP[up]}下${DIAGRAM_MAP[bot]} 变爻：${change}`;

var searchWords = `${diagramWords}卦详解 易安居吉祥网`;

var analysisLink = `https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=${encodeURI(
  searchWords
)}`;

console.log(originNum, diagramWords, analysisLink);
