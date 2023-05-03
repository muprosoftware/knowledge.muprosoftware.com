---
title: "Coding collaboratively"
description: "How to contribute to Mu-PRO code"
---

## General workflow

### Create issue

Any changes to the code should address one issue, it could be a bug or feature request. If there is no issue for the changes you want to make, you should create one by yourself.

### Create branch

Use the **Create a branch** link on the right side of the issue details page to setup a new branch for the issue. All of your work should be done on this new branch to avoid direct influence to the main branch.

> Always try to make your development branch as short-living as possible. A recommended branch life span is 1 to 2 days. If you find something not managable within 1 or 2 days, then either consider split your goal into smaller ones and create branches for these smaller goals.  

### Modify source

If the current main program does not fulfill your need, then you have three choices customizing the main program. They are ranked in terms of my recommendation, so you should consider choice 1 whenever possible, the choice 2, and lastly choice 3.

Here we are only introducing the general rules of customizing the main program, for more details of how to change a specific type of main program, you should go to the documentation for that main program.

- [Phase-Field Ferroelectric main program](https://ferroelectric.mupro.co)
- others coming

#### Choice 1: Modify the existing main program

If your use case is quite useful to the general users and you just want to add a few parameters to extend the existing main program's capabilities, then you should consider add it to the existing main program. Rule of thumb is to not influence existing parameters since otherwise your changes can break other's program. Remember to [commit and publish your changes](commit_and_publish_your_changes.html).

#### Choice 2: Add a new main program in the existing repository

If your use case is useful to the general users but so different from the existing main program, for example, you're still doing a phase-field ferroelectric simulation but now your system has an inhomogeneous setup, then you may setup a new main program in the existing repository. For the PhaseFieldFerroelctric repository that's inside the `apps` folder along with our `basic` main program. Remember to [commit and publish your changes](commit_and_publish_your_changes.html) frequently when you are building you new main program.

#### Choice 3: Create your own main program in a new repository

If you want to write a main program for a completely different phase-field model, then you should consider creating a new git repository and add it as a new submodule of the PhaseFieldSDK repository.

### Build the code

#### Step 1: Open the source code folder
As we did in the [Future visit of the source code](code.html#step-4-future-visit-of-the-source-code).

#### Step 2: Activate the intel environment

##### HPC server

Use the module load command as mentioned in [previous step](machine.html/step-3-setup-intel-environment). Or you may ignore this if you have already setup the ~/.bashrc file properly.


##### Your own Linux machine
Click `F1` to open the command palette, then type `intel initialize` and click *Intel oneAPI: Initialize default environment variabls*.


#### Step 3: CMake Configure

Use the following command to perform the configuration step in using cmake. We are relying on cmake presets (that's why we require version higher than 3.20) to make our usage of cmake easier and more standarized.

```sh
cmake --preset="linux-intel-Debug" -S "."
```

In most cases, you just need to configure your project once.

#### Step 4: CMake Build

Once the project is configured, you can now build your project. Here we choose the **linux-intel-Debug** preset, you may choose other presets base on your needs.

##### warning
> The linux-intel-Debug preset is configured to skip the license checking, so **DO NOT** distribute program built with this preset to any users without access to our source code, otherwise they will have unlimited access to our library subroutines.


```sh
cmake --build --preset="linux-intel-Debug"
```

You may specify the cmake target that you want to build, for example, the default target is `all`.

```sh
cmake --build --preset="linux-intel-Debug" --target all
```

I created some alias for the commands in setvars.sh, you can update your bashrc to use these aliases.
```
echo 'source ~/work/PhaseFieldSDK/setvars.sh' >> ~/.bashrc
```

#### Step 5: Add alias for executable

The built output are located within `out/build/linux-intel-Debug`. The library archive file is located at `out/build/linux-intel-Debug/dev/libmuprolib.a`. The executables are located within their corresponding folder, such as the ferroelectric main program is located at `out/build/linux-intel-Debug/apps/PhaseFieldFerroelectric/apps/basic/muFerroBasic`.

To make future usage of the executables easier, we can create alias for the executables in the bashrc file. Such as for the ferroelectric executable, we can use the following command:

```
echo 'alias muferro="~/work/PhaseFieldSDK/out/build/linux-intel-Debug/apps/PhaseFieldFerroelectric/apps/basic/muFerroBasic"' >> ~/.bashrc
```



### Test and Debug

Debugging can be slow and painful if you don't have the right tools for the task. I recommend using the gdb based debugger in vscode to debug your fortran program. There are definitely more choices of debugger on the market, for example, if you have relatively fast internet connection, then you may consider open a gui software like totalview on the server to debug your program, but that's not as convenient as vscode in my opinion.

#### Step 1: Choose the launcher

1. Click the **Run and Debug** icon on the vertical toolbar
2. Use the dropdown to select a launcher
3. Click on the left to the code line number for any file in your program to set the break points.

![debug](/img/debug.jpg)


#### Step 1.5: Or create the launcher

If there is no launcher that fulfill you need, then you may create a new one yourself.

1. Choose **Add Configuration ...** in the **RUN AND DEBUG** dropdown menu. This will open the *.vscode/launch.json* file for you to edit.
2. Select **C/C++: (gdb) Launch**, vscode will give a template to work with
3. Edit the **name** (name for this launch), **program** (the executable), and **cwd** (current working directory for the program to run from)


![add launch](/img/add-launch.jpg)

#### Step 2: Start debugging

Click the green triangle button right of **RUN AND DEBUG** to start the debugger.
Then you should see outputs start printing to the terminal and stop at the first break point you set.


![debugging](/img/debugging.jpg)


You can navigate through the code using the floating buttons (from left to right, continue, step over, step into, step out, restart, stop).

You can track variables as the program executes by double clicking in the **WATCH** area, or click the **+** button on the **WATCH** panel, then enter you variables name.

You can use expressions in the **WATCH**, such as use d(1) to get the first element of array d, use sizeof(d) to get the memory size of array d.

### Commit

Whenever you have make any changes to the library or the main program, remember to _git commit_ and _push_. You can do this using the source control plugin in vscode.

1. Click the source control icon on the vertical toolbar
2. Find the correct git repository to git. Since we have several submodules in our PhaseFieldSDK repository, you will see more than one section in source control panel. In the example below, we are trying to commit to the ferroelectric submodule.
3. Type a short message describing what you have changed and click **Commit** button.
4. Then the **Commit** button will become a **Sync** button, click and sync your local changes to the remote git server. Now you should be able to see you changes online in the Github repository.

![git](/img/git.jpg)

### Pull request

Once you have finished all the programming part you should create a pull request. It is called pull request because you are sending a request to the repository admin to pull changes in your branch into the main branch.

Senior code developer will review changes in your pull request and work with you to make them suitable for merging.

### Package and publish

##### warning
> This is not for normal sdk developers, only MuPRO admin should read this. 
But you can learn from my experience on how to setup your own debian repository.



##### important
> Since this article is in a private repository, 
> if you are not within the mupro-simulation organization, 
> but want to make changes to the article, please submit an issue or create a discussion 
> [here](https://github.com/mupro-simulation/.github), 
> I will later incorporate your suggestions into the article.


I want to share how MuPRO package and publish for two purposes:
1. as a note for myself to check in the future
2. there is very few sharing of how other debian softwares are published. This is not trivial from my own experience, it took me several days to fully sort everything out.

#### Goal

The goal is simple, I want MuPRO users to be able to install the MuPRO software using debian's 
apt-get tool.

#### Resources online

One major difficulty that I met is the searching keywords, I don't know what is the keyword that I should search to get necessary information, if it's a debian repository or personal package archive, or other words? Maybe it is due to the bad keywords that I used, I couldn't find many useful resources online.

Out of the few articles that I found, I think these are the easiest to follow.
- [setup your own server for debian repository with reprepro](https://wiki.debian.org/DebianRepository/SetupWithReprepro). You need to dig into some details when following this tutorial.
- [hosting your own PPA repository on GitHub](https://assafmo.github.io/2019/05/02/ppa-repo-hosted-on-github.html). You can follow this tutorial and succeed.

It seems to me that most is just taking notes of things that he feels the most difficult rather than preparing a tutorial, at least not from a new user's perspective.

#### The approach I take and why

In general, there are three steps to publish your program and let others to install through apt-get.

1. prepare the deb package
2. prepare the package archive/debian repository structure
3. put folder and files in step 2 to a online host with public access

There are various methods you can use for each step:

1. I used cmake which allows you to package your project, you can search for cpack tutorial for more details. If you don't use cmake, there are also many articles online discussing how to create a deb package.
2. To create the repository structure, [here](https://wiki.debian.org/DebianRepository/Setup) is a list of available tools. I choose reprepro as it seems to be widely used.
3. To make your folder and files public, I choose R2 object storage provided by Cloudflare. This is purely because our domain is registered with Cloudflare, you can choose any kind of online storage as long as your files can be viewed publically.

In the beginning, I followed the [PPA repository on Github](https://assafmo.github.io/2019/05/02/ppa-repo-hosted-on-github.html) guide and succeed. 
It should be fine for most casual users, but for my particular use case, this approach has one deadly short come and one small flaw.

1. the deb file has to be less than 100mb, otherwise it will be converted to git lfs link. Unfortunately, our deb file may very likely exceed this limit.
2. the archive/repository structure does not look like a standard debian archive.

After a lot more desperate searching online, I decide to go for the reprepro + Cloudflare R2 combination.


#### Step 1: Preparation

1. Domain name. In my case, I have a domain name registered with Cloudflare.
2. Object storage. Cloudflare provide a 10Gb free object storage R2. I just create a new bucket in the online dashboard, and under the Settings tab connect it to a subdomain of the MuPRO domain name, apt.repos.mupro.co
3. Install rclone. You need rclone to upload files to the bucket. Follow the instruction on Cloudflare to setup rclone.

#### Step 2: Package as deb

Build deb with cpack by building the cmake target called `package`.
```sh
python devtool.py build -t package
```

#### Step 3: Setup the deb repository structure

Follow the official instruction [here](https://wiki.debian.org/DebianRepository/SetupWithReprepro#Configuring_github_page)

Several things that are unique to our MuPRO setup are listed below

- we use a directory structure like this `mkdir -p repos/apt/conf`
- the `repos/apt/conf/distributions` file
```
Origin: apt.repos.mupro.co
Label: The mupro apt repository
Codename: all
Architectures: i386 amd64
Components: main
Description: Apt repository for PhaseField SDK
SignWith: FB7B972470FAC774799D9B84419F1DBF2D73E7F0
```
- the `repos/apt/conf/options` file
```
verbose
basedir ./
ask-passphrase
```

##### important
> A confusing thing is the Codename. In the official guide, it says Codename is the jammy, focal for ubuntu, or bullseye, bookworm for debian. Actually, no. You can choose whatever word you want. 
> The important thing is to use the same word in your **list** file. Since MuPRO distribute a static library, we don't really need to deal with shared libraries dependencies.


With the **distributions** and **options** file ready, you can include the deb file

```sh
# inside your conf's parent folder that is repos/apt in our example
reprepro includedeb all ~/codes/mupro-simulation/PhaseFieldSDK/out/build/linux-intel-Debug/mupropfsdk-0_0.0.2_amd64.deb
```

**all** here is the Codename in our distribution file. We also include the major version in our program's name following the debian's convention for multiversioning package.



<!-- ## Setup the DEB822 style source file

The mupro.sources file should be like
```sh
Types: deb
URIs: https://apt.repos.mupro.co/focal
Suites: all
Components: main

Types: deb
URIs: https://apt.repos.mupro.co/jammy
Suites: all
Components: main

Signed-By:
-----BEGIN PGP PUBLIC KEY BLOCK-----
.
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
FEo=
=d9Do
-----END PGP PUBLIC KEY BLOCK-----
``` -->

#### Step 4: Publish

To upload the repo structure, we use rclone

First, prepare the config file, use `rclone config file` to get the file location, the access_key_id and secret_access_key is obtained when creating the cloudflare R2 api key.
```sh
[r2]
type = s3
provider = Cloudflare
access_key_id = abcd
secret_access_key = 1234
endpoint = https://account_id.r2.cloudflarestorage.com
acl = private
```
Then

```sh
cd ~/repos
rclone copyto apt/dists r2:mupro-apt-repos/dists
rclone copyto apt/pool r2:mupro-apt-repos/pool
rclone copy apt/mupro.list r2:mupro-apt-repos/pool
rclone copy apt/mupro.gpg.key r2:mupro-apt-repos/pool
```


#### Step 5: Prepare the gpg pulic key and list file

```sh
gpg --armor --output mupro.gpg.key --export-options export-minimal --export FB7B972470FAC774799D9B84419F1DBF2D73E7F0
```

And the mupro.list file should contain this, notice the **all** here must be the same as your Codename.
```sh
deb https://apt.repos.mupro.co all main
```

##### important
> Why not DEB822? 
> We understand the above is deprecated, but at least up till 2023/03/07 all softwares that I understand does not conform to the DEB822 style.
> I also tried the DEB822 style, but met problem and I didn't want to spend time to debug.


#### Step 6: Instruct others to install 

Here are the instructions for others to install the package
```sh
sudo wget -O - https://apt.repos.mupro.co/mupro.gpg.key | sudo apt-key add -
sudo wget https://apt.repos.mupro.co/mupro.list -O /etc/apt/sources.list.d/mupro.list
```

#### Other useful commands

```
lsb_release -a
cat /etc/debian_version
```





## Contribution guidelines

Though we welcome all people with access to our code contribute 


### Work on SDK library

You should take a look at how the `L1_Electric` or `L1_Elastic` folder is structured in the `dev` folder, and learn how you should design your new module.
More details on the module design will be documented later.


### Work on the main program

If the current main program does not fulfill your need, then you have three choices customizing the main program. They are ranked in terms of my recommendation, so you should consider choice 1 whenever possible, the choice 2, and lastly choice 3.

Here we are only introducing the general rules of customizing the main program, for more details of how to change a specific type of main program, you should go to the documentation for that main program.

- [Phase-Field Ferroelectric main program](https://ferroelectric.mupro.co)
- others coming

#### Choice 1: Modify the existing main program

If your use case is quite useful to the general users and you just want to add a few parameters to extend the existing main program's capabilities, then you should consider add it to the existing main program. Rule of thumb is to not influence existing parameters since otherwise your changes can break other's program. Remember to [commit and publish your changes](commit_and_publish_your_changes.html).

#### Choice 2: Add a new main program in the existing repository

If your use case is useful to the general users but so different from the existing main program, for example, you're still doing a phase-field ferroelectric simulation but now your system has an inhomogeneous setup, then you may setup a new main program in the existing repository. For the PhaseFieldFerroelctric repository that's inside the `apps` folder along with our `basic` main program. Remember to [commit and publish your changes](commit_and_publish_your_changes.html) frequently when you are building you new main program.

#### Choice 3: Create your own main program in a new repository

If you want to write a main program for a completely different phase-field model, then you should consider creating a new git repository and add it as a new submodule of the PhaseFieldSDK repository.