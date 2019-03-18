# Read-it Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

To get started developing right away:

- install all project dependencies with `npm install` or `yarn install`
- start the development server with `npm start` or `yarn start`\*\*\*\*

---

## What You're Getting

```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico
│   └── index.html # initial html page
└── src
    ├── components # All shared components are here
    ├── enhancers # Some HOC components
    ├── pages # All page components that use shared components
    ├── store # Everything about redux is here
    │   └── modules # all reducers, actions creators and types are here, like redux Ducks - https://github.com/erikras/ducks-modular-redux
    ├── test-utils # Some helpers to improve tests
    ├── themes # the themeProvider is setuped here
    ├── utils # Some helpers to code easier
    └── index.js # File to used for DOM rendering only.
```

# Readable API Server

This is the starter project for the final assessment project for Udacity's Redux course where you will build a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.

This repository includes the code for the backend API Server that you'll use to develop and interact with the front-end portion of the project.

## Start Developing

To get started developing right away:

- Install and start the API server
  - `cd api-server`
  - `npm install`
  - `node server`
- In another terminal window, use Create React App to scaffold out the front-end
  - `create-react-app frontend`
  - `cd frontend`
  - `npm start`

## API Server

Information about the API server and how to use it can be found in its [README file](api-server/README.md).

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
