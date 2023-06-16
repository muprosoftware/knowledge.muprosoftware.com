---
title: "Git"
description: "How to manage your code?"
---

Since its inception, Git has become an essential tool in the world of software development. It is a version control system (VCS) that allows developers to track changes in their code over time. In essence, Git lets multiple people work on a project simultaneously without overriding each other's work.

## The Importance of Git

Git is crucial in software development for several reasons:

1. **Collaboration**: Git allows multiple developers to work on the same project simultaneously without conflicting each other's changes.

2. **Version Control**: It helps developers maintain a history of changes, thus enabling them to backtrack if needed. Each modification is tracked with the time, the author, and the change made.

3. **Code Security and Redundancy**: When code is pushed to a remote repository, it acts as a backup. Even if a local machine encounters a failure, the code remains safe in the remote repository.

4. **Efficiency and Speed**: Git improves the overall efficiency of the development process by providing various features like branches and submodules.

To understand Git better, let's delve into some key concepts and features: commit, push and pull, branches, merge and rebase, and submodules.

## Commit, Push, and Pull

Committing in Git is like setting a checkpoint in your project which you can revert to if needed. It captures the current state of the project.

For example:

```
git add filename
git commit -m "Commit message"
```

The above command will commit the changes made in the 'filename' file with the message "Commit message".

Pushing, on the other hand, uploads the committed changes to a remote repository.

For example:

```sh
git push origin master
```

The above command pushes the commits from the 'master' branch to the 'origin' remote repository.

Pulling is the process of fetching and integrating changes from a remote repository into your local repository.

For example:

```
git pull origin master
```

The above command pulls the changes from the 'master' branch of the 'origin' remote repository into your local repository.

## Committing best practices

1. Make frequent and small commits: Rather than waiting until you've made a lot of changes before committing, it's best to commit small changes often. This makes it easier to identify and understand changes and bugs, if any.
2. Write clear commit messages: Your commit message should clearly state what the commit is about. The ideal commit message begins with a short (50 characters or fewer) summary, followed by a blank line and a more detailed explanation, if necessary.
3. Commit related changes: A commit should be a wrapper for related changes. For example, fixing two different bugs should produce two separate commits.
4. Don't commit half-done work: Only commit when the change is completed and tested. This way, the commit will always contain a version of the project that works.
5. Test before you commit: Always run your tests before you commit to ensure that you're not committing broken code.

## Branches, Merge

A branch in Git is essentially a unique set of code changes with a unique name. It represents an independent line of development. The default branch name in Git is 'master'.

For example:

```
git branch new-branch
```

The above command creates a new branch called 'new-branch'.

Merging is Git's way of putting a forked history back together.

For example:

```
git merge new-branch
```

The above command merges the 'new-branch' into the current active branch.

## Branching best practices

1. Create a new branch for each feature or issue: According to the GitHub flow, each new feature, bug fix, or issue should have its own branch. This ensures that the master branch always contains production-quality code.
2. Use descriptive branch names: Branch names should be descriptive and reflect the task at hand. GitHub Flow suggests naming the branch with something descriptive like 'add-new-login-button' or 'issue-15-fix-header'.
3. Merge and delete branches after use: Once a feature has been implemented or a bug has been fixed, merge the branch back into the master branch and delete it. This keeps your project tidy and manageable.
4. Keep branches up-to-date with the master branch: If a branch is long-lived, it can start to deviate significantly from the master branch. Periodically pull changes from the master branch into your feature branches to keep them up-to-date and prevent merge conflicts.
5. Review code before merging: Use pull requests to review code and ensure it meets your team's standards before it gets merged into the master branch.

## Submodules

A submodule in Git is like a Git repository inside another Git repository. It's used when you want to include an external project into your project while keeping the external project's history intact.

For example:

```
git submodule add https://github.com/username/repo.git
```

The above command adds the 'repo' repository as a submodule to your current project.

## Pull request

A pull request is a feature in Git-based platforms like GitHub, GitLab, or Bitbucket, used for collaboration in software development. A pull request is essentially a proposal or request to incorporate the changes made in one branch of a repository into another branch, usually the main or master branch.

Here's a breakdown of how pull requests work:

1. A developer makes changes to a repository by creating a new branch and committing their code to this branch. This could involve adding a new feature, fixing a bug, refactoring existing code, etc.
2. Once the developer is ready to integrate their changes with the main codebase, they create a pull request. This action essentially says, "I've made some changes in my branch, and I'd like them to be pulled into the main branch."
3. The pull request is then visible to all members who have access to the repository. They can review the proposed changes, comment on them, suggest modifications, or even add additional commits to the pull request.
4. If the team agrees the changes are ready to go, or after specified modifications have been made, the pull request can be merged. This action integrates the changes from the pull request branch into the main branch.
5. After successful merging, the branch used for the pull request can be deleted to keep the project tidy, although this is not mandatory.

Pull requests are a cornerstone of team-based software development and especially for open source projects. They help facilitate discussion around code, ensure code quality, share knowledge among team members, and maintain a history of changes and decision-making.
