const fs = require("fs");
const browserify = require("browserify");
const cssify = require("browserify-css");
const b = browserify({
  entries: "src/js/components/progress-bar/progress-bar.js",
});

b.plugin(cssify);

b.bundle().pipe(fs.createWriteStream("dist/copyninja.js"));
