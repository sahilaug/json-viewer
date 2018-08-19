import fs from 'fs';
import beautify from 'json-beautify';
import jsonFormat from 'json-format';

export const readFileAsArray = (file, cb) => {
  fs.readFile(file, function(err, data) {
    if (err) {
      return cb(err);
    }
    
    const lines = data
      .toString()
      .trim()
      .split("\n");
    cb(null, lines);
  });
};

const addLineNumbers = (data ) => data
               .toString()
               .trim()
               .split("\n")
               .map((line, index) => `${index + 1} ${line}`)
               .join("\n");


const makePretty = data => {
  return JSON.stringify(JSON.parse(data), null, 2); 
}

export const readFileAsArrayUsingPromise = (file, config = {withLineNumbers: false, makePretty: false}) => {
         return new Promise((resolve, reject) => {
           fs.readFile(file, 'utf8', (err, data) => {
             if (err) {
               reject(err);
               return;
             }
             
            let newLines = config.withLineNumbers ? addLineNumbers(data) : data;
            newLines = config.makePretty ? makePretty(newLines) : newLines;
            resolve(newLines.toString());
           });
         });
       };
