'use strict';

const readline = require('readline');
const fs = require('fs');

let filename = 'docs/' + process.argv[2];
let lines = [];
let words = 0;
let characters = 0;

const rl = readline.createInterface({
  input: fs.createReadStream(filename)
});

rl.on('line', (line) => {
  characters += line.length;
  var index = {},
     wordsInLine = line
             .replace(/[.,?!;()"'-]/g, " ")
             .replace(/\s+/g, " ")
             .toLowerCase()
             .split(" ");

   wordsInLine.forEach(function (word) {
       if (!(index.hasOwnProperty(word))) {
           index[word] = 0;
       }
       index[word]++;
       words += 1;
   });


  lines.push(line);
});

rl.on('close',() => {
  console.log('Finished reading: ', filename);
  console.log('Total lines: ', lines.length);
  console.log('Total words: ', words);
  console.log('Total characters: ', characters);
});
