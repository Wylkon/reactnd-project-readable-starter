# Read-it Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

## Start here

To get started:

- Install and start the API server:
  - `cd api-server`
  - `yarn install` or `npm install`
  - `node server`

- In another terminal window, use Create React App to scaffold out the front-end:
  - `cd frontend`
  - `yarn install` or `npm install`
  - `yarn start` or `npm start`

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

## API Server

Information about the API server and how to use it can be found in its [README file](api-server/README.md).

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
