---
title: "介绍"
description: "Mu-PRO 介绍"
---

这个网站为您提供了计算材料科学的一般指导集合。尽管大部分知识适用于任何仿真，我们也会在适当的时候从MuPRO的视角进行更多讨论。

## MuPRO

> Mu-PRO旨在为介观尺度仿真提供易于使用的软件解决方案。请访问Mu-PRO的GitHub [**仓库**](https://github.com/orgs/muprosoftware/)和[**讨论区**](https://github.com/orgs/muprosoftware/discussions)！

### Mu-PRO SDK

我们理解每位用户都有独特的仿真需求，因此我们当前的主要焦点是分发Mu-PRO SDK，该SDK提供核心求解器给我们的客户，并允许他们定制使用这些核心求解器的主要程序。

- openmupro: MuPRO SDK常用的实用工具。购买者可以访问源代码，并可以对其进行贡献，这样我们下一个MuPRO SDK的发布将包含您的功能！
- muprosdk: 核心求解器，源代码对购买者不可访问。
- main programs: 结合OpenMuPRO和MuPRO SDK的子程序，形成一个解决物理模型的仿真程序。购买者可以分叉并修改源代码以满足他们自己的需求。

### Mu-PRO 软件

虽然`Mu-PRO SDK`是未来的方向，但目前我们仍然只分发可执行类型的软件。Mu-PRO软件分为两组：服务器软件和桌面软件。

- 服务器软件设计用于在Linux服务器上使用MPI进行并行化。可用的模块有:
  - 铁电（Ferroelectric）: 模拟极化领域结构的演变
  - 磁性（Magnetic）：模拟带弹性耦合的磁性领域结构演变
  - 有效性质（Effective Property）：计算场分布和线性性质的有效值
- 桌面软件设计用于在Windows上以串行方式运行，并带有图形用户界面(GUI)。可用模块包括：
  - 电介质击穿（Dielectric Breakdown）：基于随机模型模拟电介质击穿路径的演变
  - 有效性质（Effective Property）：计算场分布和线性性质的有效值
  - 阻抗（Impedance）：计算介质系统在不同频率下的阻抗

我们正在借助我们新开发的Mu-PRO SDK将这两个类别合并。因此，未来，服务器软件可能会具有图形用户界面来辅助参数输入，而桌面软件也可能会利用MPI加速仿真。
