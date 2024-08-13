---
title: 基本 HPC linux 使用方法
---

高性能计算（HPC）利用多个计算节点的力量来解决复杂的计算问题。高性能计算服务器通常运行在 Linux 操作系统上，这是一种强大且可扩展的操作系统。并行计算是一种同时进行多项计算或进程的计算形式。它将较大的问题分解成可同时解决的较小、可管理的问题。在高性能计算中，MPI（消息传递接口）是在节点间分配任务的标准。本文介绍了用于 MPI 并行计算的 HPC Linux 服务器的基本用法，重点介绍了一些有用的 Linux 和作业提交命令。

## 用于浏览高性能计算服务器的 Linux 命令

在深入学习 MPI 之前，熟悉一些基本的 Linux 命令至关重要，因为高性能计算服务器通常运行在基于 Linux 的系统上。

1.pwd（打印工作目录）： 显示当前所在的目录。
2.ls（列表）： 列出当前目录下的所有文件和目录。
3.cd（更改目录）： 允许您移动到不同的目录。例如，cd /home/user/documents 将移动到 "documents" 目录。
4.mkdir（创建目录）： 创建一个新目录。
5.rm（删除）：删除文件。使用该命令时要小心，因为一旦删除文件，就无法恢复。
6.man（手册）： 提供命令的详细说明和使用方法。例如，man ls 将显示 ls 命令的手册。

这些命令为浏览 Linux 文件系统奠定了基础，对于管理高性能计算服务器上的计算任务至关重要。

## MPI

MPI 是一种用于消息传递的库规范，由一个由供应商、实施者和用户组成的广泛委员会提议将其作为一种标准。它通常用于高性能计算环境中的并行处理。

在所有 MuPRO 程序中，我们都依赖 Intel MPI，您可以从 Intel oneAPI HPCkit 免费获取。

### 运行简单的 MPI 程序

您可以运行一个简单的 "Hello, World" 程序来测试 MPI。下面是一个用 C 语言编写的程序的基本示例：

```c
#include <mpi.h>
#include <stdio.h>

int main(int argc, char** argv) {
    // Initialize the MPI environment
    MPI_Init(NULL, NULL);

    // Get the number of processes
    int world_size;
    MPI_Comm_size(MPI_COMM_WORLD, &world_size);

    // Get the rank of the process
    int world_rank;
    MPI_Comm_rank(MPI_COMM_WORLD, &world_rank);

    // Print off a hello world message
    printf("Hello world from processor %s, rank %d out of %d processors\n",
           processor_name, world_rank, world_size);

    // Finalize the MPI environment.
    MPI_Finalize();
}
```

您可以使用 Intel MPI 的`mpiicc`编译器编译此程序：

```sh
mpiicc hello_world.c -o hello_world
```

然后使用`mpirun`命令运行它：

```sh
mpirun -np 4 ./hello_world
```

在本例中，-np 4 命令 MPI 使用4个进程运行程序。

## 提交工作

在许多高性能计算服务器上，作业都是通过 Slurm 这样的系统进行管理和调度的。下面是一些基本的 Slurm 命令：

1.sbatch：这是用于向 Slurm 调度器提交作业的命令。一般与批处理脚本一起使用。
2.squeue：显示队列中作业的状态。
3.scancel：允许您取消作业。您必须提供作业ID，该ID可以从 squeue 命令中获取。

下面是一个 MPI 作业的 Slurm 批量脚本示例：

```sh
#!/bin/bash
#SBATCH --job-name=mpi_job
#SBATCH --nodes=4
#SBATCH --ntasks-per-node=1
#SBATCH --time=00:10:00
#SBATCH --output=mpi_output_%j.txt

module load openmpi

mpirun /path/to/your/mpi/program
```

在这个脚本中，我们请求 4 个节点，每个节点 1 个任务，时间限制为 10 分钟，并将输出保存到名为 mpioutput%j.txt 的文件中，其中 %j 替换为作业 ID。然后，我们加载 OpenMPI 模块并运行 MPI 程序。

要提交此作业，可将脚本保存到文件（如 job.sh）中，然后使用 sbatch 命令：

```sh
sbatch job.sh
```
