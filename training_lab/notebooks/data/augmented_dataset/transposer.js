console.log('starting script...')


const fs = require('fs');
const {transposeABC} = require('abc-notation-transposition');

const steps = [1, 2, 3,4, 5, 6, -1, -2, -3, -4, -5];

console.log('starting reading file...')
song = ''

fs.readFile('dataset_0.abc', 'utf-8', (err, data) => {
  if (err) throw err;
  const songs = data.split('\n\n');
  steps.forEach(step => {
    
    const transposedSongs = songs.map(song => output = transposeABC(song ,step));
    const transposedData = transposedSongs.join('\n\n');
    const filename = step < 0 ? `dataset_min${Math.abs(step)}.abc` : `dataset_${step}.abc`;
    fs.writeFile(filename, transposedData, err => {
      if (err) throw err;
      console.log(`File ${filename} is written successfully.`);
    });
    console.log('Transposing finished succesfully')
  });
});


