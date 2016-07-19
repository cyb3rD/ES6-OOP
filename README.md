# Object-oriented programming in JavaScipt ES6

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/21683f123a2a470f83189167d0f1c5c9)](https://www.codacy.com/app/noilgt/ES6-OOP?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=cyb3rD/ES6-OOP&amp;utm_campaign=Badge_Grade)

### About

Example project to solid understanging new ES6 standart OOP conceptions.
In this project I want to learn basic conceptions of OOP in ES6 and unit testing.

### What I'm using in this project

* ES6 (ES2015)
* Node.js v6.3.0
* Babel transpiler
* Jquery (2.2.3)
* Material Design Lite 
* SystemJS (extending es6-module-loader functionality) in order to using JQuery 2.2.3 within ES6 modules
* mocha chai - unit testing (see TODO)

see TODO list to find more my ideas to this project

### Projetc installation

0. Clone repo:
```
git clone https://github.com/cyb3rD/ES6-Learning.git
cd OOP
```
1. Before installing packages you can list all your global installed packages:
```
npm list -g --depth=0
```
2. Install all dependencies (required for using described tehnologies) in `package.json`:
```
npm install
```
3. Run lite-server with BorwserSync:
```
npm run dev
```

### Testing

You can test modules spec (basic methods) by running
```
npm run test
```

#### TODO (by priorities)

- [ ] Use webpack & babel intead of traceur & lite-server ( babel supports 74% of ES6)
- [ ] Deploy project to Heroku (to learn of basics production workflow)
- [ ] Create project page @gitHub Pages (to Refresh HTML, CSS knowledge)
- [ ] Using MongoDB ( to learn basics of NoSQL DB)
- [ ] Basic unit testing (just to understand basics of BDD modules testing)
