---
title: "课时五、误差分析和计算"
order: 50
---
## 稳态误差

稳态误差是控制系统在输入信号作用下稳态输出的期望值与实际输出值之差。

设$x_{or}(t)$是控制系统期望的输出值，$x_o(t)$是实际的输出值，则误差函数$e(t) = x_{or}(t) - x_{o}(t)$

稳态误差$e_{ss} = \lim_{ t \to \infty } e(t) = \lim_{ t \to \infty } [x_{or}(t) - x_{o}(t)]$，直接表示了控制系统的参数稳定时的准确程度

## 稳态偏差

控制系统的偏差信号$\varepsilon(s)$是系统的输入信号$X(s)$与系统的反馈信号$Y(s)$之差

$$
\varepsilon(s) = X_{i}(s) - Y(s) = X_{i}(s) - H(s)X_{o}(s)
$$

![](_images/fD0A432650202312111127645.png)

稳态偏差$\varepsilon_{ss} = \lim_{ t \to \infty } \varepsilon(t) = \lim_{ s \to 0 } s\varepsilon(s)$，间接表示控制系统的稳态控制准确程度

## 误差信号和偏差信号的关系

误差函数$e(t) = x_{or} - x_o(t)$，则$E(s) = X_{or} - X$

单位反馈控制系统的偏差函数$\varepsilon(s)$和误差函数$E(s)$是相等的。对于非单位反馈控制系统，$E(s) = \frac{1}{H(s)} \varepsilon(s)$。

- 误差是从系统输出端来定义的，是输出期望值与实际输出值之差
- 偏差是从系统输入端来定义的，是系统输入信号与主反馈信号之差

## 误差传递函数与稳态误差

$$\frac{\varepsilon(s)}{X_{i}(s)} = \frac{1}{1 + G(s)H(s)}$$

$$\varepsilon_{ss} = \lim_{ t \to \infty } = \lim_{ s \to 0 } s\cdot\varepsilon(s) = \lim_{ s \to 0 } s\cdot \frac{1}{1 + G(s)H(s)}X_{i}(s)$$

$$e_{ss} = \lim_{ t \to \infty } e(t) = \lim_{ s \to 0 } sE(s) = \lim_{ s \to 0 } s \frac{1}{H(s)}\varepsilon(s) = \lim_{ s \to 0 } s\cdot \frac{1}{H(s)}\cdot \frac{1}{1+G(s)H(s)}X_{i}(s)$$

::: details 例题1（误差传递函数与稳态误差）

已知控制系统如图，求当$x_i(t) = 1(t)$时的稳态误差。

![](_images/a9C0f0AC3E202312111127820.png)

解：当$x_i(t) = 1(t)$时，$X_I(s) = \frac{1}{s}$

故$e_{ss} = \lim_{ s \to 0 } s \cdot \frac{1}{H(s)}\cdot \frac{1}{1+G(s)H(s)}X_{i}(s) = \lim_{ s \to 0 } s \cdot \frac{s}{s + 10}\cdot \frac{1}{s} = 0$

:::

## 静态误差系数

### 影响稳态误差的因素

我们化简静态误差的式子：

$$
G(s)H(s) = \frac{K(\gamma_{1}s + 1)(\gamma_{2}s + 1)\dots}{s ^{\nu}(T_{1}s + 1)(T_{2}s + 1)\dots}
$$

$$
e_{ss} = \lim_{ t \to \infty } e(t) = \lim_{ s \to 0 } sE(s) = \lim_{ s \to 0 } s \frac{1}{1 + G(s)H(s)}X_{i}(s) = \lim_{ s \to 0 } \frac{sX_{i}(s)}{1 + \frac{K}{s^{\nu}}}
$$

可以得到影响静态误差的因素：

- 输入信号$X_i(s)$
- 开环增益$K$
- 系统类型$\nu$
   - $\nu = 0$称为 0 型系统
   - $\nu = 1$称为 I 型系统
   - $\nu = 2$称为 II 型系统

### 系统对不同输入的稳态误差

![](_images/89f2bCE5fa202312111129140.png)

::: tip
例：在单位斜坡输入信号作用下，0 型系统的稳态误差 $e_{ss} = \infty$
:::

- 位置误差、速度误差、加速度误差分别指输入为阶跃、斜坡、加速度信号时输出位置上的误差
- 对于单位反馈系统，$e_{ss} = \varepsilon_{ss}$；对于非单位反馈系统，先求出$\varepsilon_{ss}$，然后求$e_{ss} = \frac{\varepsilon_{ss}}{H(0)}$
- 稳态误差可看成各典型信号作用下误差的总和

::: details 例题2（静态误差系数）

求系统在单位阶跃、斜坡、加速度输入的稳态误差。

![](_images/2f9bEaEEa4202312111130170.png)

解：

$$
G(s)H(s) = \frac{\omega_{n}^{2}}{s(s + 2\zeta\omega_{n})} = \frac{\frac{\omega_{n}}{2\zeta}}{s\left( \frac{1}{2\zeta\omega_{n}} s + 1  \right)}
$$

故该系统为 I 型系统，且$K = \frac{\omega_{n}}{2\zeta}$，故

单位阶跃$e_{ss} = 0$

单位斜坡$e_{ss} = \frac{1}{K} = \frac{2\zeta}{\omega_n}$

单位加速度$e_{ss} = \infty$
:::

::: details 例题3（误差的总和）

已知单位负反馈系统的开环传递函数$G_k(s) = \frac{100}{s(s + 2)}$，试确定系统的型次$\nu$和开环增益$K$；当输入为$r(t) = 1 + 3t + 2t^{2}$时，系统的稳态误差。

解：$G_{k}(s) = \frac{100}{s(s + 2)} = \frac{50}{s(0.5s + 1)}$，故$\nu = 1$，$K = 50$

当输入为$r(t) = 1 + 3t + 2t^{2}$时，稳态误差为$e_{ss} = 0 + \frac{3}{k} + \infty = \infty$
:::

## 干扰引起的稳态误差

![](_images/7f3Bc9d06E202312111131348.png)

令$x_i(t) = 0$，则系统只存在扰动，我们可以知道$\frac{\varepsilon_{N}(s)}{N(s)} = \frac{-G_{2}(s)H(s)}{1 + G_{1}(s)G_{2}(s)H(s)}$，即$\varepsilon_{N}(s) = \frac{-G_{2}(s)H(s)}{1 + G_{1}(s)G_{2}(s)H(s)}N(s)$

稳态偏差等于输入引起的稳态偏差和干扰引起的稳态偏差之和，即：

$$
\begin{align}
\varepsilon_{ss} & = \varepsilon_{ssX} + \varepsilon_{ssN} \\
	 & = \lim_{ s \to 0 } s \cdot\varepsilon_{X}(s)  + \lim_{ s \to 0 } s \cdot \varepsilon_{N}(s) \\
	 & = \lim_{ s \to 0 } s\cdot \frac{X_{i}(s) - G_{2}(s)H(s)N(s)}{1 + G_{1}(s)G_{2}(s)H(s)}
\end{align}
$$

随后得到稳态误差 $e_{ss} = \frac{\varepsilon_{ss}}{H(0)}$

::: details 例题4（扰动引起的误差）

某系统如下图所示，当$x_{i}(t) = t\cdot 1(t)$、$n(t) = 0.5 \cdot 1(t)$作用时，$e_{ss}$值为多少？

![](_images/39BBeb9CC3202312111131064.png)

解：根据劳斯判据该系统稳定。

该系统为单位反馈系统，其稳态偏差即为稳态误差。

$$
\varepsilon_{ssX} = \lim_{ s \to 0 } s\cdot \varepsilon_{X}(s) = \lim_{ s \to 0 } s \frac{1}{1 + \frac{10}{0.1s + 1}\cdot \frac{1}{s(s + 4)}} \cdot \frac{1}{s^{2}} = \frac{1}{2.5}
$$

$$
\varepsilon_{ssN} = \lim_{ s \to 0 } s \cdot \varepsilon_{N}(s) = \lim_{ s \to 0 } s \frac{-\frac{1}{s(s + 4)}}{1 + \frac{10}{0.1s + 1}\cdot \frac{1}{s(s + 4)}}\cdot \frac{0.5}{s} = -\frac{1}{20}
$$

$$
e_{ss} = \varepsilon_{ss} = \varepsilon_{ssX} + \varepsilon_{ssN} = \frac{1}{2.5} - \frac{1}{20} = 0.35
$$

:::

## 减小系统误差的途径：

1. 反馈通道的精度对于减小系统误差至关重要。反馈通道元部件精度要高，避免在反馈通道引入干扰。
2. 在系统稳定的前提下
   1. 对于输入引起的误差，增大系统开环放大倍数，提高系统型次；
   2. 对于干扰引起的误差，在前向通道干扰点前加积分器，增大放大倍数。
3. 既要求稳态误差小，又要求良好动态性能，只靠加大开环放大倍数或串入积分环节不能同时满足要求时，可采用复合控制方法对误差进行补偿。补偿的方式可分为按干扰补偿和按输入补偿。

