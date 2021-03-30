# Webpack - Create JS code from TS

1. Create a new project
2. Create package.json
3. Ad the dependencies `ts-loader, typescript, webpack, webpack-cli`
4. Create a `public` and `src` directoy
5. Create a `src/index.ts` file with simple code in it eg. `console.log('Hello World)`
6. Run `npx tsc --init` to generate typescript config
7. Create webpack.config.js with following data

```js
const path = require('path');

module.exports = {
  // Starting poit of sourcecode
  entry: './src/index.ts',
  // Actions to be performd on files
  module: {
    rules: [
      {
        // RegEx are enclosed beteen / /
        // \. is used to '.' with escape character
        // $ ensures this is end of file name
        test: /\.ts$/,
        // If above patthern matches, then compile them to javascipt
        use: 'ts-loader',
        // Ensures only the ts fules from src directory are converted
        include: [path.resolve(__dirname, 'src')],
      },
    ],
  },
  output: {
    // Final output
    filename: 'bundle.js',
    // Creates absolute path to public and generate a bundle.js
    path: path.resolve(__dirname, 'public'),
  },
};
```

- Entry - STarting pint
- Output - Files and path to output
- module - Rules to generate output
