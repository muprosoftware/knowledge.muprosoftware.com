---
title: Basic HPC linux usage
---

High-Performance Computing (HPC) harnesses the power of multiple computing nodes to solve complex computational problems. HPC servers typically run on Linux, a robust and scalable operating system. Parallel computing is a form of computation where many calculations or processes are carried out simultaneously. It breaks down larger problems into smaller, manageable ones that can be solved at the same time. In HPC, MPI (Message Passing Interface) is the standard for distributing tasks among nodes. This article introduces the basic usage of an HPC Linux server for MPI parallel computing, highlighting a few useful Linux and job submission commands.

## Linux Commands for Navigating HPC Servers

Before diving into MPI, it's crucial to familiarize yourself with some fundamental Linux commands, as HPC servers often run on Linux-based systems.

1. pwd (Print Working Directory): Displays the directory you're currently in.
2. ls (List): Lists all the files and directories in your current directory.
3. cd (Change Directory): Allows you to move to a different directory. For example, cd /home/user/documents will move you to the 'documents' directory.
4. mkdir (Make Directory): Creates a new directory.
5. rm (Remove): Deletes a file. Be careful with this command, as once you delete a file, it cannot be recovered.
6. man (Manual): Gives you a detailed description of a command and how to use it. For example, man ls will display the manual for the ls command.

These commands provide a foundation for navigating the Linux file system, essential for managing computational tasks on an HPC server.

## MPI

MPI is a library specification for message-passing, proposed as a standard by a broadly based committee of vendors, implementers, and users. It's often used for parallel processing in HPC environments.

For all MuPRO programs, we relies on the Intel MPI which you can obtain for free from the Intel oneAPI HPCkit.

### Running a Simple MPI Program

You can run a simple "Hello, World" program to test the MPI. Here's a basic example of what that program might look like in C:

```
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

You can compile this program using the `mpiicc` compiler from Intel MPI:

```
mpiicc hello_world.c -o hello_world
```

And then run it with the `mpirun` command:

```
mpirun -np 4 ./hello_world
```

In this example, -np 4 tells MPI to use 4 processes to run the program.

## Job submission

On many HPC servers, jobs are managed and scheduled using a system like Slurm. Here are a few basic Slurm commands:

1. sbatch: This is the command used to submit a job to the Slurm scheduler. You generally use it with a batch script.
2. squeue: Displays the status of jobs in the queue.
3. scancel: Allows you to cancel a job. You must provide the job ID, which you can get from the squeue command.

Here's an example of a Slurm batch script for an MPI job:

```
#!/bin/bash
#SBATCH --job-name=mpi_job
#SBATCH --nodes=4
#SBATCH --ntasks-per-node=1
#SBATCH --time=00:10:00
#SBATCH --output=mpi_output_%j.txt

module load openmpi

mpirun /path/to/your/mpi/program
```

In this script, we're requesting 4 nodes with 1 task per node, setting a time limit of 10 minutes, and saving the output to a file named mpi*output*%j.txt, where %j is replaced with the job ID. We then load the OpenMPI module and run the MPI program.

To submit this job, you would save the script to a file (e.g., job.sh) and then use the sbatch command:

```
sbatch job.sh
```
