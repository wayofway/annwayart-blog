---
title: about
date: 2021-05-31 15:54:33
---

# Annwayli

一名简单的程序员

<a class="slip" id="eight-diagram" href="" target="_blank" rel="noreferrer">
  <i class="seal" aria-hidden="true">卦</i>
  <span class="zh">每日一卦</span><span class="en">Daily hexagram</span>
  <em id="diagram-words"></em>
</a>
<script>
  var timer = setTimeout(function () {
    if (analysisLink && diagramWords) {
      var node = document.querySelector('#eight-diagram');
      var words = document.querySelector('#diagram-words');
      if (words) words.textContent = diagramWords;
      if (node) node.setAttribute('href', analysisLink);
    }
    clearTimeout(timer);
  }, 1200);
</script>
