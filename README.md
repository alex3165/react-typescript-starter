# react-typescript-starter
Simple boilerplate to start a react application using typescript.


## It includes
- Typescript
- Webpack
- Babel
- eslint / tslint with airbnb setup

- React
- Redux
- React-router
- React-router-redux
- Immutable
- Stilr (Need to replace it with something better)

And small other dependencies


## Compatibility
The setup is compiling to ES5 and has a polyfill for the fetch API, it should be compatible cross browsers.


## How to use it

Installation :
```
npm install
npm install -g typescript typings
typings install
```

Runing development server :
```
npm run start
```

For production :
```
npm run build
```

Then with your http server target the dist folder

## Todo
- Replace styling dependency
- Add unit test setup
