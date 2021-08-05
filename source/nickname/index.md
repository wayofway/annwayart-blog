---
title: 爱称墙
date: 2021-06-11 19:26:59
cover_image: images/company.jpeg
---

<body>
  <div id="nickname">
  </div>  
  <audio src="/music/cannon.mp3" autoplay controls loop id="myaudio"></audio>
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
      { name: '口咸', rank: 50 },
      { name: '小王', rank: 69 },
    ];
    NICKNAMES.sort(function(a, b) {
      return  b.rank - a.rank;
    });
    var RootNode = document.querySelector('#nickname');
    for(var i = 0; i < NICKNAMES.length; i++) {
      var cube = document.createElement('div');
      cube.setAttribute('class','namecube');
      // 序号
      var labelNode = document.createElement('label');
      labelNode.innerText = i + 1;
      cube.appendChild(labelNode);
      // 分数
      var rankNode = document.createElement('label');
      rankNode.setAttribute('class','ranking hide');
      rankNode.innerText = NICKNAMES[i].rank;
      cube.appendChild(rankNode);
      // 名称
      var nameNode = document.createElement('span');
      nameNode.innerText = NICKNAMES[i].name;
      cube.appendChild(nameNode);
      // 名称块插入展示页面
      RootNode.appendChild(cube);
    }
    // 事件绑定
    var cubeList = document.querySelectorAll('.namecube');
    cubeList.forEach(function(item) {
      item.onclick = function() {
        item.children[1].classList.toggle('hide');
      }
    })
  </script>
  <style>
    #nickname {
      margin-bottom: 35px;
    }
    .namecube {
      position: relative;
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      border-radius: 5px;
      box-shadow: rgba(0,0,0,.2) 0 1px 5px 0px;
      line-height: 54px;
      font-size: 26px;
      cursor: pointer;
    }
    .namecube:nth-child(1) {
      background-color: #e77f67;
    }
    .namecube:nth-child(2) {
      background-color: #f3a683;
    }
    .namecube:nth-child(3) {
      background-color: #f5cd79;
    }
    .namecube label {
      min-width: 60px;
      padding: 0 15px;
	    font-family: 'slidefu';
    }
    .namecube .ranking {
      position: absolute;
      left: 30%;
      color: #e15f41; 
      text-shadow: 1px 1px 1px #000, -1px -1px 1px #e66767;
    }
    .namecube .ranking.hide {
      display: none;
    }
    .namecube span {
      font-size: 26px;
	    font-family: 'slidefu';
      padding-right: 15px;
    }
  </style>
</body>
