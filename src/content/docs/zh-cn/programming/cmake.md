---
title: "使用 CMake 编译"
description: "如何简单地使用 CMake 编译代码"
---

软件开发是一个精细的过程，需要编译、测试和部署代码。这些任务的复杂性要求使用强大的构建系统来简化开发流程、提高生产率并使项目更易于管理。CMake 就是这样一款用于管理软件构建过程的跨平台免费开源软件工具。

CMake 是 Cross-platform Make 的递归首字母缩写，是一个强大且高度可扩展的构建系统，可满足各种项目的需求。它使用与平台和编译器无关的简单配置文件来控制软件编译过程，使软件开发人员可以跨平台、跨环境编译软件。

Modern CMake 的诞生标志着软件开发的重大进步，它从基于变量的指令转变为基于目标的指令，从而使 CMake 脚本更加结构化和可读。Modern CMake 充分利用了 CMake 3.0 及以上版本的功能，提高了清晰度，减少了常见错误，并简化了维护工作。

## 使用 CMake 开发软件的好处

### 平台独立性

CMake 脚本与平台无关，这意味着它们可用于生成各种平台的构建文件，包括 Linux、MacOS 和 Windows。这种通用性意味着您可以在多个平台上使用相同的 CMakeLists.txt 文件，从而确保项目的可移植性。

### 可扩展性

CMake 可适应任何规模的项目，从简单的单文件程序到跨越多个目录并包含各种库的大型复杂代码库。

### 可延申性

CMake 支持多种构建系统，如 Unix Makefile、Ninja 以及 Visual Studio 和 Xcode 等集成开发环境的项目文件。这种广泛的兼容性为开发人员提供了使用首选工具的灵活性。

### 有效的依赖关系管理

Modern CMake 引入了基于目标的声明，彻底改变了依赖关系管理。它提供了一种直观的方式来指定包含目录、编译选项和链接库，从而避免了对这些依赖关系进行容易出错的手动管理。

## 目标
在 CMake 中，目标是联编过程的终点。它可以是一个可执行文件、一个库或一个由构建系统生成或运行的自定义命令。目标有一些属性，比如包含目录和编译定义，你可以通过设置来控制它们的编译方式。你将使用以下两条 cmake 命令之一创建一个新的目标。
```cmake
add_executable(my_app)
add_library(my_lib)
```

## 预设

CMake 预设是 CMake 3.19 的一项新功能，允许开发人员在名为 CMakePresets.json 或 CMakeUserPresets.json 的 JSON 文件中指定常用配置。这简化了命令行的使用，并确保不同环境下的选项保持一致。
```json
{
  "version": 3,
  "cmakeMinimumRequired": {
    "major": 3,
    "minor": 19,
    "patch": 0
  },
  "configurePresets": [
    {
      "name": "default",
      "description": "Default build",
      "hidden": false,
      "generator": "Ninja",
      "binaryDir": "${sourceDir}/build",
      "cacheVariables": {
        "CMAKE_EXPORT_COMPILE_COMMANDS": "YES",
        "CMAKE_BUILD_TYPE": "Debug",
        "CMAKE_EXPORT_COMPILE_COMMANDS": "YES"
      }
    }
  ]
}
```
在本例中，定义了一个名为 "default" 的配置预置。它指定 Ninja 为生成器，将二进制文件目录设置为源代码目录下的 "build" 子目录，并设置了几个缓存变量。

## 配置和构建

在配置阶段，CMake 会处理项目中的 CMakeLists.txt 文件。它会检查所需的编译器和库，然后为所选的编译系统生成必要的编译文件。接下来是编译阶段，编译文件用于编译和链接你的项目。

下面是一个使用预设的基本示例：
```sh
cmake --preset="linux-Debug" -S "." # 使用 linux-Debug configure 预置配置当前目录中的源代码
cmake --build --preset="linux-Debug" # 使用 linux-Debug 编译预置进行构建
```

## 测试

除了管理构建系统，CMake 还捆绑了一个功能强大的测试工具 CTest。CTest 是一款多功能工具，具有多种功能，可简化软件开发中的测试过程，从而提高软件的可靠性和健壮性。

CTest 与 CMake 无缝集成，简化了测试过程。使用 add_test() 命令在 CMakeLists.txt 文件中定义测试后，就可以使用 CTest 运行这些测试，无需任何额外配置。
