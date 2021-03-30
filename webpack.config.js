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
