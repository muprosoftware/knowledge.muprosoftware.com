---
title: "Using CMake"
description: "How to properly build your program with ease?"
---

Software development is a delicate process that entails compiling, testing, and deploying code. The complex nature of these tasks necessitates the use of a robust build system to streamline the development process, enhance productivity, and make projects more manageable. CMake is one such cross-platform free and open-source software tool designed to manage the software build process. 

CMake, a recursive acronym for Cross-platform Make, is a robust and highly extensible build system that caters to the needs of a wide range of projects. It is used to control the software compilation process using simple platform and compiler-independent configuration files, allowing software developers to compile their software across numerous platforms and environments.

The inception of Modern CMake marks a significant stride in software development, with a shift from variable-based to target-based directives, thus facilitating more structured and readable CMake scripts. Modern CMake leverages the capabilities of CMake 3.0 and above, fostering greater clarity, reducing common errors, and simplifying maintenance.

## Benefit of using CMake for software development

### Platform Independence

CMake scripts are platform-agnostic, meaning that they can be used to generate build files for various platforms, including Linux, MacOS, and Windows. This versatility means that you can use the same CMakeLists.txt file across multiple platforms, ensuring your project’s portability.

### Scalability

CMake is designed to accommodate projects of any scale, from simple single-file programs to large, complex codebases spanning multiple directories and incorporating various libraries.

### Extensibility

CMake supports several build systems, such as Unix Makefiles, Ninja, and project files for IDEs like Visual Studio and Xcode. This broad compatibility offers developers the flexibility to work with their preferred tools.

### Effective Dependency Management

Modern CMake has introduced target-based declarations, which has revolutionized dependency management. It provides an intuitive way of specifying include directories, compile options, and linked libraries, thus preventing error-prone manual management of these dependencies.

## Target
In CMake, a target is an endpoint of the build process. It can be an executable file, a library, or a custom command that the build system generates or runs. Targets have properties, like include directories and compile definitions, which you can set to control how they're built. You will create a new target using one of the following two cmake commands.
```cmake
add_executable(my_app)
add_library(my_lib)
```

## Presets

CMake Presets are a new feature as of CMake 3.19 that allow developers to specify common configurations in a JSON file named CMakePresets.json or CMakeUserPresets.json. This simplifies command-line usage and ensures consistent options across different environments.
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
In this example, a configure preset named "default" is defined. It specifies Ninja as the generator, sets the binary directory to a "build" subdirectory of the source directory, and sets several cache variables.

## Configure and build

The configuration stage is where CMake processes the CMakeLists.txt files in your project. It checks for the required compilers and libraries, then produces the necessary build files for your chosen build system. The build stage follows, where the build files are used to compile and link your project.

Here's a basic example using presets:
```sh
cmake --preset="linux-Debug" -S "." # configure using the linux-Debug configure presets with source from the current directory
cmake --build --preset="linux-Debug" # build using the linux-Debug build presets
```


## Testing

In addition to managing build systems, CMake also comes bundled with a powerful testing tool known as CTest. CTest is a versatile tool that offers a variety of features to simplify the testing process in software development, thereby enhancing the reliability and robustness of the software.

CTest is seamlessly integrated with CMake, simplifying the testing process. After defining your tests in CMakeLists.txt files using the add_test() command, you can use CTest to run these tests without requiring any additional configuration.