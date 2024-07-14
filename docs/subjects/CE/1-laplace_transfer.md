---
title: "课时一、拉氏变换"
order: 10
---
## 拉氏（拉普拉斯）变换

函数 $f(t)$ 的拉氏变换，定义为：

$$F(s) = L[f(t)] = \int_{0}^{\infty} f(t)e^{-st}  \, dt$$

其中：$s = \sigma + j \omega$为复变数，$\int_{0}^{\infty} e^{-st} \, dt$称为拉普拉斯积分，$F(s)$称为函数$f(t)$的拉普拉斯变换或象函数，它是一个复变函数；$f(t)$ 称为$F(s)$的原函数。

同时，我们有拉氏反变换：

$$f(t) = L^{-1} [F(s)] = \frac{1}{2\pi j} \int _{\sigma - j \infty} ^{\sigma + j \infty} F(s) e^{st} \, ds, t > 0$$

拉氏变换建立了时域和复频域之间的联系。

## 简单函数的拉氏变换

![](_images/FdE2827bcc202312102325862.png)

## 拉氏变换性质

| 原理 | 性质 |
| --- | --- |
| 叠加原理 | $L[af_1(t) + bf_2(t)] = aL[f_1(t)] + bL[f_2(t)]$ |
| 微分定理 | $L\left[ \frac{df(t)}{dt} \right] = sF(s) - f(0), f(0) = f(t)_{t = 0}$ |
| 积分定理 | 当初始条件为零时，$L\left[ \int f(t) \, dx  \right] = \frac{1}{s}F(s)$ |
| 延时定理 | 设当 $t < 0$ 时，$f(t) = 0$，则对任意 $\tau \geq 0$，有：$L[f(t - \tau)] = e^{-\tau s} F(s)$ |
| 衰减定理 | $L[e^{-at}f(t)] = F(s + a)$ |
| 初值定理 | $lim_{t \to 0^+}f(t) = f(0^+) = lim_{s \to \infty} sF(s)$ |
| 终值定理 | $lim_{t \to \infty} f(t) = f(\infty) = lim_{s \to 0} sF(s)$ |
| 卷积定理 | $L[f(t) * g(t)] = F(s)G(s)$ |
| 结论1 | $L[f(\frac{t}{a})] = aF(as)$ |

## 常用函数拉氏变换

| 原函数 | 象函数 |
| --- | --- |
| $\delta(t)$ | $1$ |
| $\frac{t^n}{n!}$（如$\frac{1}{1}$、$\frac{t}{1}$、$\frac{t^2}{2}$） | $\frac{1}{s^{n + 1}}$ |
| $t^n$ | $\frac{n!}{s^{n + 1}}$ |
| $\sin \omega t$ | $\frac{\omega}{s^2 + \omega^2}$ |
| $\cos \omega t$ | $\frac{s}{s^2 + \omega^2}$ |
| $e^{-at}$ | $\frac{1}{s + a}$ |
| $te^{-at}$ | $\frac{1}{(s + a)^2}$ |
| $e^{-at}\sin \omega t$ | $\frac{\omega}{(s + a)^2 + \omega^2}$ |
| $e^{-at} \cos \omega t$ | $\frac{s + a}{(s + a)^2 + \omega^2}$ |

::: details 例题1（拉氏变换）

已知 $x(t) = 6 + 3t + 2t^4 + e^{-2t} + te^{-2t} + 3\sin 2t + 2\cos 3t + e^{-2t}\cos 3t + 2e^{-2t} \sin 3t$，求$L[x(t)]$。

解：由拉氏变换的叠加原理可得：

$$
L[x(t)] = \frac{6}{s} + \frac{3}{s^2} + \frac{48}{s^5} + \frac{1}{s + 2} + \frac{1}{(s + 2)^2} + \frac{6}{s^2 + 4} + \frac{2s}{s^2 + 9} + \frac{s + 2}{(s + 2)^2 + 9} + \frac{6}{(s + 2)^2 + 9}
$$

:::

## 部分分式法求解拉式反变换

在控制理论中，通常有：

$$
F(s) = \frac{B(s)}{A(s)} = \frac{\sum b_is^{m - i}}{\sum a_is^{n - i}} = \frac{\sum_{i = 0}^{m} \frac{b_i}{a_0}s^{m - i}}{\prod_{i = 0}^{n} (s + p_i)}
$$

我们称 $-p_i$ （即方程 $A(s) = 0$ 的根的负值）为$F(s)$的极点，分`只含不同单极点`、`含共轭复数极点`、`含多重极点`三种情况。

可以通过`留数法`或者`通分法`来解决。

### 1. 只含不同的单极点

$$
F(s) = \frac{B(s)}{A(s)} = \frac{c_{0}s ^{m} + c_{1}s ^{m - 1} + \dots + c_{m - 1}s + c_{0}}{(s + p_{1})(s + p_{2})\dots(s + p_{n})} = \frac{A_{1}}{s + p_{1}} + \frac{A_{2}}{s + p_{2}} + \dots + \frac{A_{n}}{s + p_{n}} = \sum_{i = 1}^{n} \frac{A_{i}}{s + p_{i}}
$$

式中，$A_{i}$ 为常数，称为 $s = -p_{i}$ 极点处的留数。

$$
A_{i} = [F(s) \cdot (s + p_{i})]_{s = -p_{i}}
$$

于是

$$
L^{-1}[F(s)] = L^{-1}\left[ \sum_{i = 1}^{n} \frac{A_{i}}{s + p_{i}} \right] = \sum_{i = 1}^{n} A_{i}e^{-p_{i}t}
$$
### 2. 含共轭复数极点

假设 $F(s)$ 含有一对共轭复数极点 $-p_{1}$、$-p_{2}$，其余极点均为各不相同的实数极点，则：

$$
F(s) = \frac{B(s)}{A(s)} = \frac{A_{1}s + A_{2}}{(s + p_{1})(s + p_{2})} + \frac{A_{3}}{s + p_{3}} + \dots + \frac{A_{n}}{s + p_{n}}
$$

式中，$A_{1}$ 和 $A_{2}$ 的值由下式求解：

$$
[F(s)(s + p_{1})(s + p_{2})]_{s = -p_{1}} = [A_{1}s + A_{2}]_{s = -p_{1}}
$$

上式为复数方程，令方程两端实部、虚部分别相等即可确定 $A_{1}$ 和 $A_{2}$ 的值。

### 3. 含多重极点

设 $F(s)$ 存在 $r$ 重极点 $-p_{0}$，其余极点均不同，则

$$
\begin{align}
F(s) &  = \frac{B(s)}{A(s)} = \frac{b_{0}s ^{m} + b_{1} s ^{m - 1} + \dots + b_{m - 1}s + b_{m}}{(s + p_{0})^{r}(s + p_{r + 1})\dots(s + p_{n})} \\
	 & = \frac{A_{01}}{(s + p_{0})^{r}} + \frac{A_{02}}{(s + p_{0})^{r - 1}} + \dots + \frac{A_{0r}}{(s + p_{0})} + \frac{A_{1}}{(s + p_{1})}\dots + \frac{A_{n}}{(s + p_{n})}
\end{align}
$$

式中，$A_{r+1}, \dots, A_{n}$ 利用前面的方法求解。

因式的拆分：$k$ 重一次因子的分子仍为常数项，二次因式的分子为一次因式。

$$
\begin{align}
A_{01}  & = [F(s)(s + p_{0})^{r}]_{s = -p_{0}} \\
A_{0r} & = \frac{1}{(r - 1)!} \left\{  \frac{d^{r - 1}}{d s ^{r - 1}}[F(s)(s + p_{0})^{r}] \right\}_{s = -p_{0}}
\end{align}
$$
注意到：

$$
L^{-1}\left[ \frac{1}{(s + p_{0})^{n}} \right] = \frac{t^{n - 1}}{(n - 1)!}e^{-p_{0}t}
$$

所以

$$
f(t) = L^{-1}[F(s)] = \left[ \frac{A_{01}}{(r - 1)!}t^{r - 1} + \frac{A_{02}}{(r - 2)!}t^{r - 2} + \dots + A_{0r} \right] e^{-p_{0}t} + A_{r + 1}e^{-p_{r + 1}t} + \dots + A_{n}e^{-p_{n}t} (t \geq 0)
$$

:::: details 例题2（只含不同单极点的部分分式法）

求 $F(s) = \frac{s^2 - s + 2}{s(s^2 - s - 6)}$的原函数。

解：$F(s) = \frac{s^2 - s + 2}{s(s^2 - s - 6)} = \frac{s^2 - s + 2}{s(s - 3)(s + 3)} = \frac{A_1}{s} + \frac{A_2}{s - 3} + \frac{A_3}{s + 2}$

::: tabs
@tab 留数法

$$
\begin{cases}
A_1 = [sF(s)]_{s = 0} & = -\frac{1}{3} \\
A_2 = [(s - 3)F(s)]_{s = 3} & = \frac{8}{15} \\
A_3 = [(s + 2)F(s)]_{s = -2} & = \frac{4}{5}
\end{cases}
$$
@tab 通分法
对式子进行通分可得：

$F(s) = \frac{(A_1  +A_2 + A_3)s^2 + (-A_1+2A_2-3A_3)s - 6A_1}{s(s - 3)(s + 2)}$

由对应系数相同可得：
$$\begin{cases}
A_{1} + A_{2} + A_{3} &= 1 \\
-A_{1} + 2A_{2} - 3A_{3} &= -1 \\
-6 A_{1} &= 2
\end{cases}

\Rightarrow

\begin{cases}
A_{1} &= -\frac{1}{3} \\
A_{2} &= \frac{8}{5} \\
A_{3} & = \frac{4}{5}
\end{cases}
$$
:::
故$F(s) = -\frac{1}{3} \cdot \frac{1}{s} + \frac{8}{15} \cdot \frac{1}{s - 3} + \frac{4}{5} \cdot \frac{1}{s + 2}$

$f(t) = L^{-1}[F(s)] = -\frac{1}{3} + \frac{8}{15}e^{3t} + \frac{4}{5}e^{-2t}$
::::

:::: details 例题3（含共轭复数极点）

求$F(s) = \frac{s + 1}{s(s^{2} + s + 1)}$的原函数。

解：$F(s) = \frac{s + 1}{s\left( s + \frac{1}{2} + j \frac{\sqrt{ 3 }}{2} \right) \left( s + \frac{1}{2} - j \frac{\sqrt{ 3 }}{2} \right)} = \frac{A_{0}}{s} + \frac{A_{1}s + A_{2}}{s^{2} + s + 1}$

::: tabs

@tab 留数法

有$A_{0} = sF(s)|_{s = 0} = 1$

由$(s^{2} + s + 1)F(s)|_{s = -\frac{1}{2} - j \frac{\sqrt{ 3 }}{2}} = (A_{1}s + A_{2})|_{s = -\frac{1}{2} - j \frac{\sqrt{ 3 }}{2}}$可得：

$$
\begin{cases}
-\frac{1}{2} (A_{1}+A_{2})=\frac{1}{2} \\
\frac{\sqrt{ 3 }}{2}(A_{1}-A_{2})=-\frac{\sqrt{ 3 }}{2}
\end{cases}
\Rightarrow
\begin{cases}
A_{1}=-1 \\
A_{2}=0
\end{cases}
$$

@tab 通分法

对式子进行通分可得：

$$
F(s) = \frac{(A_{0}+A_{1})s^{2}+(A_{0}+A_{2})s+A_{0}}{s(s^{2}+s+1)}
$$

由对应系数相同可得：

$$
\begin{cases}
A_{0}+A_{1}=0 \\
A_{0}+A_{2}=1 \\
A_{0}=1
\end{cases}
\Rightarrow
\begin{cases}
A_{0}=1 \\
A_{1}=-1 \\
A_{2}=0
\end{cases}
$$

:::

故 $F(s) = \frac{1}{s} - \frac{s}{s^{2}+s+1}$，随后我们通过配方法得出原函数$f(t)$：
$$
\begin{align}
F(s) & =  \frac{1}{s} - \frac{s}{s^{2}+s+1} \\
 & =\frac{1}{s} - \frac{s}{\left( s + \frac{1}{2} \right)^{2} + \left( \frac{\sqrt{ 3 }}{2} \right)^{2}} \\
 & = \frac{1}{s} - \frac{s + \frac{1}{2}}{\left( s + \frac{1}{2} \right)^{2} + \left( \frac{\sqrt{ 3 }}{2} \right)^{2}} + \frac{\frac{1}{2}}{\left( s + \frac{1}{2} \right)^{2} + \left( \frac{\sqrt{ 3 }}{2} \right)^{2}} \\
 & = \frac{1}{s} - \frac{s + \frac{1}{2}}{\left( s + \frac{1}{2} \right)^{2} + \left( \frac{\sqrt{ 3 }}{2} \right)^{2}} + \frac{1}{\sqrt{ 3 }} \frac{\frac{\sqrt{ 3 }}{2}}{\left( s + \frac{1}{2} \right)^{2} + \left( \frac{\sqrt{ 3 }}{2} \right)^{2}}
\end{align}
$$
$$
\begin{align}
f(t) &= L^{-1}[F(s)]  \\
 & = 1 - e^{-t/2}\cos \frac{\sqrt{ 3 }}{2}t + \frac{1}{\sqrt{ 3 }}e^{-t/2}\sin \frac{\sqrt{ 3 }}{2}t \\
 & = 1 - \frac{2}{\sqrt{ 3 }}e^{-t/2}\left( \frac{\sqrt{ 3 }}{2}\cos \frac{\sqrt{ 3 }}{2}t + \frac{1}{2}\sin \frac{\sqrt{ 3 }}{2}t \right) \\
 & = 1 - \frac{2}{\sqrt{ 3 }}e^{-t/2}\sin\left( \frac{\sqrt{ 3 }}{2}t + \frac{\pi}{3} \right), t\geq 0
\end{align}
$$
::::

:::: details 例题4（含多重极点）

求$F(s) = \frac{s + 3}{(s + 2)^{2}(s + 1)}$的原函数。

解：$F(s) = \frac{A_{1}}{(s + 2)^{2}} + \frac{A_{2}}{s + 2} + \frac{A_{3}}{s + 1}$

::: tabs

@tab 留数法

$$
\begin{cases}
A_{1} = [(s + 2)^{2}F(s)]_{s = -2} =  -1\\
A_{3} = [(s + 1)F(s)]_{s = -1} = 2
\end{cases}$$

有

$$\begin{align}
A_{2} &= \left\{ \frac{d}{ds}[(s + 2)^{2}F(s)] \right\}_{s = -2}  \\
 & = \left\{ \frac{d}{ds} \left[ \frac{s+3}{s+1} \right] \right\}_{s = -2}  \\
 & = \left[ \frac{(s + 3)'(s + 1) - (s + 3)(s + 1)'}{(s + 1)^{2}} \right]_{s = -2}  \\
 & = -2
\end{align}
$$

@tab 通分法

对式子进行通分可得：

$$
F(s) = \frac{(A_{2}+A_{3})s^{2}+(A_{1}+3A_{2}+4A_{3})s+(A_{1}+2A_{2}+4A_{3})}{(s+2)^{2}(s+1)}
$$

由对应系数相同可得：

$$
\begin{cases}
A_{2}+A_{3}=0 \\
A_{1}+3A_{2}+4A_{3}=1 \\
A_{1}+2A_{2}+4A_{3}=3
\end{cases}
\Rightarrow
\begin{cases}
A_{1}=-1 \\
A_{2}=-2 \\
A_{3}=2
\end{cases}
$$

:::
故

$F(s) = -\frac{1}{(s+2)^{2}}-\frac{2}{s+2}+\frac{2}{s+1}$

$f(t) = -te^{-2t}-2e^{-2t}+2e^{-t} = -(t + 2)e^{-2t} + 2e^{-t}, t\geq 0$
::::

## 利用拉氏变换求解微分方程

当我们难以直接求解微分方程时，我们可以通过拉氏变换求出象函数的代数方程，通过求解代数方程得到象函数，随后通过拉氏反变换得回原函数微分方程的解。

:::: details 例题5（拉氏变换求解微分方程）

设系统微分方程为：$\frac{d^{2}x_{o}(t)}{dt^{2}} + 5 \frac{dx_{o}(t)}{dt} + 6 x_{o}(t) = x_{i}(t)$，若 $x_i(t) = 1(t)$，初始条件分别为 $x'_o(0)$、$x_o(0)$，试求$x_o(t)$。

解：对微分方程左边进行拉氏变换：

$$
\begin{cases}
L\left[ \frac{d^{2}x_{o}(t)}{dt^{2}} \right] &= s^{2}X_{o}(s) - sx_{o}(0) - x'_{o}(0) \\
L\left[ 5 \frac{dx_{o}(t)}{dt} \right] &= 5sX_{o}(s) - 5x_{o}(0) \\
L[6x_{o}(t)] &= 6X_{o}(s)
\end{cases}$$

故$L[\frac{d^{2}x_{o}(t)}{dt^{2}} + 5 \frac{dx_{o}(t)}{dt} + 6 x_{o}(t)] = (s^{2} + 5s + 6)X_{o}(s) - (s + 5)x_{o}(0) - x'_{o}(0)$

对微分方程右边进行拉氏变换：$L[x_{i}(t)] = X_{i}(s) = L[1(t)] = \frac{1}{s}$

从而 $(s^{2} + 5s + 6)X_{o}(s) - (s + 5)x_{o}(0) - x'_{o}(0) = \frac{1}{s}$ 

整理得：$X_{o}(s) = \frac{1 + s(s + 5)x_{o}(0) + s \cdot x'_{o}(0)}{s(s + 2)(s + 3)} = \frac{A_{1}}{s} + \frac{A_{2}}{s + 2} + \frac{A_{3}}{s + 3}$

::: tabs
@tab 留数法

$$
\begin{cases}
A_{1} = [sF(s)]_{s = 0} = \frac{1}{6} \\
A_{2} = [(s + 2)F(s)]_{s = -2} = -\frac{1}{2} + 3x_{o}(kj0) + x'_{o}(0) \\
A_{3} = [(s + 3)F(s)]_{s = -3} = \frac{1}{3} - 2x_{o}(0) - x'_{o}(0)
\end{cases}
$$
@tab 通分法

$$
X_{o}(s) = \frac{(A_{1}+A_{2}+A_{3})s^{2}+(5A_{1}+3A_{2}+2A_{3})s+6A_{1}}{s(s+2)(s+3)}
$$

$$\begin{cases}
A_{1}+A_{2}+A_{3}=x_{o}(0) \\
5A_{1}+3A_{2}+2A_{3}=5x_{o}(0)+x'_{o}(0) \\
6A_{1}=1
\end{cases}
\Rightarrow
\begin{cases}
A_{1} = \frac{1}{6} \\
A_{2} = -\frac{1}{2} + 3x_{o}(kj0) + x'_{o}(0) \\
A_{3} = \frac{1}{3} - 2x_{o}(0) - x'_{o}(0)
\end{cases}$$

:::

故

$$\begin{align}
X_{o}(s) & = \frac{\frac{1}{6}}{s} + \frac{-\frac{1}{2} + 3x_{o}(kj0) + x'_{o}(0) }{s + 2}  + \frac{\frac{1}{3} - 2x_{o}(0) - x'_{o}(0)}{s + 3} \\
	& = \frac{\frac{1}{6}}{s} -\frac{\frac{1}{2}}{s + 2} + \frac{\frac{1}{3}}{s + 3} + \frac{3x_{o}(0) + x'_{o}(0)}{s + 2} + \frac{-2x_{o}(0) - x'_{o}(0)}{s + 3}
\end{align}$$

$$
x_{o}(t) = \frac{1}{6}  - \frac{1}{2}e^{-2t} + \frac{1}{3}e^{-3t} + [3x_{o}(0) + x'_{o}(0)]e^{-2t} - [-2x_{o}(0) - x'_{o}(0)]e^{-3t},t\geq 0
$$

当初始条件为零时：$x_{o}(t) = \frac{1}{6}  - \frac{1}{2}e^{-2t} + \frac{1}{3}e^{-3t}, t \geq 0$

::::


:::: details 例题6（微分定理求解微分方程）

某系统微分方程为$3 \frac{dy_{o}(t)}{dt} + 2y_{o}(t) = 2 \frac{dx_{i}(t)}{dt} + 3 x_{i}(t)$，已知$y_o(0) = x_o(0) = 0$，当输入为$1(t)$时，输出的终值和初值各为多少？

解：当输入为$1(t)$时，$X_i(s) = L[x_i(t)] = L[1(t)] = \frac{1}{s}$

对微分方程两边进行拉氏变换：

$3sY_{o}(s) + 2Y_{o}(s) = 2sX_{i}(s) + 3X_{i}(s)$

整理得 $Y_{o}(s) = \frac{2s + 3}{3s + 2}X_{i}(s) = \frac{2s + 3}{3s + 2} \cdot \frac{1}{s}$

由初值定理和终值定理可得：

$$\begin{align}
y_{o}(\infty) = \lim_{ t \to \infty } y_{o}(t) = \lim_{ s \to o } sY_{o}(s) = \lim_{ s \to 0 } s \cdot \frac{2s + 3}{3s + 2} \cdot \frac{1}{s} = \frac{3}{2} \\
y_{o}(0) = \lim_{ t \to 0 } y_{o}(t) = \lim_{ s \to \infty } sY_{o}(s) = \lim_{ s \to \infty } s \cdot \frac{2s + 3}{3s + 2} \cdot \frac{1}{s} = \frac{2}{3} \\
\end{align}$$

::::

