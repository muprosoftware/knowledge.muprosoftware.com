---
title: "Developer setup"
description: "Necessary preparation for developers"
---

> Developers are those who contribute to the Mu-PRO code.

Here we introduce how you can get prepared for Mu-PRO code development and work with other developers.

## Basics

### Access git repository

The MuPRO PhaseFieldSDK's [git repository](https://github.com/mupro-simulation) is a private repository hosted on github. 

To get started as a SDK developer, you need to explicitly request access to the MuPRO organization.

#### Step 1: Register a github account

Follow the instructions on [github homepage](https://github.com/) to Sign up for an account.

#### Step 2: Figure out your username

1. go to [github.com](https://github.com)
2. click your avatar in the upper right corner, the word after *Signed in as* is your account username


<img class="mx-auto" src="/img/avatar.jpg" width="200px" alt="avatar"/>


#### Step 3: Request access to MuPRO organization

Send your account username to MuPRO at [support@muprosoftware.com](mailto:support@muprosoftware.com), stating your name, github account username and the repository you want to get access.

### Install Visual Studio Code

Though you can use any code editor you prefer, we highly recommend vscode.
Here are some useful links for using vscode:
- [Developing a Visual Studio Code Project for SSH Development](https://www.intel.com/content/www/us/en/develop/documentation/using-vs-code-with-intel-oneapi/top/ssh-development-top/ssh-development.html)
- [Environment Configurator for Intel® oneAPI Toolkits](https://www.intel.com/content/www/us/en/develop/documentation/using-vs-code-with-intel-oneapi/top/intel-oneapi-extensions-for-visual-studio-code/environment-configurator-extension.html)


#### Step 1: Download and install

Download and install vscode on your local machine from [here](https://code.visualstudio.com/).

#### Step 2: Sign in with Github account

Sign in will give you benefit of syncing all settings and extensions across all platform.

1. Click the human icon at the lower left corner
2. Select Sign in to Sync Settings

<img class="mx-auto" src="/img/vscode-signin.jpg" width="300px" alt="vscode-signin"/>

1. Then select Sign in with Github, and your default browser will be opened

<img class="mx-auto" src="/img/vscode-signin-github.jpg" width="300px" alt="vscode-signin-github"/>

1. Sign in to Github from the popped up browser window.
2. If you have successfully signed in, then clicking the human icon will show your github account username, and you can close the browser window.

<img class="mx-auto" src="/img/vscode-signedin.jpg" width="300px" alt="vscode-signedin"/>


#### Step 3: Install extensions

One huge benefit of using vscode is its large extension base. Here is a list of the extensions that we will use:

##### Develop on a remote machine
1. [Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh) (Id: ms-vscode-remote.remote-ssh): useful for remote ssh connection
2. [Remote - SSH: Editing Configuration Files](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh-edit)(Id: ms-vscode-remote.remote-ssh-edit): used when editing ssh config file

##### Develop on your local machine
You don't need to install any extension for now, because we can install  recommended extension all at once in [future step](code.html).


### Configure SSH connection

In most cases, you probably are developing on a remote linux server instead of your own local pc.

Here we will use the Penn State ACI server as an example demonstrating how you should configure SSH connection within vscode.

#### Step 1: Setup passwordless connection

To set up passwordless SSH connection to a remote Linux server, you will need to generate a public/private key pair on your local machine and copy the public key to the remote server. Here's a step-by-step guide to get you started:

##### Linux/Mac
1. Generate the key pair: Open a terminal window on your local machine and run the following command `ssh-keygen -t rsa`. The command will prompt you to choose a location for the key pair, you can accept the default location by hitting enter, or you can choose to give it a specific name, such as `aci_rsa`. You will also be asked to provide a passphrase, but for a passwordless connection, you can leave this field empty by hitting enter.
2. Copy the public key to the remote server: The public key is stored in the file `~/.ssh/id_rsa.pub`. To copy the public key to the remote server, use the following command `ssh-copy-id username@submit.aci.ics.psu.edu`, this will copy the default id_rsa.pub key to the remote server. If you used a different name for the rsa key pair, you can specify it with the `-i` option like this, `ssh-copy-id -i ~/.ssh/aci_rsa username@submit.aci.ics.psu.edu`

##### Windows
1. Generate the key pair: 
    1. Download and install PuTTYgen: You can download the PuTTYgen tool from the PuTTY website (https://www.putty.org/).
    2. Start PuTTYgen: Once you have installed PuTTYgen, start the tool from the Start menu or by double-clicking on the PuTTYgen icon.
    3. Generate the key pair: In the PuTTYgen window, click the "Generate" button. The tool will prompt you to move your mouse around the window to generate randomness for the key pair. Once the key pair is generated, you can enter a key passphrase or leave the field empty for a passwordless connection.
    4. Save the key pair: Once you have generated the key pair, you can save the private key by clicking the "Save private key" button and specifying a location for the file. You can also save the public key by copying its contents from the "Public key for pasting into OpenSSH authorized_keys file" text box and saving it to a file.
2. Copy the public key to the remote server: Open a Command Prompt or PowerShell window and run the following command `type "C:\path\to\id_rsa.pub" | ssh user@submit.aci.ics.psu.edu "cat >> ~/.ssh/authorized_keys"`. Replace `C:\path\to\id_rsa.pub` with the path to your public key file, user with the username on the remote server. The `type` command outputs the contents of the public key file, which are then piped to an ssh command that logs in to the remote server, appends the contents of the public key to the `authorized_keys` file in the `.ssh` directory of the user's home directory, and creates the file if it does not exist.


3. Test the connection: Once the public key is copied to the remote server, you can test the connection by running `ssh username@submit.aci.ics.psu.edu`. This should connect you to the remote server without asking for a password. If everything is working as expected, you have successfully set up a passwordless SSH connection.


#### Step 2: Edit ssh config file

To further save your time typing your user name and the remote server's host name, we can setup the ssh config file as follows.

1. Click `F1` to open the command palette, and type `ssh connect` to search for *Remote-SSH: Connect to Host*, then click

![ssh-connect](/img/ssh-connect.jpg)

2. You will see two choices of *Add New SSH Host* or *Configure SSH Hosts*, select the **Configure SSH Hosts**

![ssh-configure](/img/ssh-configure.jpg)

3. vscode will automatically detect available ssh config files on your system, you should choose your personal one instead of the system config file, and that ssh config file will be opened in vscode. To me that's */User/xiaoxingcheng/.ssh/config*


![ssh-configfile](/img/ssh-configfile.jpg)

4. Change the User with your username, and the IdentityFile with the generated/uploaded rsa key pair name in the following code snippet. Then, copy and paste it into the opened config file. 
```sh
Host aci
    HostName submit.aci.ics.psu.edu
    User username
    IdentityFile ~/.ssh/aci_rsa
    ForwardX11Trusted Yes
    ForwardX11 Yes
```

#### Step 3: SSH login
1. Open vscode
2. Click `F1`, type `ssh connect` and click `Remote-SSH: Connect to Host`


![ssh-connect](/img/ssh-connect.jpg)

3. Choose `aci`, which is the `Host` we defined in [previous step](#step-2-edit-ssh-config-file).

![ssh-connect](/img/ssh-aci.jpg)

4. You will see an interface similar to this one, and we can use the terminal to perform any command line tasks in the future. If you don't see the terminal panel, you can use the shortcut <code>ctrl+`</code>, or click ``View/Terminal`` in the menu.

![ssh-connect](/img/ssh-login.jpg)


### Setup building environment
To build the code, you will need to have Intel compiler, Intel MKL, Intel MPI, and CMake.

#### Step 1: Connect to the server
As we did in the [Configure SSH connection section Step 3](ssh.html#step-3-ssh-login).

#### Step 2: Install CMake

We require a minimum version of 3.20 for CMake.

##### PSU ACI server
As of Feb 2023, you can access CMake on PSU server using the following command:
```sh
module load cmake
```

You can also append the above command to your ~/.bashrc file so that cmake will be automatically loaded when you log in next time. 

##### HPC cluster in general
Either contact the admin to find where you can find CMake version higher than 3.20, or you can follow the [install instruction](https://cmake.org/install/) for Linux and install cmake for you locally.

##### Your own Linux machine
You should be able to find CMake in most of the distribution's official package manager. Such on Ubuntu, you can install CMake with `sudo apt install cmake`.

##### Compile and install from source
If not provided by the official package manager, it needs to be compiled and installed from source code.

1.Install the dependency packages required for compilation.
```sh
sudo apt update
sudo apt install build-essential libssl-dev
```
2.Visit the official CMake website (https://cmake.org/files/) to download the source zip for versions after 3.20. 

3.Extract the source package and go to the extracted directory.

4.Compile and install.
```sh
./configure
make
sudo make install
```
5.Verify the installation.
```sh
cmake –version
```

#### Step 3: Setup Intel environment

##### PSU ACI server
As of Feb 2023, you can access the Intel compilers, Intel MPI, and Intel MKL on the PSU server using the following command:
```sh
module load intel impi mkl
```

You can also append the above command to your ~/.bashrc file so that these intel packages will be automatically loaded when you log in next time.

##### HPC cluster in general
Contact the admin to learn how you can access the Intel compiler, Intel MKL, Intel MPI.
##### Your own Linux machine
Install the Intel oneAPI's basekti and hpckit. [Choose your machine's package manager and follow its instructions](https://www.intel.com/content/www/us/en/develop/documentation/installation-guide-for-intel-oneapi-toolkits-linux/top/installation/install-using-package-managers.html).

##### About the installation of Intel oneAPI Base Toolkit and Intel oneAPI HPC Toolkit (recommended to install the latest version, i.e., version 2024.4.0).
Note:

1. When installing Intel oneAPI (version 2021.4.0) on a centos7 system, the mkl file is missing, and when you choose to install Intel oneAPI (version 2024.4.0), there is a version incompatibility problem (glibc is missing, and when installing glibc, you will get an error about the source), so it is not recommended to use a centos7 system. So it is not recommended to use centos7.
2. When installing wsl on Windows 10, there will be a problem of disk change failure, and Windows 10 may not support the use of Microsoft Store, that is, it is not possible to install Ubuntu.
3. For Ubuntu installations utilizing VMware, Intel oneAPI is more compatible with Ubuntu 20.04 and Ubuntu 22.04. You can check the systems supported by Intel oneAPI using this link below:https://www.intel.com/content/www/us/en/developer/articles/system-requirements/intel-oneapi-base-toolkit-system-requirements.html.

It is recommended to use the official apt installation method, because it is easier to install and update using apt. If the official apt installation fails you can use the download to install it separately. The official website is:
https://www.intel.com/content/www/us/en/docs/oneapi/installation-guide-linux/2023-0/apt.html.

Separate installation steps:

1.Download commands (Intel oneAPI Base Toolkit, Intel oneAPI HPC Toolkit).
```sh
wget https://registrationcenter-download.intel.com/akdlm/IRC_NAS/9a98af19-1c68-46ce-9fdd-e249240c7c42/l_BaseKit_p_2024.2.0.634_offline.sh
wget https://registrationcenter-download.intel.com/akdlm/IRC_NAS/d4e49548-1492-45c9-b678-8268cb0f1b05/l_HPCKit_p_2024.2.0.635_offline.sh 
```
2.Installation commands (Intel oneAPI Base Toolkit, Intel oneAPI HPC Toolkit).
```sh
sudo sh ./l_BaseKit_p_2024.2.0.634_offline.sh -a --silent --cli --eula accept
sudo sh ./l_HPCKit_p_2024.2.0.635_offline.sh -a --silent --cli --eula accept
```
3.Configure environment variables.
Add 'source /opt/intel/oneapi/setvars.sh intel64' to the end of the ~/.bashrc file.

#### Step 4: Configure git 

You can clone a repository using [https link](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls) or [ssh link](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-ssh-urls). For beginners, I recommend using the ssh approach.

You may follow the commands below for a simpler version, or follow steps [on this github doc page](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) for detailed instructions. 

1. Generate a new SSH key, substituting in your GitHub email address.
```
ssh-keygen -t ed25519 -C "your_email@example.com"
```
2. Go to your user's **Settings** 

<img class="mx-auto" alt="user settings" src="/img/user-settings.jpg" width="300px"/>

1. Click **SSH and GPG keys**

![user ssh](/img/user-ssh.jpg)

4. Click **New SSH Key** button

![new ssh](/img/new-ssh.jpg)

5. Copy the SSH public key to your clipboard. If you use a different name for the generate key, then change the following command accordingly. Then select and copy the contents of the id_ed25519.pub file displayed in the terminal to your clipboard.
```sh
cat ~/.ssh/id_ed25519.pub
```
6. Paste the SSH public key to the **Key** text area and give it a title, such as *aci*, then click **Add SSH Key**


![paste-sshkey](/img/paste-sshkey.jpg)

7. Verify your new ssh key with the following command `ssh -T git@github.com`. If successful, now you will be able to clone the source code from Github.

#### Step 5: Installing Ninja 

Two installation methods are provided, and the reader can choose either one to install.

1.Use the apt command to install.
```sh
sudo apt update
sudo apt install ninja-build
```
2.Install from source (you also need to install re2c and python, intel has python built in).

2.1 Download Ninja's source code from Github.
```sh
git clone https://github.com/ninja-build/ninja.git
cd ninja
```
2.2 Configure the build process.
```sh
./configure.py --bootstrap
```
2.3 Install Ninja on your system.
```sh
sudo install ninja /usr/local/bin/
```


### Obtain the source code

#### Step 1: Connect to the server
As we did in the [Configure SSH connection section Step 3](ssh.html#step-3-ssh-login).

#### Step 2: Download the source code

You should use git to clone the repository. Remember to clone the source code to a permanent storage instead of temporary disk.

##### PSU ACI server
```sh
cd work
git clone --recursive git@github.com:mupro-simulation/PhaseFieldSDK.git
```
##### Other server/pc
```sh
git clone --recursive git@github.com:mupro-simulation/PhaseFieldSDK.git
```


![clone](/img/clone.jpg)

#### Step 3: Check the source code

Now click the `Open Folder` button in the side panel, and you will be prompted with an input box. Type and navigate to the PhaseFieldSDK directory you just cloned and click ok.


![open folder](/img/open-folder.jpg)


Please check the subdirectories under `apps` folder and see if they are populated. If not, then the submodule is not cloned properly, you may use this command to load the submodules in an already cloned repository `git submodule update --init --recursive`. If you don't see the terminal panel, you can use the shortcut <code>ctrl+`</code>, or click ``View/Terminal`` in the menu.


![folders](/img/folders.jpg)


#### Step 4: Future visit of the source code

Since you have opened the PhaseFieldSDK folder once in vscode, future access to the same folder will become a lot easier. 

Click the **Remote Explorer** plugin on the vertical toolbar, then click the **right arrow** icon to the right of *PhaseFieldSDK* folder under the *aci* host, and you should be directed to the PhaseFieldSDK folder automatically.


![future access](/img/future-access.jpg)


#### Step 5: Install extensions

1. Click the extension icon in the vertical toolbar
2. Type `@recommended` and hit enter in the input box
3. Click **Install Workspace Recommended Extensions** button next to the newly appeared section `WORKSPACE RECOMMENDATIONS`. 
4. Then click `Install (Do not sync)` in the pop-up window. You can also choose `Install` depending on whether you want the extensions been synced across other computer that you installed vscode.


![recommend extensions](/img/recommended-extensions.jpg)


#### Step 6: Install extension used tools

You need to first get python and pip, then install the binaries using pip, and lastly add the installed directory to your PATH variable.

```
module load python
python -m pip install --user fortls
python -m pip install --user cmake_format
echo 'export PATH="$PATH:$HOME/.local/bin"' >> ~/.bashrc
source ~/.bashrc
```
