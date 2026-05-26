{% include all_Yaku.md %}

<!-- 2. 目次の表示場所 -->
<div id="toc-container" class="sidebar-nav">
  <p style="font-weight: bold; margin-bottom: 10px; border-bottom: 1px solid #ccc;">目次</p>
  <ul id="toc-list" style="list-style: none; padding-left: 0;"></ul>
</div>

<!-- 3. デザイン（CSS） -->
<style>
/* 以前お伝えしたCSSをそのまま、あるいは微調整してここに置く */
@media (min-width: 1000px) {
  body { padding-left: 250px; }
  .sidebar-nav {
    position: fixed;
    left: 20px;
    top: 150px; /* 検索窓の下に配置 */
    width: 150px;
    max-height: 60vh;
    overflow-y: auto;
    background: #f9f9f9;
    padding: 15px;
    border-radius: 5px;
    font-size: 0.9em;
  }
}
  
<script src="toc.js"></script>
