<h1 align="center">Welcome to stock-tracker 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/npm/v/exchange-tracker.svg">
  <a href="https://twitter.com/dawidjaniga">
    <img alt="Twitter: dawidjaniga" src="https://img.shields.io/twitter/follow/dawidjaniga.svg?style=social" target="_blank" />
  </a>
</p>

> Track Stock values based on company symbol

### 🏠 [Homepage](http://dawidjaniga.pl/stock-tracker)

<h1><a href="http://dawidjaniga.pl/stock-tracker">Live demo</a></h1>

Project is based on [Create React App](https://github.com/facebook/create-react-app). Please follow CRA Guides for itemized instructions.

## Architecture
```
├── LICENSE
├── README.md
├── build                                       -------- production ready bundle
│   ├── asset-manifest.json
│   ├── index.html
│   ├── precache-manifest.id.js
│   ├── service-worker.js
│   └── static
│       ├── css
│       │   ├── id.chunk.css
│       │   ├── id.chunk.css.map
│       │   ├── main.id.chunk.css
│       │   └── main.id.chunk.css.map
│       └── js
│           ├── id.chunk.js
│           ├── id.chunk.js.map
│           ├── main.id.chunk.js
│           ├── main.id.chunk.js.map
│           ├── runtime~id.js
│           └── runtime~id.js.map
├── package.json
├── public
│   └── index.html                              -------- template for generate bundle entry point
├── src                                         -------- source code
│   ├── App.js                                  -------- Application wrapper
│   ├── App.test.js
│   ├── components                              -------- components shared between views. Grouped in directories
│   │   ├── company                                      to hassle-free testing and organizing assets   
│   │   │   └── index.js
│   │   ├── header
│   │   │   └── index.js
│   │   └── trend
│   │       └── index.js
│   ├── constants                               -------- bucket for all constants
│   │   ├── actionTypes.js
│   │   └── storage.js
│   ├── hooks                                   -------- container for custom hooks
│   │   └── api                                 -------- extracted API client for fast extending new endpoints
│   │       ├── index.js
│   │       └── reducer.js
│   ├── index.css                               -------- one css file with variables and global customization
│   ├── index.js                                -------- application entry point
│   ├── services                                -------- services 
│   │   └── storage                             -------- storage is responsible for saving and reading provided
│   │       └── index.js                                 company symbols
│   └── views                                   -------- views divided per feature
│       ├── companies
│       │   └── index.js
│       └── track-company
│           └── index.js
└── yarn.lock

18 directories, 34 files
```

## Install
```sh
yarn install
```

## Usage

```sh
yarn start
```

## Run tests

```sh
yarn test
```

### Known issues
Multiple refresh cause running out of free quota, with following statement as a response. Waiting for a minute resolves problem.
```
Thank you for using Alpha Vantage! Our standard API call frequency is 5 calls per minute and 500 calls per day. Please visit https://www.alphavantage.co/premium/ if you would like to target a higher API call frequency.
```

## Author

👤 **Dawid Janiga <dawidjaniga@gmail.com>**

* Twitter: [@dawidjaniga](https://twitter.com/dawidjaniga)
* Github: [@dawidjaniga](https://github.com/dawidjaniga)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
