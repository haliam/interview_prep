# Git

> **Purpose:** Git Flow branching model summary for interview preparation.

## What is Git Flow?

> "It is a working method that branches the repository in a more optimal and easier way for the developer. It is divided into the following branches:"

### Master

> "The master branch stores stable, approved versions to send to production. This branch is never used directly by the developers."

### Develop

> "The develop branch receives the changes from the developers working on the repo. Besides always being up to date, the develop branch always receives the developers' features."

### Feature

> "The feature branch handles the development of a piece of logic or a use case that has to be added to the project. Once finished, this branch is approved without errors and sent to develop, where it is stored."

### Release

> "The release branch simply versions the project so it can be sent to both develop and master through a tag specifying the version."

### Hotfix

> "The hotfix branch fixes urgent bugs that happen in the middle of production. Once fixed, it can be versioned like a release and sent to master and to develop."
