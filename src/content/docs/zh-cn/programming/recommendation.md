---
title: 意见性的最佳实践
---

1.编写与编译器无关的代码，例如，'if (j - 1 >= 1 .and. in(i, j - 1, k) == 0) out(i, j - 1, k) = ' ，如果编译器不是从左到右处理条件，就会出错。因此，避免可能出现的错误的更好方法是：
``` fortran
if(j-1>=1) then
    if(in(i,j-1,k)==1) then
        out(i,j-1,k)=1
    endif
end if
```
