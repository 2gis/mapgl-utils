const fs = require('fs-extra');
const path = require('path');

const suitesDir = path.join(__dirname, 'suites');

const suites = fs.readdirSync(suitesDir);

const data = suites.map((fileName) => {
    const code = fs.readFileSync(path.join(suitesDir, fileName), 'utf-8');
    return { name: path.basename(fileName, '.ts'), code };
});

const distDir = path.join(__dirname, 'dist');
fs.mkdirpSync(distDir);
fs.writeJsonSync(path.join(distDir, 'data.json'), data);
