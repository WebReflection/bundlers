# bundlers
some basic bundler test

### How to
You can clone this repository and after an `npm install` you can run `npm run all`.

To test the result you can use `npm test` but be sure the test is verifying what you are looking for.

You can switch to standard ECMAScript 2015+ modules using `module=esm npm run all` and then test again.

All bundlers will instantly load from `./esm` folder instead of `./cjs` and no extra info woul dbe provided (testing defaults).