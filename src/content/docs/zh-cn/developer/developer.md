---
title: "开发者设置"
description: "开发者必要环境配置"
---

> 开发人员是那些为 Mu-PRO 代码作出贡献的人。

我们在此介绍如何为 Mu-PRO 代码开发做好准备，并与其他开发人员合作。

## 基础知识

### 访问 git 仓库

MuPRO PhaseFieldSDK [git 仓库](https://github.com/mupro-simulation)  是托管在 github 上的私有仓库。

要成为 SDK 开发人员，您需要向 MuPRO 组织明确申请访问权限。

#### 第 1 步: 注册 github 账户

按照 github 主页上的说明注册账户 [github homepage](https://github.com/)。

#### 第 2 步：确定用户名

1. 前往 [github.com](https://github.com)。
2. 点击右上角的头像,  *Signed in as* 后的单词就是你的用户名。


<img class="mx-auto" src="/img/avatar.jpg" width="200px" alt="avatar"/>


#### 第 3 步：申请访问 MuPRO 组织

将您的账户用户名发送至 MuPRO  [support@muprosoftware.com](mailto:support@muprosoftware.com), 说明您的姓名、github 账户用户名和您希望访问的版本库。

### 安装 Visual Studio 代码

虽然你可以使用任何你喜欢的代码编辑器，但我们强烈推荐 vscode。
下面是一些使用 vscode 的有用链接：
- [Developing a Visual Studio Code Project for SSH Development](https://www.intel.com/content/www/us/en/develop/documentation/using-vs-code-with-intel-oneapi/top/ssh-development-top/ssh-development.html)
- [Environment Configurator for Intel® oneAPI Toolkits](https://www.intel.com/content/www/us/en/develop/documentation/using-vs-code-with-intel-oneapi/top/intel-oneapi-extensions-for-visual-studio-code/environment-configurator-extension.html)


#### 第 1 步：下载并安装

从此处下载并在本地计算机上安装 vscode [here](https://code.visualstudio.com/).

#### 第 2 步：使用 Github 账户登录

登录后，您可以在所有平台上同步所有设置和扩展。

1. 点击左下角的人形图标
2. 选择登录以同步设置

<img class="mx-auto" src="/img/vscode-signin.jpg" width="300px" alt="vscode-signin"/>

1. 然后选择 "使用 Github 登录"，您的默认浏览器就会打开

<img class="mx-auto" src="/img/vscode-signin-github.jpg" width="300px" alt="vscode-signin-github"/>

1.从弹出的浏览器窗口登录 Github。
2.如果登录成功，点击人形图标将显示 Github 帐户的用户名，然后就可以关闭浏览器窗口了。

<img class="mx-auto" src="/img/vscode-signedin.jpg" width="300px" alt="vscode-signedin"/>


#### 第 3 步：安装扩展程序

使用 vscode 的一大好处是其庞大的扩展库。下面列出了我们将使用的扩展：

##### 在远程机器上开发
1. [远程 - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh) (Id: ms-vscode-remote.remote-ssh): 用于远程 SSH 连接
2. [远程 - SSH: Editing Configuration Files](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh-edit)(Id: ms-vscode-remote.remote-ssh-edit): 用于编辑 ssh 配置文件。

##### 在本地机器上开发
你现在不需要安装任何扩展，因为我们可以[在以后的步骤中]一次性安装所有推荐的扩展。 (code.html).


### 配置 SSH 连接

在大多数情况下，您可能是在远程 Linux 服务器上而非本地电脑上进行开发。

这里我们将以宾夕法尼亚州立大学 ACI 服务器为例，演示如何在 vscode 中配置 SSH 连接。

#### 第 1 步：设置无密码连接

要设置与远程 Linux 服务器的无密码 SSH 连接，需要在本地计算机上生成公钥/私钥对，并将公钥复制到远程服务器。下面是一份分步指南，助你轻松上手：

##### Linux/Mac
1. 生成密钥对：在本地计算机上打开终端窗口，运行以下命令 `ssh-keygen -t rsa`。命令会提示你选择配对密钥的位置，你可以点击回车接受默认位置，也可以选择给它起一个特定的名字，比如 `aci_rsa`。命令还会要求你提供口令，但如果是无口令连接，你可以点击回车键将该字段留空。
2. 将公钥复制到远程服务器：公钥存储在 `~/.ssh/id_rsa.pub` 文件中。要将公钥复制到远程服务器，请使用以下命令`ssh-copy-id username@submit.aci.ics.psu.edu`，这将把默认的 id_rsa.pub 密钥复制到远程服务器。如果使用了不同的 rsa 密钥对名称，可使用 `-i` 选项指定，如下所示：`ssh-copy-id -i ~/.ssh/aci_rsa username@submit.aci.ics.psu.edu`

##### Windows
1. 生成配对密钥: 
    1.下载并安装 PuTTYgen：您可以从 PuTTY 网站下载 PuTTYgen 工具 (https://www.putty.org/).
    2. 安装好 PuTTYgen 后，从 "开始 "菜单或双击 PuTTYgen 图标启动该工具。
生成密钥对： 在 PuTTYgen 窗口中，点击 "生成 "按钮。工具会提示你在窗口中移动鼠标以生成随机密钥对。
    3. 生成密钥对： 在 PuTTYgen 窗口中，点击 "生成 "按钮。工具会提示你在窗口中移动鼠标以生成随机密钥对。生成配对密钥后，你可以输入密钥口令，或将该字段留空用于无密码连接。
    4. 保存配对密钥：生成配对密钥后，可点击 "保存私钥 "按钮保存私钥，并指定文件位置。也可以从 "用于粘贴到 OpenSSH authorized_keys 文件的公钥”文本框中复制公钥内容并保存到文件中，从而保存公钥。
2. 将公钥复制到远程服务器：打开命令提示符或 PowerShell 窗口，运行以下命令 `type "C:\path\to\id_rsa.pub" | ssh user@submit.aci.ics.psu.edu "cat >> ~/.ssh/authorized_keys"`。将`C:\path\to\id_rsa.pub`替换为公钥文件的路径，user 替换为远程服务器上的用户名。`type` 命令会输出公钥文件的内容，然后通过管道将其传送到 ssh 命令，该命令会登录远程服务器，将公钥内容追加到用户主目录`.ssh` 目录下的 `authorized_keys`文件中，如果该文件不存在，则会创建该文件。

3. 测试连接：将公钥复制到远程服务器后，可以运行 `ssh username@submit.aci.ics.psu.edu` 测试连接。这样就可以连接到远程服务器，而不需要输入密码。如果一切正常，你就成功建立了无密码 SSH 连接。

#### 第2步：编辑 ssh 配置文件

为了进一步节省输入用户名和远程服务器主机名的时间，我们可以按如下方式设置 ssh 配置文件。

1. 单击 `F1` 打开命令调板，输入 `ssh connect` 搜索 *Remote-SSH: Connect to Host*，然后单击

![ssh-connect](/img/ssh-connect.jpg)

2. 你会看到*Add New SSH Host*或*Configure SSH Hosts*两个选项，选择**Configure SSH Hosts**

![ssh-configure](/img/ssh-configure.jpg)

3. vscode会自动检测系统中可用的 ssh 配置文件，你应该选择个人配置文件而不是系统配置文件，然后该 ssh 配置文件将在 vscode 中打开。在我看来就是 */User/xiaoxingcheng/.ssh/config*

![ssh-configfile](/img/ssh-configfile.jpg)

4. 在以下代码片段中，将 User 改为用户名，将 IdentityFile 改为生成/上传的 rsa 密钥对名称。 然后，复制并粘贴到打开的配置文件中。
```sh
Host aci
    HostName submit.aci.ics.psu.edu
    User username
    IdentityFile ~/.ssh/aci_rsa
    ForwardX11Trusted Yes
    ForwardX11 Yes
```

#### 第 3步：SSH 登录
1. 打开 vscode
2. 单击 `F1`，输入 `ssh connect`，然后单击`Remote-SSH: Connect to Host`

![ssh-connect](/img/ssh-connect.jpg)

3. 选择`aci`，即我们中[在上一步]定义的`Host`(#第二步-2-设置-ssh-配置-文件).。

![ssh-connect](/img/ssh-aci.jpg)

4. 你将看到一个与此类似的界面，今后我们可以使用终端执行任何命令行任务。如果看不到终端面板，可以使用<快捷键>ctrl+`</code> ctrl+`，或点击菜单中的``View/Terminal``.

![ssh-connect](/img/ssh-login.jpg)


### 设置构建环境
要编译代码，您需要 Intel compiler, Intel MKL, Intel MPI 和 CMake.

#### 第 1 步：连接服务器
就像我们在[配置 SSH 连接部分的步骤 3 ]所做的那样 (ssh.html#step-3-ssh-login).

#### 第 2 步：安装 CMake

我们要求 CMake 的最低版本为 3.20。

##### PSU ACI 服务器
截至 2023 年 2 月，您可以使用以下命令访问 PSU 服务器上的 CMake：
```sh
module load cmake
```

你也可以将上述命令添加到 ~/.bashrc 文件中，这样下次登录时 cmake 就会自动加载。

##### HPC 计算集群
要么联系管理员查找高于 3.20 版本的 CMake，要么按照 Linux 的 [安装说明](https://cmake.org/install/) 在本地安装 cmake。

##### 自己的 Linux 机器
你应该能在大多数发行版的官方软件包管理器中找到 CMake。比如在 Ubuntu 上，你可以用 `sudo apt install cmake` 来安装 CMake。

##### 从源代码编译并安装
如果官方软件包管理器没有提供 CMake，则需要从源代码编译和安装。

1.安装编译所需的依赖包。
```sh
sudo apt update
sudo apt install build-essential libssl-dev
```
2.访问 CMake 官方网站 (https://cmake.org/files/) 下载 3.20 之后版本的源代码压缩包

3.解压源码包并转到解压后的目录。

4.编译并安装.
```sh
./configure
make
sudo make install
```

5.验证安装.
```sh
cmake –version
```

#### Step 3: 设置 Intel environment 环境

##### PSU ACI 服务器
截至 2023 年 2 月，您可以使用以下命令访问 PSU 服务器上的 Intel compilers, Intel MPI 和 Intel MKL :
```sh
module load intel impi mkl
```

您还可以将上述命令添加到 ~/.bashrc 文件中，这样下次登录时就会自动加载这些 intel 软件包。

##### HPC 计算集群
联系管理员，了解如何访问 Intel compiler, Intel MKL, Intel MPI.

##### 自己的 Linux 机器
安装 Intel oneAPI's basekti 和 hpckit. 选择您机器的软件包管理器，并按其说明操作](https://www.intel.com/content/www/us/en/develop/documentation/installation-guide-for-intel-oneapi-toolkits-linux/top/installation/install-using-package-managers.html).

##### 关于Intel oneAPI Base Toolkit 和 Intel oneAPI HPC Toolkit 工具包的安装（建议安装最新版本，即 2024.4.0 版）
注意:

1. 在 centos7 系统上安装Intel oneAPI（2021.4.0 版）时，会缺少 mkl 文件，而选择安装Intel oneAPI（2024.4.0 版）时，会出现版本不兼容问题（缺少 glibc，安装 glibc 时会出现源文件错误），因此不建议使用 centos7 系统。
2. 在 Windows 10 上安装 wsl 时，会出现换盘失败的问题，而且 Windows 10 可能不支持使用 Microsoft Store，即无法安装 Ubuntu。
3. 对于使用 VMware 安装 Ubuntu，Intel oneAPI 与 Ubuntu 20.04 和 Ubuntu 22.04 更加兼容。您可以使用下面的链接查看英特尔 oneAPI 支持的系统：https://www.intel.com/content/www/us/en/developer/articles/system-requirements/intel-oneapi-base-toolkit-system-requirements.html。

建议使用官方的 apt 安装方法，因为使用 apt 更易于安装和更新。如果官方 apt 安装失败，您可以使用下载单独安装。官方网站是：https://www.intel.com/content/www/us/en/docs/oneapi/installation-guide-linux/2023-0/apt.html。 

单独安装步骤:

1.下载命令（Intel oneAPI Base Toolkit、Intel oneAPI HPC Toolkit）。
```sh
wget https://registrationcenter-download.intel.com/akdlm/IRC_NAS/9a98af19-1c68-46ce-9fdd-e249240c7c42/l_BaseKit_p_2024.2.0.634_offline.sh
wget https://registrationcenter-download.intel.com/akdlm/IRC_NAS/d4e49548-1492-45c9-b678-8268cb0f1b05/l_HPCKit_p_2024.2.0.635_offline.sh 
```
2.安装命令 (Intel oneAPI Base Toolkit、Intel oneAPI HPC Toolkit).
```sh
sudo sh ./l_BaseKit_p_2024.2.0.634_offline.sh -a --silent --cli --eula accept
sudo sh ./l_HPCKit_p_2024.2.0.635_offline.sh -a --silent --cli --eula accept
```
3.配置环境变量.
在 ~/.bashrc 文件末尾添加 'source /opt/intel/oneapi/setvars.sh intel64' .

#### 第 4 步：配置 git

你可以使用 [https链接] (https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls) 或 [ssh链接] (https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-ssh-urls)克隆版本库。对于初学者，我建议使用 ssh 方式。

您可以按照下面的命令进行简单操作，也可以按照 [github 文档页面]上的步骤查看详细说明。(https://docs.github.com/en/authentication/connecting-to-github-with-ssh) 

1. 生成一个新的 SSH 密钥，用你的 GitHub 电子邮件地址代替。
```
ssh-keygen -t ed25519 -C "your_email@example.com"
```
2. 进入用户 **Settings** 

<img class="mx-auto" alt="user settings" src="/img/user-settings.jpg" width="300px"/>

1. 单击 **SSH and GPG keys**

![user ssh](/img/user-ssh.jpg)

4. 单击 **New SSH Key** 按钮

![new ssh](/img/new-ssh.jpg)

5. 将 SSH 公钥复制到剪贴板。如果使用不同的名称生成密钥，则相应更改以下命令。然后选择并复制终端中显示的 id_ed25519.pub 文件内容到剪贴板。
```sh
cat ~/.ssh/id_ed25519.pub
```

6. 将 SSH 公钥粘贴到 **Key** 文本区域，并给它一个标题，如 *aci*，然后点击**Add SSH Key**

![paste-sshkey](/img/paste-sshkey.jpg)

7. 使用以下命令`ssh -T git@github.com`验证新的 ssh 密钥。 如果成功，现在就可以从 Github 克隆源代码了。

#### 第 5步：安装Ninja

提供两种安装方法，读者可任选其一进行安装。

1.使用 apt 命令安装
```sh
sudo apt update
sudo apt install ninja-build
```
2.从源代码安装（还需要安装 re2c 和 python，intel 已内置 python）。

2.1 从 Github 下载Ninja的源代码.
```sh
git clone https://github.com/ninja-build/ninja.git
cd ninja
```
2.2 配置构建流程.
```sh
./configure.py --bootstrap
```
2.3 在系统上安装Ninja.
```sh
sudo install ninja /usr/local/bin/
```


### 获取源代码

#### 步骤 1：连接服务器
如我们在[配置 SSH 连接部分所做的步骤 3](ssh.html#step-3-ssh-login).

#### 下载源代码

使用 git 克隆源代码库。记住要将源代码克隆到永久存储而非临时磁盘上。

##### PSU ACI 服务器
```sh
cd work
git clone --recursive git@github.com:mupro-simulation/PhaseFieldSDK.git
```
##### 其他服务器/计算机
```sh
git clone --recursive git@github.com:mupro-simulation/PhaseFieldSDK.git
```


![clone](/img/clone.jpg)

#### 第 3 步：检查源代码

现在单击侧边面板上的`Open Folder` 按钮，系统将提示您一个输入框。键入并导航到刚刚克隆的 PhaseFieldSDK 目录，然后单击确定。


![open folder](/img/open-folder.jpg)


请检查 `apps`文件夹下的子目录是否已填充。如果没有，则说明子模块克隆不正确，你可以使用此命令加载已克隆版本库中的子模块 `git submodule update --init --recursive`. 如果看不到终端面板，可以使用<快捷键>ctrl+`</code>，或点击菜单中的 ``View/Terminal``。


![folders](/img/folders.jpg)


#### 第 4步：未来访问源代码

既然您已经在 vscode 中打开过一次 PhaseFieldSDK 文件夹，今后访问同一文件夹就会变得容易得多。

单击工具栏上的**Remote Explorer**管理器插件，然后单击 *aci*主机下 *PhaseFieldSDK* 文件夹右侧的**right arrow**图标，就会自动跳转到 PhaseFieldSDK 文件夹。


![future access](/img/future-access.jpg)


#### 第 5 步：安装扩展程序

1. 点击工具栏中的扩展图标
2. 在输入框中键入`@recommended`并回车 
3. 单击新出现的`WORKSPACE RECOMMENDATIONS` 部分旁边的**Install Workspace Recommended Extensions** （安装工作区推荐扩展）按钮。  
4. 然后在弹出窗口中点击`Install (Do not sync)`。您也可以根据是否希望在安装了 vscode 的其他电脑上同步扩展，选择 `Install`。

![recommend extensions](/img/recommended-extensions.jpg)


#### 第 6 步：安装扩展工具

首先需要获取 python 和 pip，然后使用 pip 安装二进制文件，最后将安装目录添加到 PATH 变量中。  

```
module load python
python -m pip install --user fortls
python -m pip install --user cmake_format
echo 'export PATH="$PATH:$HOME/.local/bin"' >> ~/.bashrc
source ~/.bashrc
```
