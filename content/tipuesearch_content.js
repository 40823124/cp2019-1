var tipuesearch = {"pages": [{'title': 'Weekly★progress', 'text': '', 'tags': '', 'url': 'Weekly★progress.html'}, {'title': '5th week', 'text': '', 'tags': '', 'url': '5th week.html'}, {'title': 'Hello,world!程式', 'text': '\n', 'tags': '', 'url': 'Hello,world!程式.html'}, {'title': '6th week', 'text': '', 'tags': '', 'url': '6th week.html'}, {'title': 'LOOP', 'text': "gist: https://gist.github.com/40823131/0cf03a8b73201ed411749211d7199d20 \n https://mde.tw/dartpad/?id=0cf03a8b73201ed411749211d7199d20 \n void main() {\n  for (int i = 0; i < 5; i++) {\n    print('hello ${i + 1}');\n  }\n} \n", 'tags': '', 'url': 'LOOP.html'}, {'title': '7th week', 'text': '', 'tags': '', 'url': '7th week.html'}, {'title': '引用倉儲 Dart 程式(rungekutta)', 'text': '程式碼位於: https://github.com/40823131/cp2019/blob/master/downloads/dart_ex/for \n 包含 yaml 檔案: https://github.com/40823131/cp2019/blob/master/downloads/dart_ex/for/dartpad_metadata.yaml \n 以及所要引用的 Dart 程式: https://github.com/40823131/cp2019/blob/master/downloads/dart_ex/for/rungekutta.dart \xa0 \n 若為 console 模式, 利用 rungekutta.dart 與 dartpad_metadata.yaml 透過 embed-dart.html\xa0 導入. \n 若為網頁模式, 利用 rungekutta.dart, index.html style.css 與 dartpad_metadata.yaml 透過 embed-html.html 導入. \n rungekutta.dart 原始碼: \n // 下列 Dart 程式, 利用 Runge Kutta 迭代運算法, 解常微分方程式\n// 設 t 為時間, x 則設為物體的位移\n// 假設要解 F=ma 的單一質量加上彈簧 (常數為 k) 與黏滯阻尼 (常數為 b)\n// f 為沿位移方向的施力\n// dx/dt = v, dv/dt = (f-kx-bv)/m\n// dx / dt = (t - x)/2, 起始值 t0=0, x0=1, 求 t=2 時的 x 值\n//\n// 已知起始值 t0 與 x0 後, 可以利用下列 rungeKutta 函式, 以\n// h 為每步階增量值, 求 dxdt 常微分方程式任一 t 的對應值 x\n// 定義函式 rungeKutta, 共有四個輸入變數\n// 物體質量\nconst num m = 1;\n// 對質量的施力 f\nconst num f = 0.0;\n// 彈簧係數\nconst num k = 1;\n// 阻尼係數\nconst num b = 1;\n\n// 呼叫運算時, 需要起始時間, 終點時間, 位移起始值與速度起始值, 增量 h\nrungeKutta(t0, x0, v0, t, h) {\n  // 利用步階增量值 h 與 t 的起始及終點值\n  // 計算需要迭代的次數 n\n  int n = ((t - t0) / h).toInt();\n  // 宣告 x 為雙浮點數, 且設為起始值 x0\n  double x = x0;\n  // 宣告 v 為雙浮點數, 且設為起始值 v0\n  double v = v0;\n\n  // 模擬運算前, 列出起始條件\n  // 只列到小數點第三位, 時間、位移與速度以 \\t  隔開, \\t 代表插入 tab 符號, 可將資料複製到 Excel 進行繪圖\n  print("${t0.toStringAsFixed(3)} \\t ${x.toStringAsFixed(3)} \\t ${v.toStringAsFixed(3)}");\n\n  // 利用已知的 t0, x0, t 終點值與步階增量值 h, 迭代求 x 對應值\n  // 索引值 i 將每次增量 1, 從 i=1 執行 for 環圈至 i=n\n  for (int i = 1; i <= n; i++) {\n    // 將此階段的 t 與 x 值代入 dxdt 與 dvdt 函式求下列四個浮點變數值\n    // 因為必須兩個函式耦合, 必須同時計算\n    double xk1 = h * dxdt(t0, x, v);\n    double vk1 = h * dvdt(t0, x, v);\n    double xk2 = h * dxdt(t0 + 0.5 * h, x + 0.5 * xk1, v + 0.5 * vk1);\n    double vk2 = h * dvdt(t0 + 0.5 * h, x + 0.5 * xk1, v + 0.5 * vk1);\n    double xk3 = h * dxdt(t0 + 0.5 * h, x + 0.5 * xk2, v + 0.5 * vk2);\n    double vk3 = h * dvdt(t0 + 0.5 * h, x + 0.5 * xk2, v + 0.5 * vk2);\n    double xk4 = h * dxdt(t0 + h, x + xk3, v + vk3);\n    double vk4 = h * dvdt(t0 + h, x + xk3, v + vk3);\n    // 利用上述四個變數值求此步階增量後的對應 x 值\n    x = x + (1.0 / 6.0) * (xk1 + 2 * xk2 + 2 * xk3 + xk4);\n    v = v + (1.0 / 6.0) * (vk1 + 2 * vk2 + 2 * vk3 + vk4);\n    // 每次 for 迴圈執行最後, 準備計算下一個步階增量後的 x 對應值\n    // t 起始值配合步階增量值 h, 進行增量\n    t0 = t0 + h;\n    // 列出各模擬運算時間點所得到的結果\n    // 只列到小數點第三位, 時間、位移與速度以 \\t  隔開, \\t 代表插入 tab 符號, 可將資料複製到 Excel 進行繪圖\n  print("${t0.toStringAsFixed(3)} \\t ${x.toStringAsFixed(3)} \\t ${v.toStringAsFixed(3)}");\n  }\n\n  // 完成 for 迴圈迭代後, 傳回與 t 終點值對應的 x 值\n  return [x, v];\n}\n\n// 將微分方程式 "dx / dt = v" 定義為 dxdt 函式\ndxdt(t, x, v) {\n  return v;\n}\n\n// dx/dt = v, dv/dt = (f-kx-bv)/m\ndvdt(t, x, v) {\n  return (f - k * x - b * v) / m;\n}\n\n// 定義 main() 主函式內容, 目的在利用 rungeKutta 函式\n// 解常微分方程式\nmain() {\n// Driver method\n// num 資料型別可以是整數或雙浮點數\n  num t0 = 0;\n  num x0 = 1;\n  num v0 = 0;\n  num t = 5;\n  double h = 0.1;\n  rungeKutta(t0, x0, v0, t, h);\n} \n dartpad_metadata.yaml 設定檔案: \n # 說明此 yaml 檔案所引用程式的目的\nname: Dart for rungeKutta example1\n# 引用模式為純 dart 或 html 模式\nmode: dart\n# 所包含引入的程式名稱, 若為純 dart 則只包含 dart 程式, 若為 html 模式, 則加入 index.htm 與 style.css\nfiles:\n  - name: rungeKutta.dart \n 利用 iframe 標註引入 For RungeKutta 程式: \n \n', 'tags': '', 'url': '引用倉儲 Dart 程式(rungekutta).html'}, {'title': 'rungekutta chart', 'text': '\n \n 簡諧運動 \n', 'tags': '', 'url': 'rungekutta chart.html'}, {'title': '8th week', 'text': '', 'tags': '', 'url': '8th week.html'}, {'title': 'EX3', 'text': '\n \n \n \n \n \n \n', 'tags': '', 'url': 'EX3.html'}, {'title': '10th week', 'text': '分組倉儲: https://github.com/40823131/cp2019ag6 \n', 'tags': '', 'url': '10th week.html'}, {'title': '11th week', 'text': '', 'tags': '', 'url': '11th week.html'}, {'title': 'temperature', 'text': '純 Dart 程式 \n rungekutta helloworld temperature \n  內建放入的 Dart 原始碼  \n 放大   回復 \n', 'tags': '', 'url': 'temperature.html'}, {'title': 'image', 'text': '', 'tags': '', 'url': 'image.html'}]};