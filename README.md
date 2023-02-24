# 草原刈り取りスクリプト
GitHubの草(Contribution Graph)を落としてくるやつ

### get_github_grass.py
GitHubのユーザページをスクレイプしてContribution GraphをSVG形式で保存する。

### view_github_gcontributors.js
上のスクリプトで保存したSVGをWebページ上に表示するJS。

キャッシュ消すor残ってないと普通に描画速度が低速なので実用性低。
SVGだとマウスイベント拾えるからちょっといい。それだけ。普通はPNGでよい。
