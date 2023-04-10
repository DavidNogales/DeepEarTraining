console.log('starting script...')
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><body><div id="paper"></div></body>`);
const { window } = dom;

global.document = window.document;
global.window = window;
global.navigator = {
  userAgent: 'node.js',
};

const fs = require('fs');
const abcjs = require('abcjs');

const keys = [1, 2, 3,4, 5, 6, -1, -2, -3, -4, -5];

console.log('starting reading file...')
song = ''

var visualObj = abcjs.renderAbc("paper", song);

fs.readFile('dataset_0.abc', 'utf-8', (err, data) => {
  if (err) throw err;
  const songs = data.split('\n\n');
  keys.forEach(key => {
    const transposedSongs = songs.map(song => abcjs.strTranspose(song ,visualObj, key));
    const transposedData = transposedSongs.join('\n\n');
    const filename = key < 0 ? `dataset_min${Math.abs(key)}.txt` : `dataset_${key}.txt`;
    fs.writeFile(filename, transposedData, err => {
      if (err) throw err;
      console.log(`File ${filename} is written successfully.`);
    });
  });
  console.log('Transposing finished succesfully')
});


