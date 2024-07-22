ABB-IRB 120 是六自由度串联机器人，属于 ABB 公司的第四代机器人 产品。它具有出色的便携性与集成性，且控制精度与路径精度高，在现代社会的许多行业中都发挥着重要的作用。下面是对该机器人的运动学分析和仿真。

![[截屏2024-04-21 21.54.31.png]]

## 一、建系

通过建立各个连杆间的相互联系以及与对象的运动关系，可以描述出六自由度机械臂的运动学模型。采用 MDH（Modified DH，改良 DH 法，即课本上所介绍的方法）进行建模，坐标系如图：

![[截屏2024-04-22 14.40.44.png]]

## 二、连杆参数表

每个连杆由四个参数 $a_{i - 1}, \alpha_{i - 1}, d_{i}, \theta_{i}$ 来描述：$a_{i - 1}$ 和 $\alpha_{i - 1}$ 描述连杆 $i - 1$ 本身的特征，为长度和扭角；$d_{i}$ 和 $\theta_{i}$ 描述连杆 $i - 1$ 和连杆 $i$ 之间的联系，为偏置和关节角。

ABB IRB 120 机器人的六个关节都是旋转关节，$\theta_{i}$ 为可变的，其连杆参数表如下：

| 关节  | $\theta_{i}$ | $d_{i}$ | $\alpha_{i}$ | $a_{i}$ |
| :-: | :----------: | :-----: | :----------: | :-----: |
|  0  |              |    0    |      0       |    0    |
|  1  | $\theta_{1}$ |   103   |     -90      |    0    |
|  2  | $\theta_{2}$ |    0    |      0       |   270   |
|  3  | $\theta_{3}$ |    0    |     +90      |   70    |
|  4  | $\theta_{4}$ |   302   |     -90      |    0    |
|  5  | $\theta_{5}$ |    0    |     +90      |    0    |
|  6  | $\theta_{6}$ |   72    |      0       |    0    |

## 三、连杆变换矩阵

连杆变换 $\sideset{^{i - 1}_{i}}{^{}_{}}T$ 可以看成是坐标系 $\{i\}$ 经以下四个子变换得到的：
- 绕 $x_{i - 1}$ 轴转 $\alpha_{i - 1}$
- 沿 $x_{i - 1}$ 轴移动 $a_{i - 1}$
- 绕 $z_{i}$ 轴转 $\theta_{i}$
- 沿 $z_{i}$ 轴移动 $d_{i}$

可以得到连杆变换通式：

$$
\begin{align}
\sideset{^{i - 1}_{i}}{^{}_{i}} T &  = Trans_{x}(a_{i - 1})Rot_{x}(\alpha_{i - 1})Trans_{z}(d_{i})Rot_{z}(\theta_{i})  \\
 & = \begin{bmatrix}
 \cos\theta_{i} & -\sin\theta_{i} & 0 & a_{i - 1} \\
\cos\alpha_{i - 1}\sin\theta_{i}  & \cos\alpha_{i - 1}\cos\theta_{i} & -\sin\alpha_{i - 1} & -d_{i}\sin\alpha_{i - 1} \\
\sin\alpha_{i - 1}\sin\theta_{i} & \sin\alpha_{i - 1}\cos\theta_{i} & \cos\alpha_{i - 1} & d_{i}\cos\alpha_{i - 1} \\
0  & 0  & 0  & 1
\end{bmatrix}
\end{align}
$$

故：

$$
\begin{align}
\sideset{^{0}_{1}}{^{}_{}} T &  = \begin{bmatrix}
c_{1}  & -s_{1} & 0 & 0 \\
s_{1} & c_{1} & 0 & 0 \\
0 & 0 & 1 & d_{1} \\
0 & 0 & 0 & 1
\end{bmatrix} \\

\sideset{^{1}_{2}}{^{}_{}} T &  = \begin{bmatrix}
c_{2} & -s_{2} & 0 & 0 \\
0 & 0 & 1 & 0 \\
-s_{2} & -c_{2} & 0 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix} \\

\sideset{^{2}_{3}}{^{}_{}} T &  = \begin{bmatrix}
c_{3} & -s_{3} & 0 & a_{2} \\
s_{3} & c_{3} & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix} \\

\sideset{^{3}_{4}}{^{}_{}} T &  = \begin{bmatrix}
c_{4} & -s_{4} & 0 & a_{3} \\
0 & 0 & -1 & -d_{4} \\
s_{4} & c_{4} & 0 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix} \\

\sideset{^{4}_{5}}{^{}_{}} T  & = \begin{bmatrix}
c_{5} & -s_{5} & 0 & 0 \\
0 & 0 & 1 & 0 \\
-s_{5} & -c_{5} & 0 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix} \\

\sideset{^{5}_{6}}{^{}_{}} T & = \begin{bmatrix}
c_{6} & -s_{6} & 0 & 0 \\
0 & 0 & -1 & -d_{6} \\
s_{6} & c_{6} & 0 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
\end{align}
$$

## 四、正向运动学

$$
\begin{align}

\sideset{^{0}_{2}}{^{}_{}} T = \sideset{^{0}_{1}}{^{}_{}} T \sideset{^{1}_{2}}{^{}_{}} T = &  \begin{bmatrix}
c_{1}c_{2} & -c_{1}s_{2} & -s_{1} & a_{2}c_{1} \\
c_{2}s_{1} & -s_{1}s_{2} & c_{1} & a_{2}s_{1} \\
-s_{2} & -c_{2} & 0 & d_{1} \\
0 & 0 & 0 & 1 \\
\end{bmatrix} \\

\sideset{^{0}_{3}}{^{}_{}} T = \sideset{^{0}_{2}}{^{}_{}} T \sideset{^{2}_{3}}{^{}_{}} T = & \begin{bmatrix}
c_{1}c_{2}c_{3}-c_{1}s_{3}s_{3} & -c_{1}c_{3}s_{2}-c_{1}c_{2}s_{3} & -s_{1} & a_{2}c_{1}+a_{2}c_{1}c_{2} \\
c_{2}c_{3}s_{1}-s_{1}s_{2}s_{3} & -c_{3}s_{1}s_{2}-c_{2}s_{1}s_{3} & c_{1} & a_{2}s_{1}+a_{2}c_{2}s_{1} \\
-c_{3}s_{2}-c_{2}s_{3} & -c_{2}c_{3}+s_{2}s_{3} & 0 & d_{1}-a_{2}s_{2} \\
0 & 0 & 0 & 1
\end{bmatrix} \\


\sideset{^{3}_{5}}{^{}_{}} T = \sideset{^{3}_{4}}{^{}_{}} T \sideset{^{4}_{5}}{^{}_{}} T =  & \begin{bmatrix}
c_{4}c_{5} & -c_{4}s_{5} & -s_{4} & a_{3} \\
s_{5} & c_{5} & 0 & -d_{4} \\
c_{5}s_{4} & -s_{4}s_{5} & c_{4} & 0 \\
0 & 0 & 0 & 1
\end{bmatrix} \\

\sideset{^{3}_{6}}{^{}_{}} T = \sideset{^{3}_{5}}{^{}_{}} T \sideset{^{5}_{6}}{^{}_{}} T =  & \begin{bmatrix}
c_{4}c_{5}c_{6} - s_{4}s_{6} & -c_{6}s_{4}-c_{4}c_{5}s_{6} & c_{4}s_{5} & a_{3}+c_{4}d_{6}s_{5} \\
c_{6}s_{5} & -s_{5}s_{6} & -c_{5} & -d_{4}-c_{5}d_{6} \\
c_{5}c_{6}s_{4}+c_{4}s_{6} & c_{4}c_{6}-c_{5}s_{4}s_{6} & s_{4}s_{5} & d_{6}s_{4}s_{5} \\
0 & 0 & 0 & 1
\end{bmatrix}

\end{align}
$$

故


$$
\sideset{^{0}_{6}}{^{}_{}} T = \sideset{^{0}_{1}}{^{}_{}} T \sideset{^{1}_{2}}{^{}_{}} T\sideset{^{2}_{3}}{^{}_{}} T\sideset{^{3}_{4}}{^{}_{}} T\sideset{^{4}_{5}}{^{}_{}} T \sideset{^{5}_{6}}{^{}_{}} T = \sideset{^{0}_{3}}{^{}_{}} T \sideset{^{3}_{6}}{^{}_{}} T =   \begin{bmatrix}
n_{x} & o_{x} & a_{x} & p_{x} \\
n_{y} & o_{y} & a_{y} & p_{y} \\
n_{z} & o_{z} & a_{z} & p_{z}  \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

其中

$$
\begin{align}
n_{x} & = c_{6}[c_{5}(c_1c_2c_3c_4-c_1c_4s_2s_3-s_1s_4)+s_{5}(-c_1c_3s_2-c_1c_2s_3)] + s_{6}(-c_4s_1-c_1c_2c_3s_4+c_1s_2s_3s_4)	 \\
n_{y} & = c_{6}[c_{5}(c_2c_3c_4s_1-c_4s_1s_2s_3+c_1s_4)+s_{5}(-c_3s_1s_2-c_2s_1s_3)] + s_{6}(c_1c_4-c_2c_3s_1s_4+s_1s_2s_3s_4) \\
n_{z} & = c_{6}[c_{5}(-c_3c_4s_2-c_2c_4s_3) + s_{5}(-c_2c_3+s_2s_3)]+s_{6}(c_3s_2s_4+c_2s_3s_4) \\
o_{x} & = c_{6}(-c_4s_1-c_1c_2c_3s_4+c_1s_2s_3s_4) + s_{6}[c_{5}(-c_1c_2c_3c_4+c_1c_4s_2s_3+s_1s_4)+s_{5}(c_1c_3s_2+c_1c_2s_3)] \\
o_{y} & = c_{6}(c_1c_4-c_2c_3s_1s_4+s_1s_2s_3s_4) + s_{6}[c_{5}(-c_2c_3c_4s_1+c_4s_1s_2s_3-c_1s_4)+s_{5}(c_3s_1s_2+c_2s_1s_3)] \\
o_{z} & = c_{6}(c_3s_2s_4+c_2s_3s_4)+s_{6}[c_{5}(c_3c_4s_2+c_2c_4s_3)+s_{5}(c_2c_3-s_2s_3)] \\
a_{x} & = c_{5}(c_1c_3s_2+c_1c_2s_3)+s_{5}(c_1c_2c_3c_4-c_1c_4s_2s_3-s_1s_4) \\
a_{y} & = c_{5}(c_3s_1s_2+c_2s_1s_3)+s_{5}(c_2c_3c_4s_1-c_4s_1s_2s_3+c_1s_4) \\
a_{z} & = c_{5}(c_2c_3-s_2s_3)+s_{5}(-c_3c_4s_2-c_2c_4s_3) \\
p_{x} & = d_6[c_5(c_1c_3s_2+c_1c_2s_3)+s_5(c_1c_2c_3c_4-c_1c_4s_2s_3-s_1s_4)] +d_4(c_1c_3s_2+c_1c_2s_3)  \\
 & +a_3(+c_1c_2c_3-c_1s_2s_3) +a_2(c_1+c_1c_2) \\
p_{y} & = d_6[c_5(c_3s_1s_2+c_2s_1s_3)+s_5(c_2c_3c_4s_1-c_4s_1s_2s_3+c_1s_4)]+d_4(c_3s_1s_2+c_2s_1s_3) \\
 & + a_3(c_2c_3s_1-s_1s_2s_3)+a_2(s_1+c_2s_1) \\
p_{z} & = d_6[s_5(-c_3c_4s_2-c_2c_4s_3)+c_5(c_2c_3-s_2s_3)]+d_4(c_2c_3-s_2s_3)+d_1 \\
 & +a_3(-c_3s_2-c_2s_3)-a_2s_2
\end{align}

$$

其中 $c_{i}$ 和 $s_{i}$ 表示 $\cos\theta i$ 和 $\sin\theta_{i}$，由连杆参数表可知其中 $d_{1} = 103mm, d_{4} = 302mm, d_{6} = 72mm, a_{2} = 270mm, a_{3} = 70mm$

## 五、逆向运动学

已知

$$
T = \begin{bmatrix}
\sideset{^{A}_{B}}{^{}_{}} R & \sideset{^{A}_{}}{^{}_{Bo}} T \\
0 & 1
\end{bmatrix} 
\implies
T^{-1} = \begin{bmatrix}
\sideset{^{A}_{B}}{^{}_{}} R^{T} & -\sideset{^{A}_{B}}{^{}_{}} R^{T} \sideset{^{A}_{}}{^{}_{Bo}} p \\
0 & 1
\end{bmatrix}
$$

由 $\sideset{^{0}_{6}}{^{}_{}} T = \sideset{^{0}_{1}}{^{}_{}} T \sideset{^{1}_{2}}{^{}_{}} T\sideset{^{2}_{3}}{^{}_{}} T\sideset{^{3}_{4}}{^{}_{}} T\sideset{^{4}_{5}}{^{}_{}} T \sideset{^{5}_{6}}{^{}_{}} T$ 可得 $\sideset{^{0}_{1}}{^{-1}_{}}T \sideset{^{0}_{6}}{^{}_{}}T = \sideset{^{1}_{2}}{^{}_{}}T\sideset{^{2}_{}}{^{3}_{}}T\sideset{^{3}_{4}}{^{}_{}}T\sideset{^{4}_{5}}{^{}_{}}T\sideset{^{5}_{6}}{^{}_{}}T$，两边为等价矩阵，各个元素相等。

由两边矩阵乘法结果第 3 行第 4 列相等可得：$-p_{y}c_{1} + p_{x}s_{1} = 0$，解得 $\theta_{1} = atan2(p_{x}, p_{y})$

由两边矩阵乘法结果第 1 行第 4 列和第 2 行第 4 列相等可得：

$$
\begin{align}
p_{x}c_{1} + p_{y}s_{1} &  = a_{2}c_{2} + a_{3}c_{2}c_{3} + d_{4}s_{2}s_{3} \\
p_{z} - d_{1} & = a_{2}s_{2}+a_{3}s_{2}s_{3} - d_{4}c_{2}c_{3}
\end{align}
$$

联立两式解得：

$$
a_{3}c_{3} + d_{4}s_{3} = \frac{(p_{x}c_{1} + p_{y}s_{1})^{2} + (p_{z} - d_{1})^{2} - a_{2}^{2} - a_{3}^{2} - d_{4}^{2}}{2a_{2}}
$$

令 $\omega = \frac{(p_{x}c_{1} + p_{y}s_{1})^{2} + (p_{z} - d_{1})^{2} - a_{2}^{2} - a_{3}^{2} - d_{4}^{2}}{2a_{2}}$，则有：$\theta_{3} = atan2(\omega, \pm \sqrt{ 1 - \omega^{2} }) - atan2(a_{3}, d_{4})$

由 $\sideset{^{0}_{6}}{^{}_{}} T = \sideset{^{0}_{1}}{^{}_{}} T \sideset{^{1}_{2}}{^{}_{}} T\sideset{^{2}_{3}}{^{}_{}} T\sideset{^{3}_{4}}{^{}_{}} T\sideset{^{4}_{5}}{^{}_{}} T \sideset{^{5}_{6}}{^{}_{}} T$ 可得 $\sideset{^{1}_{2}}{^{-1}_{}}T\sideset{^{0}_{1}}{^{-1}_{}}T \sideset{^{0}_{6}}{^{}_{}}T = \sideset{^{2}_{}}{^{3}_{}}T\sideset{^{3}_{4}}{^{}_{}}T\sideset{^{4}_{5}}{^{}_{}}T\sideset{^{5}_{6}}{^{}_{}}T$，两边为等价矩阵，各个元素相等。

由两边矩阵乘法结果第 1 行第 4 列和第 2 行第 4 列元素相等可得：

$$
\begin{align}
p_{x}c_{1}c_{2} + p_{y}s_{1}c_{2} + p_{z}s_{2} - d_{1}s_{2} - a_{2} &  =  a_{3}c_{3} + d_{4}s_{3} \\
p_{z}c_{2} - d_{1}c_{2} - (p_{z}c_{1} + p_{y}s_{1})s_{2} & = -d_{4}c_{3} + a_{3}s_{3}
\end{align}
$$

解得 $\theta_{2} = atan 2(s_{2}, c_{2})$，其中 

$$
\begin{align}
s_{2} &  = \frac{a_{3}c_{3} + d_{4}s_{3} + a_{2} - c_{2}(p_{x}c_{1} + p_{y}s_{1})}{p_{z} - d_{1}} \\
c_{2} & = \frac{(a_{3}s_{3} - d_{4}c_{3})p_{z} + (p_{x}c_{1} + p_{y}s_{1})(a_{3}c_{3} + d_{4}s_{3} + a_{2})}{(p_{z} - d_{1})^{2} + (p_{x}c_{1} + p_{y}s_{1})^{2}}
\end{align}
$$

根据机器人的正逆向运动学的求解方法，结合机器人解耦设计的准则："如果最后三个关节坐标相交于一点，可以将逆向运动学问题解耦成两个：逆向位置运动学Inverse position kinematics、 逆向方位运动学Inverse orientation kinematics"，ABB-IRB-120 机械臂满足该准则，可以利用反变换法或者几何+代数解法两种求解，此处为保持简洁，统一使用反变换法求解。
 
同理求解 $\theta_{4}, \theta_{5}$，在 $\sideset{^{0}_{6}}{^{}_{}} T = \sideset{^{0}_{1}}{^{}_{}} T \sideset{^{1}_{2}}{^{}_{}} T\sideset{^{2}_{3}}{^{}_{}} T\sideset{^{3}_{4}}{^{}_{}} T\sideset{^{4}_{5}}{^{}_{}} T \sideset{^{5}_{6}}{^{}_{}} T$ 式两边同时左乘 $\sideset{^{0}_{4}}{^{-1}_{}}T$，根据两边矩阵第 3 行 2 列元素相等，可求解得 $\theta_{4}$；根据两边矩阵第 3 行第 1 列相等、第 3 行第 3 列相等，可求解得 $\theta_{5}$：

由 

$$
c_{4}(-a_{y}c_{1} + a_{x}s_{1}) - s_{4}(-a_{z}c_{2}s_{3} - a_{z}c_{3}s_{2} - a_{x}c_{1}c_{2}c_{3} - a_{y}c_{2}c_{3}s_{1} + a_{x}c_{1}s_{2}s_{3} + a_{y}s_{1}s_{2}s_{3}) = 0
$$

可得

$$
\theta_{4} = atan2(-a_{y}c_{1} + a_{x}s_{1}, -a_{z}c_{2}s_{3} - a_{z}c_{3}s_{2} - a_{x}c_{1}c_{2}c_{3} - a_{y}c_{2}c_{3}s_{1} + a_{x}c_{1}s_{2}s_{3} + a_{y}s_{1}s_{2}s_{3})
$$

由

$$
\begin{align}
-s_{5} & = a_{x}s_{1}s_{4} - a_{y}s_{1}s_{4} + a_{z}c_{2}c_{4}s_{3} + a_{z}c_{3}c_{4}s_{2} + a_{x}c_{1}c_{2}c_{3}c_{4} + a_{y}c_{2}c_{3}c_{4}s_{1} - a_{x}c_{1}c_{4}s_{2}s_{3} - a_{y}c_{4}s_{1}s_{2}s_{3} \\
c_{5} & = a_{z}c_{2}c_{3} - a_{z}s_{2}s_{3} - a_{x}c_{1}c_{2}s_{3} - a_{x}c_{1}c_{3}s_{2} - a_{y}c_{2}s_{1}s_{3} - a_{y}c_{3}s_{1}s_{2}
\end{align}
$$

$$
\theta_{5} = at an 2(-s_{5}, c_{5})
$$

同理求解 $\theta_{6}$，在 $\sideset{^{0}_{6}}{^{}_{}} T = \sideset{^{0}_{1}}{^{}_{}} T \sideset{^{1}_{2}}{^{}_{}} T\sideset{^{2}_{3}}{^{}_{}} T\sideset{^{3}_{4}}{^{}_{}} T\sideset{^{4}_{5}}{^{}_{}} T \sideset{^{5}_{6}}{^{}_{}} T$ 式两边同时左乘 $\sideset{^{0}_{5}}{^{-1}_{}}T$，根据两边矩阵第 3 行 2 列元素相等，可求解得 $\theta_{4}$；根据两边矩阵第 3 行第 1 列相等和第 3 行第 2 列相等，可得：

$$
\begin{align}
s_{6} &  = n_{y}c_{1}c_{4} - n_{x}c_{4}s_{1} + n_{z}c_{2}s_{3}s_{4} + n_{z}c_{3}s_{2}s_{4} + n_{x}c_{1}c_{2}c_{3}s_{4}  \\
 & + n_{y}c_{2}c_{3}s_{1}s_{4} - n_{x}c_{1}s_{2}s_{3}s_{4} - n_{y}s_{1}s_{2}s_{3}s_{4} \\
c_{6} & = o_{y}c_{1}c_{4} - o_{x}c_{4}s_{1} + o_{z}c_{2}s_{3}s_{4} + o_{z}c_{3}s_{2}s_{4} + o_{x}c_{1}c_{2}c_{3}s_{4}  \\
 & + o_{y}c_{2}c_{3}s_{1}s_{4} - o_{x}c_{1}s_{2}s_{3}s_{4} - o_{y}s_{1}s_{2}s_{3}s_{4}
\end{align}
$$

$$
\theta_{6} = at an 2(s_{6}, c_{6})
$$

## 六、雅可比矩阵

雅可比矩阵表示末端执行器速度与关节速度之间的关系：

$$
v_{e} = J(q)\dot{q}
$$

对于一个六关节机器人，$v_{e}$ 是一个 $6 \times 1$ 的末端执行器线速度和角速度矩阵，$\dot{q}$ 是一个 $6 \times 1$ 的关节速度矩阵，$J(q)$ 为雅可比矩阵，大小为 $6 \times 6$。

因为 IRB 120 机器人的所有关节都是旋转的，故：

$$
J = \begin{bmatrix}
z_{0}\times(O_{6}-O_{0}) & z_{1}\times(O_{6}-O_{1}) & z_{2}\times(O_{6}-O_{2}) &  z_{3} \times (O_{6} - O_{3}) & z_{4} \times(O_{6}-O_{4}) & z_{5}\times(O_{6}-O_{5}) \\
z_{0} & z_{1} & z_{2} & z_{3} & z_{4} & z_{5}
\end{bmatrix}
$$

其中

$$
\begin{cases}
z_{0} = \begin{bmatrix}
0 \\
0 \\
1
\end{bmatrix}, z_{i} = \begin{bmatrix}
\sideset{^{0}_{i}}{^{}_{}} T(1, 3) \\
\sideset{^{0}_{i}}{^{}_{}} T(2, 3) \\
\sideset{^{0}_{i}}{^{}_{}} T(3, 3)
\end{bmatrix}, i = 1, 2, 3, 4, 5 \\

O_{0} = \begin{bmatrix}
0 \\
0 \\
0
\end{bmatrix}, O_{i} = \begin{bmatrix}
\sideset{^{0}_{i}}{^{}_{}} T(1, 4) \\
\sideset{^{0}_{i}}{^{}_{}} T(2, 4) \\
\sideset{^{0}_{i}}{^{}_{}} T(3, 4)
\end{bmatrix}, i = 1, 2, 3, 4, 5, 6

\end{cases}
$$

得

$$
J = \begin{bmatrix}
J_{v_{i}} \\
-- \\
J_{\omega_{i}}
\end{bmatrix}  = \begin{bmatrix}
J_{11} & J_{12} & J_{13} &  J_{14} & J_{15} & J_{16}  \\
J_{21} & J_{22} & J_{23} &  J_{24} & J_{25} & J_{26}  \\
0 & J_{32} & J_{33} &  J_{34} & J_{35} & J_{36}  \\
-- & -- & -- & -- & -- & -- \\
0 & -s_{1} & -s_{1} & J_{44} & J_{45} & J_{46} \\
0 & c_{1} & c_{1} &  J_{54} & J_{55} & J_{56} \\
1 & 0 & 0 & J_{64} & J_{65} & J_{66}
\end{bmatrix}_{6 \times 6}
$$

其中：

$$
\begin{aligned} 
J_{11} = & -d_6\left[s_5\left(s_1 c_2 c_3 c_4-s_1 s_2 s_3 c_4+c_1 s_4\right)+c_5\left(s_1 c_2 s_3+s_1 s_2 c_3\right)\right]-d_4\left(s_1 c_2 s_3+s_1 s_2 c_3\right) \\ 
& -a_3\left(s_1 c_2 c_3-s_1 s_2 s_3\right)-a_2 s_1 c_2 \\

J_{21} = & d_6\left[s_5\left(c_1 c_2 c_3 c_4-c_1 s_2 s_3 c_4-s_1 s_4\right)+c_5\left(c_1 c_2 s_3+c_1 s_2 c_3\right)\right]+d_4\left(c_1 c_2 s_3+c_1 s_2 c_3\right) \\ 
& +a_3\left(c_1 c_2 c_3-c_1 s_2 s_3\right)+a_2 c_1 c_2 \\

J_{12} = & -d_6\left[s_5\left(c_1 s_2 c_3 c_4+c_1 c_2 s_3 s_4\right)+c_5\left(c_1 s_2 s_3-c_1 c_2 c_3\right)\right]-d_4\left(c_1 s_2 s_3-c_1 s_2 c_3\right) \\ 
& -a_3\left(c_1 s_2 c_3+c_1 c_2 s_3\right)-a_2 c_1 s_2 \\ 

J_{22} = &d_6\left[s_5\left(s_1 s_2 c_3 c_4+s_1 c_2 s_3 s_4\right)+c_5\left(s_1 s_2 s_3-s_1 c_2 c_3\right)\right]+d_4\left(s_1 s_2 s_3-s_1 c_2 c_3\right) \\
& +a_3\left(s_1 s_2 c_3+s_1 c_2 s_3\right)+a_2 s_1 s_2 \\ 

J_{13} = &-d_6\left[s_5\left(c_1 s_2 c_3 c_4+c_1 c_2 s_3 s_4\right)+c_5\left(c_1 s_2 s_3-c_1 c_2 c_3\right)\right]-d_4\left(c_1 s_2 s_3-c_1 s_2 c_3\right) \\ 
& -a_3\left(c_1 s_2 c_3+c_1 c_2 s_3\right)\\ 

J_{23} = &d_6\left[s_5\left(s_1 s_2 c_3 c_4+s_1 c_2 s_3 s_4\right)+c_5\left(s_1 s_2 s_3-s_1 c_2 c_3\right)\right]+d_4\left(s_1 s_2 s_3-s_1 c_2 c_3\right) \\ 
& +a_3\left(s_1 s_2 c_3+s_1 c_2 s_3\right)\\ 

J_{32} = &-d_6\left[s_5\left(s_1^2 c_2 c_3 c_4-s_1^2 s_2 s_3 c_4+c_1 s_1 s_4\right)+c_5\left(s_1^2 c_2 s_3+s_1^2 s_2 c_3\right)\right]-d_4\left(s_1^2 c_2 s_3+s_1^2 s_2 c_3\right) \\
& - a_3\left(s_1^2 c_2 c_3-s_1^2 s_2 s_3\right)-a_2 s_1^2 c_2-d_6\left[s_5\left(c_1^2 c_2 c_3 c_4-c_1^2 s_2 s_3 c_4-c_1 s_1 s_4\right)+c_5\left(c_1^2 c_2 s_3+c_1 s_2 c_3\right)\right] \\ 
& -d_4\left(c_1^2 c_2 s_3+c_1^2 s_2 c_3\right)-a_3\left(c_1^2 c_2 c_3-c_1^2 s_2 s_3\right)- a_2 c_1^2 c_2 \\

J_{33} = &-d_6\left[s_5\left(s_1^2 c_2 c_3 c_4-s_1^2 s_2 s_3 c_4+c_1 s_1 s_4\right)+c_5\left(s_1^2 c_2 s_3+s_1^2 s_2 c_3\right)\right]-d_4\left(s_1^2 c_2 s_3+s_1^2 s_2 c_3\right) \\
& -a_3\left(s_1^2 c_2 c_3-s_1^2 s_2 s_3\right)-d_6\left[s_5\left(c_1^2 c_2 c_3 c_4-c_1^2 s_2 s_3 c_4-c_1 s_1 s_4\right)+c_5\left(c_1^2 c_2 s_3+c_1 s_2 c_3\right)\right]- \\
& d_4\left(c_1^2 c_2 s_3+c_1^2 s_2 c_3\right)-a_3\left(c_1^2 c_2 c_3-c_1^2 s_2 s_3\right) \\

J_{14} = &-d_6\left(s_1 c_2 s_3+s_1 s_2 c_3\right)\left[s_5\left(s_2 c_3 c_4+c_2 s_3 s_4\right)+c_5\left(s_2 s_3-c_2 c_3\right)\right]+d_6\left(s_2 s_3-c_2 c_3\right) \\ 
& \cdot {\left[s_5\left(s_1 c_2 c_3 c_4-s_1 s_2 s_3 c_4+c_1 s_4\right)+\right.} \left.c_5\left(s_1 c_2 s_3+s_1 s_2 c_3\right)\right] \\

J_{24} = &-d_6\left(s_2 s_3-c_2 c_3\right)\left[s_5\left(c_1 c_2 c_3 c_4-\right.\right. \left.\left.c_1 s_2 s_3 c_4-s_1 s_4\right)+c_5\left(c_1 c_2 s_3+c_1 s_2 c_3\right)\right]+ \\ & d_6\left(c_1 c_2 s_3+c_1 s_2 c_3\right)\left[s_5\left(s_2 c_3 c_4+c_2 s_3 s_4\right)+\right. \left.c_5\left(s_2 s_3-c_2 c_3\right)\right] \text {; } \\

J_{34} = &d_6\left(c_1 c_2 s_3+c_1 s_2 c_3\right)\left[s_5\left(s_1 c_2 c_3 c_4-s_1 s_2 s_3 c_4+\right.\right. \left.\left.c_1 s_4\right)+c_5\left(s_1 c_2 s_3+s_1 s_2 c_3\right)\right]-d_6\left(s_1 c_2 s_3+s_1 s_2 c_3\right) . \\ & {\left[s_5\left(s_1 c_2 c_3 c_4-s_1 s_2 s_3 c_4+c_1 s_4\right)+c_5\left(s_1 c_2 s_3+s_1 s_2 c_3\right)\right] ;} \\

J_{15} = &-d_6\left(s_1 c_2 c_3 s_4-s_1 s_2 s_3 s_4-c_1 c_4\right) . {\left[s_5\left(s_2 c_3 c_4+c_2 s_3 s_4\right)+c_5\left(s_2 s_3-c_2 c_3\right)\right]-} \\ 
& d_6\left(s_2 c_3 s_4+c_2 s_3 s_4\right)\left[s_5\left(s_1 c_2 c_3 c_4-s_1 s_2 s_3 c_4+\right.\right. \left.\left.c_1 s_4\right)+c_5\left(s_1 c_2 s_3+s_1 s_2 c_3\right)\right] ; \\

J_{25} = &d_6\left(s_2 c_3 s_4+c_2 s_3 s_4\right)\left[s_5\left(c_1 c_2 c_3 c_4-c_1 s_2 s_3 c_4-\right.\right. \left.\left.s_1 s_4\right)+c_5\left(c_1 c_2 s_3+c_1 s_2 c_3\right)\right]-d_6\left(c_1 c_2 c_3 s_4-\right. \\
& \left.c_1 s_2 s_3 s_4+s_1 c_4\right)\left[s_5\left(s_2 c_3 c_4+c_2 s_3 s_4\right)+\right. \left.c_5\left(s_2 s_3-c_2 c_3\right)\right] \\


J_{35} = &-d_6\left(c_1 c_2 c_3 s_4-c_1 s_2 s_3 s_4+s_1 c_4\right) . {\left[s_5\left(s_1 c_2 c_3 c_4-s_1 s_2 s_3 c_4+c_1 s_4\right)+\right.} \\
& \left.c_5\left(s_1 c_2 s_3+s_1 s_2 c_3\right)\right]+d_6\left(s_1 c_2 c_3 s_4-\right. \left.s_1 s_2 s_3 s_4-c_1 c_4\right)\left[s _ { 5 } \left(c_1 c_2 c_3 c_4-c_1 s_2 s_3 c_4-\right.\right. \\
& \left.\left.s_1 s_4\right)+c_5\left(c_1 c_2 s_3+c_1 s_2 c_3\right)\right] \text {; } \\

J_{16} = &-d_6\left[s_5\left(s_2 c_3 c_4+c_2 s_3 s_4\right)+c_5\left(s_2 s_3-c_2 c_3\right)\right] . {\left[s_5\left(c_1 c_2 c_3 c_4-c_1 s_2 s_3 c_4-s_1 s_4\right)+c_5\left(c_1 c_2 s_3+\right.\right.} \\
 & \left.\left.c_1 s_2 c_3\right)\right]+d_6\left[s_5\left(s_2 c_3 c_4+c_2 s_3 s_4\right)+c_5\left(s_2 s_3-\right.\right. \left.\left.c_2 c_3\right)\right]\left[s_5\left(s_1 c_2 c_3 c_4-s_1 s_2 s_3 c_4+c_1 s_4\right)+c_5\left(s_1 c_2 s_3+\right.\right. \\
 & \left.\left.c_1 s_2 c_3\right)\right] \\

J_{26} = &-d_6\left[s_5\left(c_1 c_2 c_3 c_4-c_1 s_2 s_3 c_4-s_1 s_4\right)+\right. \left.c_5\left(c_1 c_2 s_3+c_1 s_2 c_3\right)\right]\left[s_5\left(s_2 c_3 c_4+c_2 s_3 s_4\right)+\right. \\
& \left.c_5\left(s_2 s_3-c_2 c_3\right)\right]+d_6\left[s _ { 5 } \left(c_1 c_2 c_3 c_4-c_1 s_2 s_3 c_4-\right.\right. \left.\left.s_1 s_4\right)+c_5\left(c_1 c_2 s_3+c_1 s_2 c_3\right)\right]\left[s_5\left(s_2 c_3 c_4+c_2 s_3 c_4\right)+\right. \\
& \left.c_5\left(s_2 s_3-c_2 c_3\right)\right] \text {; } \\

J_{36} = &d_6\left[s_5\left(s_1 c_2 c_3 c_4-s_1 s_2 s_3 c_4+c_1 s_4\right)+\right.  \left.c_5\left(s_1 c_2 s_3+s_1 s_2 c_3\right)\right]\left[s _ { 5 } \left(c_1 c_2 c_3 c_4-c_1 s_2 s_3 c_4-\right.\right. \\
 & \left.\left.s_1 s_4\right)+c_5\left(c_1 c_2 s_3+c_1 s_2 c_3\right)\right]-d_6\left[s _ { 5 } \left(s_1 c_2 c_3 c_4-\right.\right.  \left.\left.s_1 s_2 s_3 c_4+c_1 s_4\right)+c_5\left(s_1 c_2 s_3+s_1 s_2 c_3\right)\right] . \\
& {\left[s_5\left(c_1 c_2 c_3 c_4-c_1 s_2 s_3 c_4-s_1 s_4\right)+\right.} \left.c_5\left(c_1 c_2 s_3+c_1 s_2 c_3\right)\right] \\

J_{44} = &c_1 c_2 s_3+c_1 s_2 c_3 ; \\
J_{54} = &s_1 c_2 s_3+s_1 s_2 c_3 ; \\
J_{64} = &c_2 c_3-s_2 s_3 \text {; } \\
J_{45} = &-c_1 c_2 c_3 s_4+c_1 s_2 s_3 s_4-s_1 c_4 \\
J_{55} = &-s_1 c_2 c_3 s_4+s_1 s_2 s_3 s_4+c_1 c_4 \\
J_{65} = &s_2 c_3 s_4+c_2 s_3 s_4 \\
J_{46} = &s_5\left(c_1 c_2 c_3 c_4-c_1 s_2 s_3 c_4-s_1 s_4\right)+ c_5\left(c_1 c_2 s_3+c_1 s_2 c_3\right) \\
J_{56} = &s_5\left(s_1 c_2 c_3 c_4-s_1 s_2 s_3 c_4+c_1 s_4\right)+ c_5\left(s_1 c_2 s_3+s_1 s_2 c_3\right) \\
J_{66} = &-s_5\left(s_2 c_3 c_4+c_2 s_3 c_4\right)-c_5\left(s_2 s_3-c_2 c_3\right) \\
\end{aligned}

$$

## 七、仿真

通过 Matlab 软件中的 Robotics Toolbox，对 IRB120 进行仿真，通过连杆参数表建立对应的连杆，其中 $d_{1} = 187mm, d_{4} = 168mm, a_{2} = 230mm, a_{3} = 107mm$，建立的 IRB120 机器人连杆仿真图如图所示。

![](_images/截屏2024-04-22%2023.44.22.png)

IRB120 的末端从初始位置 $(23.7, 10, -4.6)$ 移动到终点位置 $(28.7, 47.45, 39.44)$，其轨迹图如图所示。

![](_images/截屏2024-04-22%2023.44.50.png)

各关节角度随时间变化曲线如下图所示。

![](_images/截屏2024-04-22%2023.45.15.png)