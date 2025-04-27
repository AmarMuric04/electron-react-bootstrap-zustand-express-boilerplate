# A Boilerplate wrapper over Electron-Vite

An Electron application with Vite, React, Typescript, React-Bootstrap, Zustand & Express

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## About the project

This is made for personal use, so that in the future there's no need to waste an hour or two setting up the type safety, the context bridge, the connection between the main process and the express server etc.

The boilerplate comes with a pre-built Sign-Up page, an example on how to handle interaction with the backend through the context bridge and error handling through axios and a custom error handling logic to keep code modular and clean.

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```

## Note

If there's anything that should be changed, please contact me or open an issue.

## 📦 Dependencies

---

Here’s a breakdown of the main dependencies used in this project:

- Zustand
- Express (cors, express-validator)
- React-Bootstrap
- Electron

All of these are pretty self explanatory.
