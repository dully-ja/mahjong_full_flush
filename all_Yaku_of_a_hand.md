{% include all_Yaku.md %}

<!-- 目次の表示場所 -->
<div id="toc-container" class="sidebar-nav">
  <p style="font-weight: bold; margin-bottom: 10px; border-bottom: 1px solid #ccc;">目次</p>
  <ul id="toc-list" style="list-style: none; padding-left: 0;"></ul>
</div>

<style>
@media (min-width: 1000px) {
  body { padding-left: 280px; }
  .sidebar-nav {
    position: fixed;
    left: 20px;
    top: 20px; /* 検索窓削除により上に詰めた */
    width: 200px;
    max-height: 80vh; /* 検索窓がなくなった分、縦幅を広げてもOK */
    overflow-y: auto;
    background: #f9f9f9;
    padding: 15px;
    border-radius: 5px;
    font-size: 0.9em;
  }
}
.markdown-body table {
  display: block;
  overflow-x: auto;
}
</style>

<script src="toc.js"></script>
