---
title: "Coding collaboratively"
description: "How to contribute to Mu-PRO code"
---


For any coding collaboration, there will be contribution rules, so does MuPRO's projects.


## Work on SDK library

You should take a look at how the `L1_Electric` or `L1_Elastic` folder is structured in the `dev` folder, and learn how you should design your new module.
More details on the module design will be documented later.


## Work on the main program

If the current main program does not fulfill your need, then you have three choices customizing the main program. They are ranked in terms of my recommendation, so you should consider choice 1 whenever possible, the choice 2, and lastly choice 3.

Here we are only introducing the general rules of customizing the main program, for more details of how to change a specific type of main program, you should go to the documentation for that main program.

- [Phase-Field Ferroelectric main program](https://ferroelectric.mupro.co)
- others coming

### Choice 1: Modify the existing main program

If your use case is quite useful to the general users and you just want to add a few parameters to extend the existing main program's capabilities, then you should consider add it to the existing main program. Rule of thumb is to not influence existing parameters since otherwise your changes can break other's program. Remember to [commit and publish your changes](commit_and_publish_your_changes.html).

### Choice 2: Add a new main program in the existing repository

If your use case is useful to the general users but so different from the existing main program, for example, you're still doing a phase-field ferroelectric simulation but now your system has an inhomogeneous setup, then you may setup a new main program in the existing repository. For the PhaseFieldFerroelctric repository that's inside the `apps` folder along with our `basic` main program. Remember to [commit and publish your changes](commit_and_publish_your_changes.html) frequently when you are building you new main program.

### Choice 3: Create your own main program in a new repository

If you want to write a main program for a completely different phase-field model, then you should consider creating a new git repository and add it as a new submodule of the PhaseFieldSDK repository.