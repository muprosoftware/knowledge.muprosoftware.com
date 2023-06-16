---
title: "Documentation"
description: "Write documentation"
---

Documentation is a crucial part of any software development process. It helps in understanding how the software works and provides vital information about how to use and manage the software effectively. In this guide, we will walk through how to use Sphinx and MyST-Parser for creating comprehensive and maintainable documentation and how to set up a GitHub workflow for publishing the documentation as a static website on GitHub Pages or any other static site hosting service.

## Introduction to Sphinx and MyST-Parser

Sphinx is a robust documentation generator that converts reStructuredText and Markdown files into a variety of formats, including HTML websites and LaTeX for PDFs. It is a popular choice in the Python community and other open-source communities for its extensibility and ease of use.

MyST-Parser is a Sphinx parser plugin that allows you to write Sphinx documentation entirely in markdown. MyST stands for Markedly Structured Text, an extension of the CommonMark Markdown specification that includes syntax for Sphinx roles and directives.

## Setting Up Sphinx and MyST-Parser

Before you start, ensure that you have Python and pip (Python's package installer) installed on your machine.

1. Install Sphinx and MyST-Parser: Run the following commands in your terminal:

```
pip install sphinx
pip install myst-parser
```

2. Set up your Sphinx project:
   Create a new directory for your project (replace "your_project" with your desired project name) and navigate into it, then, run sphinx-quickstart to initialize your Sphinx project:

```
mkdir your_project
cd your_project
sphinx-quickstart
```

3. Enable MyST-Parser:
   In your conf.py file (located in the "source" directory), add the following line to the extensions list:

```
extensions = ["myst_parser"]
```

## Writing Documentation with Sphinx and MyST-Parser

With Sphinx and MyST-Parser set up, you can start writing your documentation. Create a new `.md` file in your source directory and write your documentation in markdown.

Sphinx supports special directives that you can use to include additional information and structure in your documentation. For instance, the `.. note::` directive creates a note section, while `.. code-block:: python` creates a code block. With MyST-Parser, you can use these directives directly in your markdown files. You can also reference other pages using markdown links, and Sphinx will automatically convert them into the correct format.

## Building and Viewing Your Documentation

To build your documentation, navigate to your project directory and run: `make html`.
Sphinx will create an HTML version of your documentation in the "build/html" directory. You can open "index.html" in your browser to view your documentation.

To build a LaTeX PDF version, use: `make latexpdf`. The PDF will be available in the "build/latex" directory.

## Deploy

### Read the docs

[Read the Docs](https://readthedocs.org/) is a platform designed specifically for hosting documentation. Here's how to deploy your Sphinx documentation on Read the Docs:

1. Sign up for a Read the Docs account if you haven't already.
2. After you're logged in, click on "Import a Project".
3. You can then link your GitHub account (or Bitbucket, or GitLab). You'll be asked for permission to access your repositories.
4. After your account is linked, you'll see a list of your repositories. Click the "Import" button next to your repository.
5. Your documentation should now build automatically. You can view it by going to https://<your_project_name>.readthedocs.io.
6. By default, Read the Docs builds the documentation from the master branch of your repository for each commit. You can change this and other settings from the project dashboard.

### Setting Up a GitHub Workflow

For MuPRO since our repository is private, we cannot use the github page services, so we choose deploy to the free Cloudflare pages. If you're project is a public repository, besides from read the docs, you can also consider using the Github page.

1. Set up GitHub Pages:
   On your GitHub repository, go to "Settings" > "Pages". Select the branch you want to deploy your documentation from (usually the "gh-pages" or "main" branch), and set the directory to "/root". Click "Save".

1. Create a GitHub Actions workflow:
   Create a new file in your repository at .github/workflows/main.yml. In this file, you can specify a workflow that builds your Sphinx documentation and deploys it to GitHub Pages. Here's an example of what your main.yml file might look like:

```yaml
name: Build and Deploy
on:
  push:
    branches:
      - main
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository
        uses: actions/checkout@v2

      - name: Set up Python
        uses: actions/setup-python@v2
        with:
          python-version: 3.8

      - name: Install dependencies
        run: |
          pip install sphinx myst-parser

      - name: Build HTML docs
        run: make html
        working-directory: ./docs

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@4.1.5
        with:
          branch: gh-pages
          folder: ./docs/_build/html
```

This workflow triggers whenever you push to your "main" branch. It sets up Python, installs Sphinx and MyST-Parser, builds your HTML documentation, and deploys the resulting HTML files to your "gh-pages" branch.
