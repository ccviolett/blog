---
title: Markdown 最佳实践
---
## 表格

如果表格比较复杂，涉及到了数学公式，则推荐使用 $\LaTeX$ 中的表格来制表。

$$
\begin{array}{|c|c|c|c|c|}
\hline \text{排序算法} & \text{平均时间复杂度} & \text{最坏时间复杂度} & \text{空间复杂度} & \text{是否稳定} \\
\hline \text{冒泡排序} & {O(n^{2})} & {O(n^2)} & {O(1)} & \text{是} \\
\hline \text{选择排序} & {O(n^2)} & {O(n^2)} & {O(1)} & \text{不是}  \\
\hline \text{直接插入排序} & {O(n^2)} & {O(n^2)} & {O(1)} & \text{是}  \\
\hline \text{归并排序} & {O(nlogn)} & {O(nlogn)} & {O(n)} & \text{是} \\
\hline \text{快速排序} & {O(nlogn)} & {O(n^2)} & {O(logn)} & \text{不是} \\
\hline \text{堆排序} & {O(nlogn)} & {O(nlogn)} & {O(1)} & \text{不是} \\
\hline \text{希尔排序} & {O(nlogn)} & {O(n^3)} & {O(1)} & \text{不是} \\
\hline \text{计数排序} & {O(n+k)} & {O(n+k)} & {O(n+k)} & \text{是} \\
\hline \text{基数排序} & {O(N*M)} & {O(N*M)} & {O(M)} & \text{是} \\
\hline \end{array} 
$$
详见 [Markdown 表格 中 公式 - zh89233 - 博客园 (cnblogs.com)](https://www.cnblogs.com/love-zf/p/15158493.html)

如果表格中包含了图片和数学公式，则推荐使用语雀制作完成表格后截图插入。

![](https://ccviolett-1307804825.cos.ap-shanghai.myqcloud.com/img/202312111013117.png)
