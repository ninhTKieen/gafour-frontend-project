# Clone Gapo Project Frontend

## Requirements

- Node Js version &geq; 12.
- `yarn` for manage packages (instead of `npm`). <br>
  For installation at global scope:
  ```bash
  $ npm install -g yarn
  ```

## Recommendations

- IDE: `Visual Studio Code` (VS Code).
- Extensions

  1. Some `Javascript` (`ES6`, `ES7`) extentions
  2. `Prettier`
  3. `Eslint`

- `nvm` to manage `node`
- `node` lts version
- Browser: `Google Chrome` for developing and debugging.
- Browser extensions:
  1. `React Developer Tools`
  2. `Redux DevTools`

## Start

### Clone repository

- With SSH
  ```bash
  $ git clone git@github.com:ninhTKieen/gafour-project-frontend.git
  ```
- With HTTPS
  ```bash
  $ git clone https://github.com/ninhTKieen/gafour-project-frontend.git
  ```

### Install dependencies (node_modules)

```bash
$ yarn install
```

### Edit environment variables before running.

Edit variable by in `.env` file for suitable with your project.

### Run project

- Run at local
  ```bash
  $ yarn start
  ```
- Build project (to static files)
  ```bash
  $ yarn build
  ```
  then you can use `serve` or `pm2` to serve the static files.

### More

- For formatting code
  ```bash
  $ yarn format
  ```
- For lint
  ```bash
  $ yarn lint
  ```
