---
title: Common questions
---

## Segfault on very small system

If your simulation only works for very small system, such as a 16 cube system, and fails on even just slightly larger system, then it maybe the stack size problem. You can check it's value with the command `ulimit -s`.

**Solution:** Set the stack size to be unlimited with the command `ulimit -s unlimited`.

## Cannot set stack size on WSL

This is a known problem with WSL on Windows. If you run `ulimit -s unlimited` it will give you an error like this `bash: ulimit: stack size: cannot modify limit: Invalid argument`.

**Solution:** As answered [here](https://github.com/microsoft/WSL/issues/633). You need to run this command `sudo prlimit --stack=unlimited --pid $$;ulimit -s unlimited`.