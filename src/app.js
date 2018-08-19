import fs from "fs";

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

const addLineNumbers = data =>
  data
    .toString()
    .trim()
    .split("\n")
    .map((line, index) => `${index + 1} ${line}`)
    .join("\n");

const makePretty = data => {
  return JSON.stringify(JSON.parse(data), null, 2);
};

// export const readFileAsArrayUsingPromise = (
//   file,
//   config = { withLineNumbers: false, makePretty: false }
// ) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//         return;
//       }

//       let newLines = config.withLineNumbers ? addLineNumbers(data) : data;
//       newLines = config.makePretty ? makePretty(newLines) : newLines;
//       resolve(newLines.toString());
//     });
//   });
// };

const massageContent = (data, config) => {
  let newLines = config.withLineNumbers ? addLineNumbers(data) : data;
  newLines = config.makePretty ? makePretty(newLines) : newLines;
  return newLines;
};

export const readFileAsArrayUsingPromise = (
  file,
  config = { withLineNumbers: false, makePretty: false }
) => {
  return new Promise((resolve, reject) => {
    let body = "";
    const rr = fs.createReadStream(file);
    rr.on("data", (chunk) => {
      body += chunk;  
    });
    rr.on("error", err => {
      reject(err);
    });
    rr.on("end", () => {
      const returnString = massageContent(body, config);
      resolve(returnString);
    });
  });
};
