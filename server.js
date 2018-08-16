import fs from 'fs';

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

export const readFileAsArrayUsingPromise = (file, cb = () => {}) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject(err);
        return cb(err);
      }

      let lines = data
        .toString()
        .trim()
        .split("\n");
      resolve(lines);
      cb(null, lines);
    });
  });
};
