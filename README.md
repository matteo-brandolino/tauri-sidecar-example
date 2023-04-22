# Tauri + React + Typescript (and binaries)

A simple example how to use sidecar in a tauri.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## Quickstart

Before cloning the repo, make sure you have all the prerequisites to run a tauri app. Visit the following [link](https://tauri.app/v1/guides/getting-started/prerequisites)

## Quickstart

### Install

```bash
git clone https://github.com/matteo-brandolino/tauri-sidecar-example
```

Change the directory just created:

```bash
cd tauri-sidecar-example
```

Install dependecies and run in dev mode:

```bash
npm install && npm run start
```

## Binaries - An example

I have created a Python script and made it executable using PyInstaller. The resulting binary has been placed in the "binaries" folder. It's important to note that there's no need to rename the file inside the "binaries" folder The Node script will automatically rename it for you using the pattern "binary-name{-target-triple}{.system-extension}" based on the operating system.
