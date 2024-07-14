---

---
# 作业

::: details 习题 1-5
求周期性三角波的均值和均方值及傅里叶级数三角函数形式和复指数形式，并画出频谱图。

周期性三角波的数学表达式为：

$$
x(t) = \begin{cases}
A + \frac{2A}{T}t,  & -T /2 \leq t \leq 0 \\
A - \frac{2A}{T}t,  & 0 < t < T /2 \\

\end{cases}
$$

解：

均值 
$$
\begin{align}
\mu_{x} = &  \lim_{ T \to \infty } \frac{1}{T} \int _{-T /2}^{T /2} x(t) \, dt \\
	=  & \lim_{ T \to \infty } \frac{1}{T}\left[ \int _{-T /2}^{0} \left( A + \frac{2A}{T}t \right) \, dt + \int_{0}^{T/2} \left( A - \frac{2A}{T}t \right)  \, dt   \right] \\
	=  & \lim_{ T \to \infty } \frac{1}{T}\left[ AT + \frac{2A}{T}\left( \int _{-T/2}^{0} t \, dt - \int _{0}^{T/2}t \, dt \right)   \right] \\
	=  & \lim_{ T \to \infty } \frac{1}{T} \left[ AT + \frac{2A}{T}\left( -\frac{T^{2}}{8} - \frac{T^{2}}{8} \right) \right] \\
	=  & \lim_{ T \to \infty } \frac{1}{2}A  \\
	=  & \frac{1}{2} A
\end{align}
$$

均方值

$$
\begin{align}
\varphi_{x}^{2} = & \lim_{ T \to \infty } \frac{1}{T}\int_{-T /2}^{T/2} x(t)^{2}  \, dt  \\
	=  & \lim_{ T \to \infty } \frac{1}{T}\left[ \int_{-T /2}^{0} \left( A + \frac{2A}{T}t \right)^{2}  \, dt + \int _{0}^{T/2}\left( A - \frac{2A}{T}t \right)^{2} \, dt  \right] \\
	=  & \lim_{ T \to \infty } \frac{1}{T}\left[ A^{2}T + \int_{-T /2}^{0} \left( \frac{4A^{2}}{T}t + \frac{4A^{2}}{T^{2}}t^{2} \right) \, dt  + \int _{0}^{T/2} \left( -\frac{4A^{2}}{T}t + \frac{4A^{2}}{T^{2}}t^{2} \right) \, dt  \right] \\
	=  & \lim_{ T \to \infty } \frac{1}{T}\left[ A^{2}T + \frac{4A^{2}}{T} \left( \int _{-T /2}^{0} t \, dt - \int _{0}^{T/2} t \, dt  \right) + \frac{4A^{2}}{T^{2}}\int _{-T /2}^{T/2} t^{2} \, dt  \right] \\
	=  & \lim_{ T \to \infty } \frac{1}{T}\left[ A^{2}T + \frac{4A^{2}}{T} \cdot \left( -\frac{T^{2}}{4} \right) + \frac{4A^{2}}{T^{2}} \left[ \frac{1}{3}\left( \frac{T}{2} \right)^{3} - \frac{1}{3}\left( -\frac{T}{2} \right)^{3} \right]\right] \\
	=  & \lim_{ T \to \infty } \frac{1}{T}\left[ \frac{4A^{2}}{3T^{2}} \cdot \frac{T^{3}}{4} \right] \\
	=  & \lim_{ T \to \infty } \frac{1}{3}A^{2}
\end{align}
$$

傅里叶级数三角函数形式：

$$
x(t) = \frac{a_{0}}{2} + \sum_{n = 1}^{\infty} a_{n} \cos n\omega_{0}t + b_{n}\sin n\omega_{0}t = \frac{a_{0}}{2} + \sum_{n = 1}^{\infty} A_{n} \cos(n\omega_{0}t + \varphi_{n})
$$

$$
\begin{cases}
a_{n} = \frac{2}{T} \int _{-T /2}^{T/2} x(t) \cos n\omega_{0}t \, dt \\
b_{n} = \frac{2}{T} \int _{-T /2}^{T/2}x(t) \sin n\omega_{0}t \, dt  = 0 \\
A_{n} = \sqrt{ a_{n}^{2} + b_{n}^{2} } = a_{n} \\
\varphi_{n} = -\arctan\left( \frac{b_{n}}{a_{n}} \right)
\end{cases}
$$

傅里叶级数复指数形式：

$$
x(t) = \sum_{n = -\infty}^{\infty}C_{n} e^{jn\omega_{0}t}
$$

$$
C_{n} = \frac{1}{T} \int_{-T /2}^{T/2} x(t) e^{-jn\omega_{0}t} \, dt
$$

:::

::: details 习题 2-9

求周期信号 $x(t) = 0.5\cos 10t + 0.2\cos(100t-45^{\circ})$ 通过传递函数为 $H(s) = \frac{1}{0.005s + 1}$ 的系统后所得到的稳态响应 $y(t)$。

:::

::: details 习题 2-11

已知某线性系统 $H(j\omega) = \frac{1}{1 + j 0.02 \omega}$，现测得该系统的稳态响应输出为 $y(t) = 10\sin(30t - 45^{\circ})$，试求它所对应的输入信号 $x(t)$。

解：
由频率保持性可得 $x(t) = A\sin(30t - \varphi)$

:::

::: details 习题 
已知函数 $x(t)$ 如图所示，其数学表达式为：

$$
x(t) = \begin{cases}
e^{at},  & t < 0 \\
e^{-at}  & t \geq 0 \\

\end{cases}
$$
求其傅里叶变换。

![](_images/截屏2023-12-19%2016.50.41.png)
:::

::: details 习题 5-1
假设有一个信号 $x(t)$，它由两个频率、幅值和相角均不相等的余弦分量叠加而成，其数学表达式为 $x(t) = A_{1}\cos(\omega_{1}t + \varphi_{1}) + A_{2}\cos(\omega_{2}t + \varphi_{2})$，试求该信号的自相关函数。
:::

