const fs = require('fs');

const path = 'src/routes/other/test-post';
fs.rename(`${path}/index.html`, `${path}/index.svelte`, () => {});
