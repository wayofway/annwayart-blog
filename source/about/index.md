---
title: about
date: 2021-05-31 15:54:33
---

# Annwayli

一名简单的程序员

<div>
  <label>每日一卦：</label>
  <a id="eight-diagram" href="" target="_blank"></a>
</div>
<script>
  var timer = setTimeout(function() {
    if(analysisLink && diagramWords) {
      var node = document.querySelector('#eight-diagram');
      node.innerText = diagramWords;
      node.setAttribute('href', analysisLink)
    }
    clearTimeout(timer);
  }, 1200)
</script>
