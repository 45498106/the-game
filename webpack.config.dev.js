const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        bundle: "./src/index.js"
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "docs")
    },
    target: "web",
    node: {
        fs: "empty"
    }
};
