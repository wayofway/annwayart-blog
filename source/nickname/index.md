---
title: 爱称墙
date: 2021-06-11 19:26:59
cover_image: images/company.jpeg
---

<button type="button" class="play" id="canon" data-state="paused">
  <span class="when-paused"><span class="zh">播放卡农</span><span class="en">Play Canon</span></span>
  <span class="when-playing"><span class="zh">暂停</span><span class="en">Pause</span></span>
</button>
<div id="nickname"></div>
<audio src="/music/cannon.mp3" loop id="myaudio" preload="none"></audio>
<script>
  var NICKNAMES = [
    { name: '木目心', rank: 101 },
    { name: '立小一', rank: 100 },
    { name: '小青', rank: 100 },
    { name: '疼疼', rank: 100 },
    { name: '涂尔巴', rank: 100 },
    { name: '冲儿', rank: 100 },
    { name: '胡子妹妹', rank: 100 },
    { name: '可达鸭', rank: 100 },
    { name: '巴nia个', rank: 40 },
    { name: '点头小子', rank: 100 },
    { name: '大阿哥', rank: 90 },
    { name: '死鸡仔', rank: 90 },
    { name: '安艺物语', rank: 90 },
    { name: '鼓鼓', rank: 100 },
    { name: '口咸', rank: 50 }
  ];
  NICKNAMES.sort(function (a, b) {
    return b.rank - a.rank;
  });
  var RootNode = document.querySelector('#nickname');
  for (var i = 0; i < NICKNAMES.length; i++) {
    var plaque = document.createElement('button');
    plaque.type = 'button';
    plaque.className = 'plaque';
    var nameNode = document.createElement('span');
    nameNode.className = 'plaque-name';
    nameNode.innerText = NICKNAMES[i].name;
    var scoreNode = document.createElement('span');
    scoreNode.className = 'plaque-score';
    scoreNode.innerHTML = '<span class="num">' + NICKNAMES[i].rank + '</span> <span class="zh">分</span><span class="en">pt</span>';
    plaque.appendChild(nameNode);
    plaque.appendChild(scoreNode);
    RootNode.appendChild(plaque);
  }
  document.querySelectorAll('.plaque').forEach(function (item) {
    item.onclick = function () {
      item.classList.toggle('open');
    };
  });
  var audio = document.getElementById('myaudio');
  var canon = document.getElementById('canon');
  if (audio && canon) {
    canon.onclick = function () {
      if (!audio.paused) {
        audio.pause();
        canon.setAttribute('data-state', 'paused');
        return;
      }
      var pending = audio.play();
      if (pending && pending.then) {
        pending.then(function () {
          canon.setAttribute('data-state', 'playing');
        }).catch(function () {
          canon.setAttribute('data-state', 'paused');
        });
      } else {
        canon.setAttribute('data-state', 'playing');
      }
    };
  }
</script>
