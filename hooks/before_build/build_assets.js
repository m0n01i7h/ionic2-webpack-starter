#!/usr/bin/env node

require('shelljs/global');

const buildNgc = 'npm run ngc';
const buildApp = 'npm run build';

const command = process.env.NODE_ENV === 'production'
    ? `${buildNgc} && ${buildApp}`
    : buildApp;

exec(command, code => {
    console.log('Finished, exit code: ', code);
});
