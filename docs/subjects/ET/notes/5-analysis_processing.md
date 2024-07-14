---
order: 50
date: 2023-12-15
---
# 第五章 信号分析与处理

## 相关分析

### 相关系数

$$
\rho_{xy} = \frac{E[(x - \mu_{x})(y - \mu_{y})]}{\sigma_{x}\sigma_{y}}
$$

### 自相关函数

$$
R_{x}(\tau) = \lim_{ T \to 0 } \frac{1}{T} \int _{0}^{T} x(t) x(t - \tau) \, dt 
$$

$$
\rho_{x}(\tau) = \frac{R_{x}(\tau) - \mu^{2}_{x}}{\sigma^{2}_{x}}
$$

#### 自相关函数的性质

1. 取值范围 $\mu_{x}^{2} - \sigma^{2}_{x} \leq R_{x}(\tau) \leq \mu_{x}^{2} + \sigma_{x}^{2}$
2. $R_{x}(0) = \lim_{ T \to \infty } \frac{1}{T}\int ^{T}_{0} x(t)x(t) \, dt = \psi_{x}^{2}$
3. $\tau \to \infty, \rho_{x}(\tau) \to 0, R_{x}(\tau)\to \mu_{x}^{2}$
4. $R_{x}(-\tau) = R_{x}(\tau)$
5. $A$、$f$ 有，$\varphi$ 缺失了，由 $R_{x}(\tau)$ 识别信号类型

::: details 例题
求正弦函数 $x(t) = x_{0}\sin(\omega t + \varphi)$ 的自相关函数，初相角 $\varphi$ 为一随机变量。

解：此正弦函数是一个零均值的各态历经随机过程，其平均值可用一个周期内的平均值表示。

$$
\begin{align}
R_{x}(\tau) = &  \lim_{ T \to \infty } \frac{1}{T}\int _{0}^{T}x(t)x(t + \tau) \, dt  \\
= &  \frac{1}{T_{0}} \int _{0}^{T_{0}} x_{0}^{2} \sin(\omega t + \varphi) \sin[\omega(t + \tau) + \varphi] \, dt
\end{align}
$$

有 $T_{0} = \frac{2\pi}{\omega}$ 为正弦函数的周期。令 $\omega t + \varphi = \theta$，kk则 $dt = \frac{d\theta}{\omega}$，故

$$
\begin{align}
R_{x}(\tau) =  & \frac{\omega}{2\pi} \int _{0}^{2\pi} x_{0}^{2}\sin \theta \sin(\theta + \omega \tau)  \, \frac{d\theta}{\omega} \\
	=  & \frac{x_{0}^{2}}{2\pi}\int _{0}^{2\pi} \sin\theta \sin(\theta+\omega \tau) \, d\theta  \\
	=  & \frac{x_{0}^{2}}{2\pi}\int _{0}^{2\pi} \frac{1}{2}\left\{\cos[\theta - (\theta + \omega \tau)] - \cos[\theta + (\theta + \omega\tau)] \right\} \, d\theta \\
	= &  \frac{x_{0}^{2}}{2\pi} \cdot \frac{1}{2} \left[ \int _{0}^{2\pi} \cos(\omega \tau) \, d\theta - \int _{0}^{2\pi} \cos (2\theta + \omega \tau) \, d\theta   \right] \\
	=  & \frac{x_{0}^{2}}{2\pi} \cdot \frac{1}{2} \cdot 2\pi \cos(\omega \tau) \\
	=  & \frac{1}{2}x_{0}^{2}\cos(\omega \tau)
\end{align}
$$
:::

::: tip 自相关函数的保留信息 
正弦函数 $x_{0}\sin(\omega t + \varphi)$ 的自相关函数是一个余弦函数 $\frac{1}{2}x_{0}^{2} \cos(\omega t)$，保留了幅值和频率信息，丢失了相位信息。
:::

### 互相关函数

$$
R_{xy}(\tau) = \lim_{ T \to \infty }  \frac{1}{T} \int ^{T}_{0} x(t)y(t + \tau) \, dt 
$$

#### 互相关函数的性质

- 非偶函数
- $\tau = \tau_{0}$ 时呈现最大值，反映 $x(t)$ 和 $y(t)$ 之间的滞后时间

::: details 例题
设有两个周期信号 $x(t) = x_{0}\sin(\omega t + \theta)$、$y(t) = y_{0}\sin(\omega t + \theta - \varphi)$。

其中 $\theta$ 为 $x(t)$ 相对 $t = 0$ 的相位角， $\varphi$ 为 $x(t)$ 与 $y(t)$ 的相位差。

求其互相关函数 $R_{xy}(\tau)$。

解：因为信号是周期信号，可用一个周期 $T_{0}$ 代替整个历程 $T$

$$
\begin{align}
R_{xy}(\tau) = &  \lim_{ T \to \infty }  \frac{1}{T} \int _{0}^{T} x(t)y(t+\tau) \, dt \\
	 =  & \frac{1}{T_{0}}\int _{0}^{T_{0}}x_{0}\sin(\omega t + \theta)y_{0}\sin[\omega(t + \tau) + \theta - \varphi] \, dt  \\
	=  & \frac{x_{0}y_{0}}{T_{0}} \int _{0}^{T_{0}}  \frac{1}{2} \{ \cos[(\omega t + \theta) - (\omega t + \omega \tau + \theta - \varphi)] - \cos[(\omega t + \theta) + (\omega t + \omega \tau + \theta - \varphi)]\} \, dt \\
	=  & \frac{x_{0}y_{0}}{T_{0}} \cdot \frac{1}{2} \int _{0}^{T_{0}} \cos(\omega \tau - \varphi) - \cos[2(\omega t + \theta) + \omega \tau - \varphi] \, dt  \\
\end{align}
$$

有 $T_{0} = \frac{2\pi}{\omega}$，令 $\omega t + \theta = \alpha$，则 $dt = \frac{d\alpha}{\omega}$，代入得：

$$
\begin{align}
R_{xy}(\tau) = &  \frac{x_{0}y_{0}\omega}{2\pi} \cdot \frac{1}{2} \int _{0}^{2\pi} [\cos(\omega \tau - \varphi) - \cos(2\alpha + \omega \tau - \varphi)] \, \frac{d\alpha}{\omega}  \\
	=  & \frac{x_{0}y_{0}\omega}{2\pi} \cdot \frac{1}{2} \cdot \frac{1}{\omega} \left[ \int_{0}^{2\pi} \cos(\omega \tau-\varphi) \, d\alpha - \int _{0}^{2\pi}\cos(2\alpha + \omega \tau - \varphi) \, d\alpha   \right] \\
	=  & \frac{x_{0}y_{0}\omega}{2\pi} \cdot \frac{1}{2} \cdot \frac{1}{\omega} \cdot 2\pi \cos(\omega \tau - \varphi) \\
	=  & \frac{1}{2}x_{0}y_{0}\cos(\omega \tau - \varphi)
\end{align}
$$

:::

::: tip 互相关函数的保留信息
互相关函数中保留了两个信号的圆频率 $\omega$，以及对应的幅值 $x_{0}, y_{0}$ 和相位差 $\varphi$，丢失了初识相位角 $\theta$
:::

#### 互相关函数的应用

- 相关滤波
- 相关测速
- 位置检测：石油管道破损位置定位
- 诊断：振动定位

## 功率谱分析

### 自功率谱密度函数

$$
\begin{cases}
S_{x}(f)  & = \int _{-\infty}^{\infty} R_{x}(\tau)e^{-j 2\pi f\tau} \, d\tau \\
R_{x}(\tau)  & = \int ^{\infty}_{-\infty} S_{x}(f) e^{j 2\pi f\tau} \, df
\end{cases}
$$

$S_{x}(f)$ 就是 $x(t)$ 的自功率谱密度函数

物理意义：信号平均功率

### 互功率谱密度函数

$$
\begin{cases}
S_{xy}(f) = \int_{-\infty}^{\infty} R_{x}(\tau)e^{-j 2\pi f \tau} \, d\tau  \\
R_{xy}(\tau) = \int _{-\infty}^{\infty} S_{xy}(f) e^{j 2\pi f\tau} \, df 
\end{cases}
$$

### 相干函数、倒频谱分析及应用

相干函数定义：相干函数是用来评价测试系统的输入信号与输出信号之间的因果关系的函数，即通过相干函数判别系统中输出信号的功率谱有多少是所测输入信号所引起的响应。$0 \leq \gamma_{xy}^{2} \leq 1$

倒频谱定义：倒频谱分析也叫二次频谱分析，是检测复杂谱图中周期分量的有效工具。
- 功率倒频谱：$C_{q} = |F\{\log S_{x}(f)\} |^{2}$
- 有效幅值倒频谱（倒频谱）：$C_{o}(q) = \sqrt{ C_{p}(q) }$