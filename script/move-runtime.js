const fs = require('fs-extra');
const path = require('path');
const cwd = process.cwd();
const src = path.join(cwd, 'dist/runtime');
const dist = path.join(cwd, '/runtime');

(async function() {
  try {
    await fs.remove(dist);
    await fs.copy(src, dist);
  } catch (err) {
    console.log(err);
  }
})();
