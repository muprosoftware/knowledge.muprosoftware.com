---
title: "Versioning"
description: "How to properly label your code"
---


Versioning is an essential aspect of software development that allows for the tracking of different versions or states of a project over time. It helps developers to maintain a historical record of changes, track updates, fix bugs, and revert to previous versions when necessary. There are several versioning strategies used in programming, including Semantic Versioning, Calender Versioning and Hash Versioning. At MuPRO, we prefer Hash Versioning, but it is beneficial to also understand other options.

## Semantic versioning

Semantic Versioning, often abbreviated as SemVer, is a versioning scheme for software that aims to convey meaning about the underlying changes in a release. The Semantic Versioning specification is widely adopted by many software libraries and systems. SemVer uses a three-part version number like MAJOR.MINOR.PATCH. Here's what each element means:

- **MAJOR**: This is increased when you make incompatible API changes. A major release is generally associated with significant changes in the software, including functionality that may break backward compatibility.
- **MINOR**: This is increased when you add functionality in a backwards-compatible manner. Minor versions usually add new features but do not break or change existing functionality.
- **PATCH**: This is increased when you make backwards-compatible bug fixes. Patch versions are typically associated with bug fixes and performance improvements that do not add new features or break existing ones.

A pre-release version might look like 1.0.0-alpha.1, and a version with build metadata might look like 1.0.0+20130313144700.

The problems using semantic versioning for MuPRO are:
- We are not professionally software developers, it is hard for all of our contributors to follow the semantic versioning rules.
- When not used properly, it is possible that when different people referring to the same version, they are actually pointing to different commit. For example, in our old MuPRO code, we had the released version 1.0.6, that occasionally get minor updates but we didn't bother to change version number across all places.
- There is a decision making overhead for the versioning number, for example, sometimes it is hard to determine whether some changes are minor vs major, or minor vs patch.
- We are not using any tools to help us manage dependencies, for example, using npm to manage the dependencies in package.json file, so we do not have to use semantic versioning.

## Calender Versioning

Calendar Versioning, often abbreviated as CalVer, is a software versioning scheme that includes the release date of the version in the version string. This allows users and developers to get a quick sense of how old a software version is and when the last update occurred.

The CalVer system uses a scheme like MAJOR.YY.MINOR.MICRO. Here's what each part typically represents:
- **MAJOR**: This is a number that gets incremented with significant releases, similar to Semantic Versioning.
- **YY**: This is the year of the release. Some schemes use YYYY for a 4-digit year.
- **MINOR**: This can represent the month of the release, or it could be a number that gets incremented with each release.
- **MICRO**: This number represents a smaller revision or bug fix released in the same year and month. It gets incremented with each such release.

The Ubuntu operating system is a prominent example of software that uses Calendar Versioning. Ubuntu versions are labeled with the year and the month of the release. For example, Ubuntu 21.04 was released in April 2021. The advantage of this system is that users can quickly tell how old their software version is and when to expect the next update.

The problems using calender versioning for MuPRO are:
- We do not have a predictable release schedule.

## Hash Versioning

There is actually no standard for Hash versioning, and we define our own rules, that is YYYY.mmdd.commit_short_hash
- YYYY is the year
- mmdd is the month and day
- commit_short_hash is the output of `git rev-parse --short HEAD`

### Why we use versioning in such way
1. there is no decision making, every new version can automatically be determined, thus well-suited for our CI/CD workflow
2. it has benefit of calender versioning that everyone can know the release date of each version
3. there won't be any possible confusion when different contributor debugging together because each commit hash is unique