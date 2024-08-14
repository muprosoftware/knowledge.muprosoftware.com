---
title: "文档"
description: "如何写文档"
---

文档是任何软件开发流程的重要组成部分。它有助于理解软件的工作原理，并提供有关如何有效使用和管理软件的重要信息。在本指南中，我们将介绍如何使用 Sphinx 和 MyST-Parser 创建全面、可维护的文档，以及如何设置 GitHub 工作流程，以便在 GitHub Pages 或其他静态网站托管服务上将文档发布为静态网站。

## Sphinx 和 MyST-Parser 简介

Sphinx 是一种强大的文档生成器，可将 reStructuredText 和 Markdown 文件转换成各种格式，包括 HTML 网站和用于 PDF 的 LaTeX。由于其可扩展性和易用性，它成为 Python 社区和其他开源社区的热门选择。

MyST-Parser 是一个 Sphinx 解析器插件，可让您完全使用 markdown 编写 Sphinx 文档。MyST 是 Markedly Structured Text（标记结构文本）的缩写，它是 CommonMark Markdown 规范的扩展，包含了 Sphinx 角色和指令的语法。

## 设置 Sphinx 和 MyST-Parser

开始之前，请确保您的计算机上安装了 Python 和 pip（Python 的软件包安装程序）。

1.安装 Sphinx 和 MyST-Parser： 在终端运行以下命令：

```sh
pip install sphinx
pip install myst-parser
```

2.设置 Sphinx 项目：  
  为你的项目创建一个新目录（用你想要的项目名称替换 "your_project"）并导航进入，然后运行 sphinx-quickstart 初始化你的 Sphinx 项目：

```sh
mkdir your_project
cd your_project
sphinx-quickstart
```

3.启用 MyST-Parser：  
  在 conf.py 文件（位于 "source" 目录）中的扩展名列表中添加以下一行：

```sh
extensions = ["myst_parser"]
```

## 使用 Sphinx 和 MyST-Parser 编写文档

设置好 Sphinx 和 MyST-Parser 后，就可以开始编写文档了。在源代码目录中创建一个新的 .md 文件，然后用 markdown 编写文档。

Sphinx 支持特殊指令，你可以用它们在文档中加入额外的信息和结构。例如，“..note::” 指令可创建一个注释部分，而 “..code-block::python” 则可创建一个代码块。通过 MyST-Parser，你可以在标记符文件中直接使用这些指令。你还可以使用标记符链接引用其他页面，Sphinx 会自动将它们转换为正确的格式。

## 构建和查看文档

要创建文档，请导航至项目目录并运行：“make html”。  
Sphinx 将在 "build/html" 目录下创建 HTML 版本的文档。你可以在浏览器中打开 "index.html" 查看文档。

要创建 LaTeX PDF 版本，请使用：“make latexpdf”。PDF 文件将放在 "build/latex" 目录下。

## 部署

### 阅读文档

[Read the Docs ](https://readthedocs.org/) 是一个专为托管文档而设计的平台。以下是在 Read the Docs 上部署 Sphinx 文档的方法：

1.如果尚未注册，请注册 Read the Docs 账户。  
2.登录后，点击 "Import a Project"。  
3.然后，你可以连接你的 GitHub 账户（或 Bitbucket 或 GitLab）。系统会要求你提供访问仓库的权限。  
4.账户连接成功后，你会看到一个仓库列表。点击仓库旁边的 "Import" 按钮。  
5.现在，您的文档应该会自动生成。您可以访问 https://<your_project_name>.readthedocs.io 查看。  
6.默认情况下，每次提交时，Read the Docs 都会从版本库的主分支构建文档。您可以在项目控制面板上更改此设置和其他设置。

### 设置 GitHub 工作流程

对于 MuPRO 而言，由于我们的版本库是私有的，因此无法使用 Github 页面服务，所以我们选择部署到免费的 Cloudflare 页面。如果你的项目是一个公共仓库，除了阅读文档，也可以考虑使用 Github 页面。

1.设置 GitHub 页面：  
  在 GitHub 仓库中，进入 "Settings" > "Pages"。选择要部署文档的分支（通常是 "gh-pages" 或 "main" 分支），并将目录设为"/root"。点击 "保存"。

2.创建 GitHub 操作工作流：  
  在 .github/workflows/main.yml 的版本库中创建一个新文件。在这个文件中，你可以指定一个工作流来构建你的 Sphinx 文档并将其部署到 GitHub 页面。以下是 main.yml 文件的示例：

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

每当推送到 "main" 分支时，就会触发该工作流。它会设置 Python、安装 Sphinx 和 MyST-Parser、构建 HTML 文档，并将生成的 HTML 文件部署到 "gh-pages" 分支。
