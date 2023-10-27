const fs = require('fs');

const content = fs.readFileSync('readme.md', 'utf-8');

// const wordCount = content.split(' ').length;
// console.log('Palabras:', wordCount);

// Tarea
const words = content.split(' ');

// const reactWordCount = words.filter((word) => word.toLowerCase() === 'react').length;

const reactWordCount = content.match(/react/gi ?? []).length;

console.log('Palabras:', words.length);
console.log('Palabras React:', reactWordCount); //case insensitive
