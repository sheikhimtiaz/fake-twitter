const util = require('util');
const exec = util.promisify(require('child_process').exec);

const path = require('path');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);

function clearDirectory() {
    console.log('✨ Clear existing services.\n');
    var apiPath = path.normalize(`${__dirname}/../../src/app/@api`);

    const serviceNames = fs.readdirSync(apiPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    for (const serviceName of serviceNames) {
        fs.rmdirSync(`${apiPath}/${serviceName}`, { recursive: true });
        console.log(`🛑 Cleared: "${serviceName}"\n`);
    }
    console.log('✅ Clear existing services Complete.\n');

}

async function generate(command) {
    const { stdout, stderr } = await exec(command);
    console.log('🛑 Output: \n\n', stdout);
    console.log('🛑 Error: ', stderr || 'No Error Occuered.');
    console.log('\n');
}

async function main() {

    clearDirectory();

    const services = fs.readdirSync(`${__dirname}/../services`, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    for (const service of services) {
        console.log(`🛑 Generating Code For: "${service}"\n`);

        var configPath = path.normalize(`${__dirname}/../services/${service}/config.json`);
        var swaggerPath = path.normalize(`${__dirname}/../services/${service}/swagger.json`);
        var outPath = path.normalize(`${__dirname}/../../src/app/@api/${service}`);

        const config = JSON.parse(await readFile(configPath));
        let command = `openapi-generator-cli generate -g typescript-angular -i ${swaggerPath} -o ${outPath}`;

        let props = ''
        for (const key in config) {
            props = `${props ? props + ',' : props}${key}=${config[key]}`;
        }


        command = `${command} -p ${props}`;
        await generate(command);

        console.log(`✅ Code Generation Done for: "${service}"\n\n`);
    }

    console.log('✨ Code Generation Completed.\n\n');
    process.exit();

}

main();
