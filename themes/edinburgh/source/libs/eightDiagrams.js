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

// 今天
const curDay = new Date().getDate();
// 缓存
const LastUpdatedDate = localStorage.getItem("last_updated_day") || "";
let diagramCache = localStorage.getItem("diagram") || "";

let bot;
let up;
let change;

if (diagramCache && curDay == LastUpdatedDate) {
  // 有缓存无须更新
  const { bottom, top, changes } = JSON.parse(diagramCache);
  bot = bottom;
  up = top;
  change = changes;
} else {
  bot = (Math.random() * 1000).toFixed();
  up = (Math.random() * 1000).toFixed();
  change = (Math.random() * 1000).toFixed();

  bot %= 8;
  up %= 8;
  change %= 6;

  const diagram = { bottom: bot, top: up, changes: change };
  localStorage.setItem("diagram", JSON.stringify(diagram));
  localStorage.setItem("last_updated_day", curDay);
}

var originNum = `${up}-${bot}-${change}`;

var diagramWords = `${DIAGRAM_MAP[up]}上${DIAGRAM_MAP[bot]}下 变爻在${CHANGE_MAP[change]}`;

var searchWords = `${diagramWords} 易安居吉祥网`;

var analysisLink = `https://www.baidu.com/s?ie=utf-8&wd=${encodeURI(
  searchWords
)}`;

console.log(originNum, diagramWords, analysisLink);
