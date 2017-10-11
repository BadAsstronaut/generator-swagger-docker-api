'use strict';

/**
 * Builds a spec object and writes to output to spec.json
 * This allows us to write the spec in separate folders and files
 */

const promisify = require('util').promisify;
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const specPath = path.resolve(__dirname, './spec');
const specYamlPath = path.resolve(specPath, 'spec.yaml');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const stat = promisify(fs.stat);

const throwErr = err => {
  process.stderr().write(`${JSON.stringify(err)}`);
  process.exit(1);
};

async function concatSpecFiles(dir) {
  const dirPath = path.resolve(specPath, dir);
  const itemNames = await readdir(dirPath);

  return Promise.all(itemNames.map(name => {
    const filePath = path.resolve(dirPath, name);
    return name.endsWith('.yml') || name.endsWith('.yaml')
      ? readFile(filePath)
        .then(data => ({ [dir]: data }))
        .catch(throwErr)
      : Promise.resolve();
  }));
}

readdir(specPath)
  .then(itemNames => {
    return Promise.all(
      itemNames.map(name => {
        const itemPath = path.resolve(specPath, name);
        return stat(itemPath)
          .then(stats => {
            return stats.isDirectory()
              ? concatSpecFiles(name)
              : Promise.resolve();
          })
          .catch(throwErr);
      }));
  })
  .then(ymlResults => {
    ymlResults = [].concat.apply([], ymlResults);
    const specObj = yaml.safeLoad(fs.readFileSync(specYamlPath));
    ymlResults
      .filter(yml => yml)
      .forEach(yml => {
        Object.keys(yml).forEach(key => {
          specObj[key] = yaml.safeLoad(yml[key].toString());
        });
      });
    fs.writeFileSync(path.resolve(specPath, 'spec.json'), JSON.stringify(specObj, undefined, 2));
  })
  .catch(throwErr);
