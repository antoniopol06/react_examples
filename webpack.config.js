/*
** shell# webpack --watch: Se encarga de ejecutar de nuevo por cada cambio
** Loader jsx-loader?harmony compila los archivos .jsx a .js y con el flag ?harmony compila ES6 a js
**/

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: "./build",
        filename: "app.js"
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: "jsx-loader?harmony" }
        ]
    }
}