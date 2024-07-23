---
title: Opinionated best practices
---

1. Write compiler agnostic code, for example  `if (j - 1 >= 1 .and. in(i, j - 1, k) == 0) out(i, j - 1, k) = 1` will be wrong if the compiler is not processing the condition from left to right. So better way to avoid possible bug is:
``` fortran
if(j-1>=1) then
    if(in(i,j-1,k)==1) then
        out(i,j-1,k)=1
    endif
end if
```