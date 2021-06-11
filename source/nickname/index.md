---
title: 爱称墙
date: 2021-06-11 19:26:59
cover_image: images/company.jpeg
---

<body>
  <div id="nickname">
  </div>
  <script>
    const NICKNAMES = [
      { name: '小青' },
      { name: '疼疼' },
      { name: '涂尔巴' },
      { name: '冲儿' },
      { name: '胡子妹妹' },
      { name: '可达鸭' },
      { name: '巴nia个' },
      { name: '点头小子' },
      { name: '大阿哥' },
      { name: '死鸡仔' },
    ];
    var RootNode = document.querySelector('#nickname');
    for(var i = 0; i < NICKNAMES.length; i++) {
      var cube = document.createElement('div');
      cube.setAttribute('class','namecube');
      // 序号
      var labelNode = document.createElement('label');
      labelNode.innerText = i + 1;
      cube.appendChild(labelNode);
      // 名称
      var nameNode = document.createElement('span');
      nameNode.innerText = NICKNAMES[i].name;
      cube.appendChild(nameNode);
      // 名称块插入展示页面
      RootNode.appendChild(cube);
    }
  </script>
  <style>
    .namecube {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      border-radius: 5px;
      box-shadow: rgba(0,0,0,.2) 0 1px 5px 0px;
      line-height: 54px;
      font-size: 26px;
    }
    .namecube label {
      min-width: 60px;
      padding: 0 15px;
	    font-family: 'slidefu';
    }
    .namecube span {
      font-size: 26px;
	    font-family: 'slidefu';
      padding-right: 15px;
    }
  </style>
</body>
