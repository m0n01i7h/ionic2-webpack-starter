#!/usr/bin/env node

require('shelljs/global');

exec('gulp hook:before:build', code => {
    console.log('Finished, exit code: ', code);
});
