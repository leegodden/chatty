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

Course Link: `https://www.udemy.com/course/node-with-react-build-deploy-a-fullstack-web-application/learn/lecture/33788560#questions`
GH: `https://github.com/uzochukwueddie/chatty`
Snippet for Typescript Arrow component:  `tsrafc`

# FRONTEND

# Project structure

1. create a new react-app with typecsript template
   `yarn create react-app client --template typescript`

2. create project structure `assets & sub folders` `colors`, `components`, `hooks`, `mocks`, `pages`, `redux`, `services`
3. add `api`, `socket` and `utils` folder in `services` folder

4. install `sass` & `react-loading-skeleton` librarys
   `yarn add -D node-sass` & types: `yarn add -D @types/node-sass` & `yarn add react-loading-skeleton`

5. rename `App.css` and `index.css` to `.scss extension`

6. add styles for both of the above from `GH repo`
   NB: we use `variables` from `colors/variables.scss` folder as example: `background: var(--white-1);`

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
3. add code to generate `eslint.json`file and add lint scripts to `package.json`
4. add `editor.config` in root directory
5. add `.eslintignore` and `.prettierignore` in root
6. run `yarn run lint:fix` to test results

NB: Disable `vscode prettier plugin` in project workspace

# Setup github repo

1. Create new repo in git Add all files and commit. Then follow GH instructions
2. add our branches in the GithuB ui: `develop` from `main`, `staging` from `develop`
3. In GH go to `settings > branches` and change default branch to `develop`

We can now create our `feature branches` from `develop`, branch and then merge `develop` to `staging` and
then `staging` to `main`. For `hot fixes` we create a feature from `main` and merge to `main` directly

4. in terminal run `git fetch` to see our branches
5. then run `git checkout develop` which is the branch we will be creating our `features` from

# Create AuthTabs.tsx page

1. Check that were in `develop` branch & create a new feature branch named `auth-features`:
   `git checkout -b feature/auth-features`

2. create a `auth` folder in `src/pages`
3. create a `auth-tabs` folder in `auth` folder and in it add `AuthTabs.tsx` and `AuthTabs.scss` files. 
	import `AuthTabs.scss` into `AuthTabs.tsx`

4. in `AuthTabs.tsx` add initial code, then add styles in `AuthTabs.scss`

5. create `index.tsx` in `pages/auth` and import & export `AuthTabs.tsx` This file will be used for importing & exporting
	all the `auth` folders files

6. in `App.tsx` add initial code

# App Router

1. install `react-router-dom` and the `@types`
   `yarn add react-router-dom`  
   `yarn add @types/react-router-dom -D`

2. in `src` folder create `route.tsx` and add first route `AuthTabs` 
3. now in `App.tsx` import `BrowserRouter` and `AppRouter` and wrap `BrowserRouter` around `AppRouter`
4. import `App.scss` into `App.tsx`
4. test in browser - we should see markup from `AuthTabs.tsx`

# Add auth background image

1. in `AuthTabs.tsx` import `background.jpg` image from `assets` folder
2. add image to `container-wrapper`parent div and add `onClick `events for `Sign In` or `Sign Up`
3. Now add conditional rendering  to show login or register component 

# Button and Input components

1. in components folder create `button folder` and add `Button.tsx` in it.
2. add code and props for `Button.tsx`

3. create an `input` folder in `components` folder and add `Input.tsx` & `Input.scss` into it

4. add code for both of the above files
	NB: `forwardRef` allows `parent` components to pass down `refs` to their `child components`
	see: `https://felixgerschau.com/react-forwardref-explained/`

# Login component

1. install react icons: `yarn add react-icons`
2. in `pages/auth` add `login` folder and add `Login.tsx` and `Login.scss` into it

3. add initial skeleton form code for `Login.tsx` along with adding `Input` & `Button` components 
	and their `props`

4. import `Login.tsx` into `AuthTabs` test our `Sign In` and `Sign Up` tabs are working

# Register user component

1. in `pages/auth` create `register` folder and add `Register.tsx` and `Register.scss` into it
2. copy over `Login.tsx` code into `Register.tsx` and make necessary changes
3. in `Register.tsx `add another `Input component` for `email`

# Forgot password component

1. create forgot-password folder in `pages/auth` folder and add `ForgotPassword.tsx` & `ForgotPassword.scss` into it
2. copy over `Login.tsx` code into `ForgotPassword.tsx`and `Login.scss` into `ForgotPassword.scss`
3. change `ForgotPassword.tsx` as necessary

4. in `Login.tsx` import `{Link}` from `react-router-dom` 
	`import { Link } from 'react-router-dom';`

5. use `Link` for `span` containing `Forgot password?`, and Link to `/forgot-password`
6. in routes.tsx add another path of `/forgot-password` and element of <ForgotPassword> component

7. in `ForgotPassword.tsx` import `{Link} `from `react-router-dom`, wrap around `Back to Login` span
   and Link to `/`

8. Test in Browser that we can acess `/forgot-password`
9. add the same background image we had in `AuthTabs.tsx` into `ForgotPassword.tsx`

# Reset password component

1. in auth folder create reset-password folder and add `ResetPassword.scss` and `ResetPassword.tsx` into it
2. add code for both of above files
3. in `pages/auth/index.tsx` import and export `ResetPassword.tsx`
4. in `routes.tsx`  add new route for `ResetPassword` and test we can access in browser

# Adding static data

1. in `services/utils` folder ad `static.data.tsx` file and add code