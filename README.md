<h1 align="center">Welcome to mochawesome-to-jest 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/ludorival/mochawesome-to-jest#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>

  <a href="https://github.com/ludorival/mochawesome-to-jest/blob/master/LICENSE" target="_blank">
    <img alt="License: BSD--3--Clause" src="https://img.shields.io/github/license/ludorival/mochawesome-to-jest" />
  </a>
</p>

> Convert your mochawesome report to jest report

## Install

```sh
npm install -D mochawesome-to-jest
```

## Usage

```ts
import convertToJestReport from 'mochawesome-to-jest'
// import the mochawesome result depending where you have specified the reportDir
import mochaTestResults from './reports/mochawesome.json'
// convert the mocha report to jest report
const results = convertToJestReport(mochaTestResults)
console.log(results)
```

## Application with Storybook + Jest + Cypress

Refer to this [guide](Storybook+Cypress.md).

## Author

👤 **Ludovic Dorival**

- Github: [@ludorival](https://github.com/ludorival)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Ludovic Dorival](https://github.com/ludorival).<br />
This project is [BSD--3--Clause](https://github.com/ludorival/mochawesome-to-jest/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
