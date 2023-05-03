---
title: "Introduction"
description: "Mu-PRO intro"
---

**Welcome to Mu-PRO!**

Mu-PRO aims to provide easy to use software solutions for mesoscale simulations.

Check out our Github [**organization**](https://github.com/orgs/muprosoftware/) and [**discussion**](https://github.com/orgs/muprosoftware/discussions)!

This website presents you a collection of general mesoscale simulation guidance starting from environment setup to visualizing data. Most of these knowledge is universal to any mesoscale simulation, applying not only to Mu-PRO SDK and software, but also to any other simulation programs.

### Mu-PRO SDK

We understand each of our users has unique simulation needs, thus our current primary focus is to distribute the Mu-PRO SDK that provides core solvers to our customers and allow them to customize the main programs that utilize these core solvers.

- openmupro: common utilities used by muprosdk. Buyers have access to the source code and may contribute to it so that our next muprosdk release will contain functions from you!
- muprosdk: core solvers, source code not accessible to the buyers
- main programs: combining subroutines from openmupro and muprosdk to form a simulation program that solves physical models. Buyers may fork and change the source code to reflect their own needs.


### Mu-PRO software

Though, Mu-PRO SDK is the future, for now, we are still only distributing executable only type software. Mu-PRO software is divided into two groups: server software and desktop software.
- server software is designed to run on Linux server using MPI for parallelization. Available modules are:
  - Ferroelectric: simulate polarization domain structure evolution 
  - Magnetic: simulate magnetic domain structure evolution with elastic coupling
  - Effective Property: calculate field distribution and effective value of linear properties
- desktop software is designed to run on Window with a GUI in serial. Available  modules are:
  - Dielectric Breakdown: simulate the dielectric breakdown path evolution based on a stochastic model
  - Effective Property: calculate field distribution and effective value of linear properties
  - Impedance: calculate the impedance of dielectric system at various frequencies

We are working on merging these two categories with the help of our newly developed Mu-PRO SDK. Thus, in the future the server software may also have GUI to assist parameter input, and desktop software may also utilize MPI to accelerate the simulation.