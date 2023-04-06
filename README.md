# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

================================================================================================

# Node with React: Build & Deploy a Fullstack Web Application

# FRONTEND

# Project structure

1. create a new react-app with typecsript template
   `yarn create react-app client --template typescript`

2. create project structure `assets & sub folders` `colors`, `components`, `hooks`, `mocks`, `pages`, `redux`, `services`
3. add `api`, `socket` and `utils` folder`in`services` folder

4. install `sass` & `react-loading-skeleton` librarys
   `yarn add -D node-sass` & types: `yarn add -D @types/node-sass` & `yarn add react-loading-skeleton`

5. rename `App.css` and `index.css` to .scss extension
6. add styles for both of the above from repo
   NB: we use variables from colors folder as: `background: var(--white-1);`

# Setup Eslint and Prettier

1. Install Eslint and dependencies:
   `yarn add -D @typescript-eslint/eslint-plugin `
   `@typescript-eslint/parser`
   `eslint eslint-config-airbnb`
   `eslint-config-airbnb-typescript`
   `eslint-config-prettier `
   `eslint-import-resolver-typescript`
   `eslint-plugin-import`
   `eslint-plugin-jsx-a11y`
   `eslint-plugin-prettier`
   `eslint-plugin-react`
   `eslint-plugin-react-hooks prettier`

2. run `npx eslint --init` and choose `typescript` as language and all the other required configs
3. add code to generatied `eslint.json`file and add lint scripts to `package.json`
4. add editor.config in root directory
5. add `.eslintignore` and `.prettierignore` in root
6. run `yarn run lint:fix` to test results

# Setup github repo
