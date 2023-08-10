---
title: Preparation
---
Below are the preparation jobs for the MuPRO HPC programs.

## OS and Environment
You must have a linux machine to run the headless programs from MuPRO. We recommend using Ubuntu since it's the easiest to use, but any other major Linux distro should work too.

Though we recommend using a dedicated linux work station or server for running MuPRO programs, you can also run them on a virtual machine or WSL on Windows. To install WSL2 on Windows, you should follow the instructions [here](https://learn.microsoft.com/en-us/windows/wsl/install).
```powershell
wsl --install -d Ubuntu-22.04
```
The default install location of WSL is on C drive, which may not be large enough to run MuPRO programs. You can change the default location following the instructions [here](https://dev.to/equiman/move-wsl-file-system-to-another-drive-2a3d).


Our program only depends on the intel oneAPI toolkit, which can be installed on any linux distro. You can find the installation instructions [here](https://software.intel.com/content/www/us/en/develop/tools/oneapi/base-toolkit/download.html).

On Ubuntu, you need to [add the intel package repository](https://www.intel.com/content/www/us/en/developer/tools/oneapi/base-toolkit-download.html?operatingsystem=linux&distributions=aptpackagemanager), then run `sudo apt install intel-basekit intel-hpckit`.

In the future, whenever you want to run MuPRO programs, you need to run `source /opt/intel/oneapi/setvars.sh` first to set up the environment.

## Tools

We are provide some tools to help you using MuPRO programs.

### Visualzation tool
On Windows, we provide a visualization tool to help you visualize the results of MuPRO programs, [download link here](https://download.muprosoftware.com/SimpleView-0.1.1-win64.exe). Unfortunatly, we don't have a user manual for this visualtization tool yet.

### High-throughput jobs generation tool
We provides a [shell script](https://download.muprosoftware.com/htpstudio) to automatically generate an array of batch jobs that you can easily submit to any queuing system. 
```sh
wget https://download.muprosoftware.com/htpstudio
```
The user manual is [here](https://htp-studio.surge.sh/).

## Get MuPRO
In our next release, you will be able to use the install script to install MuPRO, but for now you need to contact us for a copy of the MuPRO module that you want to use.