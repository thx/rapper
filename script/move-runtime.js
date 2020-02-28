const mv = require('mv');
const path = require('path');
const cwd = process.cwd();
mv(path.join(cwd, 'dist/runtime'), path.join(cwd, '/runtime'), function(err) {
  if (err) {
    console.log(err);
  }
});
