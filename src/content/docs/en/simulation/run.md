# Run the main program

## Step 1: Connect to the server
As we did in the [Configure SSH connection section Step 3](ssh.html#step-3-ssh-login).

## Step 2: Create and open directory

1. Create new folder in your temporary directory for running simulation. You don't want to run any simulation directly in the work folder because it has slow disk RW speed and limited storage size.

```sh
cd scratch
mkdir test-run
```

2. Click `Open Folder` and navigate to the folder you created, then click `Ok`.

## Step 3: Create input files

For a quick start, you can copy input file from the example folder under your corresponding main program, such as for ferroelectric `apps/PhaseFieldFerroelectric/examples`. 

```sh
cp /storage/home/xuc116/work/PhaseFieldSDK/apps/PhaseFieldFerroelectric/examples/basic/*.toml .
```

If you copy the above command, remember to replace the user name with your own username.

## Step 4: Test run the simulation

Before submitting a simulation job, you can first try running the simulation with a smaller system directly on the login node. Remember you have to shrink the size of these calculations, because login node has limit on memory. To do so, you need to open the _input.toml_ file and update the values behind the **simulation_grid** keyword.

Since we have already configured the **muferro** alias in the [previous step](build.html/step-4-add-alias-for-executable), you can simply call `muferro` within the `test-run` folder to start the ferroelectric program.


## Step 5: Submit simulation jobs

1. Prepare a pbs file, here is an example pbs file for PSU ACI server, let's call it ferro.pbs
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
2. Submit the job to pbs queue with `qsub ferro.pbs`