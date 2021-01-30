# dojo-tdd: Code Breaker

A Code Breaker API that can solve the game and set the secret of it.

## Project structure
```
.
 ├── API                    # Contains the API routes implementation
 ├── Test                   # Contains the JEST and Supertest libraries test
```

## Start the project
1. Run `npm install` to install all dependencies.
2. Run `npm start` to start the local API.
3. Run `npm` to start the Supertest and Jest tests.

## API Routes
1. To set the secret of the Code Breaker game:

```
/setSecret/number
```

2. To solve the Code Breaker game:

```
/solver/number-to-solve
```
