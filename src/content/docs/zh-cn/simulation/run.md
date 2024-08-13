---
title: 运行主程序
---

## 步骤 1：连接服务器
正如我们在[配置 SSH 连接部分 步骤 3](/en/zh-cn/developer/developer/#配置-SSH-连接)中所做的那样。

## 步骤 2：创建并打开目录

1.在临时目录下新建文件夹，用于运行模拟。您不想直接在工作文件夹中运行任何模拟，因为它的磁盘 RW 速度较慢，存储空间有限。

```sh
cd scratch
mkdir test-run
```

2.单击 "Open Folder" 并导航到创建的文件夹，然后单击 "ok"。

## 步骤 3：创建输入文件
               
为了快速上手，可以从相应主程序下的示例文件夹中复制输入文件，如铁电`apps/muFerro/examples`。

```sh
cp /storage/home/xuc116/work/PhaseFieldSDK/apps/PhaseFieldFerroelectric/examples/basic/*.toml .
```

如果复制上述命令，请记住将用户名替换为自己的用户名。

## 步骤 4：试运行模拟

在提交仿真作业之前，您可以先尝试直接在登录节点上使用较小的系统运行仿真。请记住，您必须缩小这些计算的大小，因为登录节点有内存限制。为此，您需要打开 input.toml 文件，更新**simulation_grid**关键字后面的值。

由于我们已在[上一步](/en/zh-cn/programming/workflow/#第5步-为可执行文件添加别名)配置了**muferro**别名，因此只需在 test-run 文件夹中调用 muferro 即可启动铁电体程序。

## 第 5 步：提交模拟作业

1.准备一个 pbs 文件，下面是 PSU ACI 服务器的 pbs 文件示例，我们称之为 ferro.pbs

```sh
#PBS -l nodes=1:ppn=1
#PBS -l walltime=24:00:00
#PBS -l pmem=5g
#PBS -A open
#PBS -N jobname
#PBS -j oe
#PBS -M 0001001bill@gmail.com -me

module load intel
module load mkl
module load impi

cd $PBS_O_WORKDIR
echo `date`
/storage/home/xuc116/work/PhaseFieldSDK/out/build/linux-intel-Debug/apps/PhaseFieldFerroelectric/apps/basic/muFerroBasic
echo `date`
```

2.使用 `qsub ferro.pbs` 将作业提交到 pbs 队列中
