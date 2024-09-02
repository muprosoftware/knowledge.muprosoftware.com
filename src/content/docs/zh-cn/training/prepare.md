---
title:准备
---
下面是MuPRO HPC程序的准备工作。

## #操作系统和环境
您必须有一台 Linux 机器才能运行 MuPRO 的程序。我们推荐使用 Ubuntu，因为它最简单易用，但任何其他主流 Linux 发行版也可以。

虽然我们建议使用专用的 Linux 工作站或服务器来运行 MuPRO 程序，但您也可以在 Windows 上的虚拟机或 WSL 上运行它们。要在 Windows 上安装 WSL2，请按照[此处](https://learn.microsoft.com/en-us/windows/wsl/install)的说明操作。
```powershell
wsl --install -d Ubuntu-22.04
```
WSL 的默认安装位置在 C 盘，而 C 盘的容量可能不足以运行 MuPRO 程序。您可以按照[此处](https://dev.to/equiman/move-wsl-file-system-to-another-drive-2a3d)的说明更改默认位置。


我们的程序只依赖于 intel oneAPI 工具包，它可以安装在任何 Linux 发行版上。你可以在[这里](https://software.intel.com/content/www/us/en/develop/tools/oneapi/base-toolkit/download.html)找到安装说明。

在 Ubuntu 上，你需要[添加 intel 软件包仓库](https://www.intel.com/content/www/us/en/developer/tools/oneapi/base-toolkit-download.html?operatingsystem=linux&distributions=aptpackagemanager)，然后运行`sudo apt install intel-basekit intel-hpckit`。

今后，只要想运行 MuPRO 程序，就需要先运行源程序`source /opt/intel/oneapi/setvars.sh`来设置环境。

## 工具

我们提供了一些工具来帮助您使用MuPRO程序。

### 可视化工具
在 Windows 系统中，我们提供了一个可视化工具，帮助您将 MuPRO 程序的结果可视化，[下载链接在此](https://download.muprosoftware.com/SimpleView-0.1.1-win64.exe)。遗憾的是，我们还没有该可视化工具的用户手册。

### 高通量工作生成工具
我们提供了一个 [shell 脚本](https://download.muprosoftware.com/htpstudio)，可以自动生成一系列批处理作业，并轻松提交给任何队列系统。
```sh
wget https://download.muprosoftware.com/htpstudio
```
用户手册 [此处](https://htp-studio.surge.sh/)。

## 获取 MuPRO
在我们的下一个版本中，您将可以使用安装脚本来安装 MuPRO 组件。现在，您可以联系我们获取您想使用的 MuPRO 模块副本，或者使用 wget 从我们的服务器下载。
```sh
wget https://download.muprosoftware.com/MUPRO-1.0.6-Ferroelectric-Ubuntu22.04.zip
sudo apt install unzip
unzip MUPRO-1.0.6-Ferroelectric-Ubuntu22.04.zip
cd Ferroelectric
chmod 755 Ferroelectric.exe
```

## 首次运行

您的首次运行不会成功，因为您还没有适当的许可证。
```sh
./Ferroelectric.exe
```
您将看到以下错误。
![First run](/img/first-run.png)

请向我们提供截图，我们将为您准备试用许可证。

从我们这里收到 `license.lic` 文件后，您需要将其放到您的 Linux 机器上，并将许可证文件的路径导出为环境变量 `MUPROROOT`。例如：
```sh
export MUPROROOT=$HOME/MUPROTraining
```
```
