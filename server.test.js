import { readFileAsArray, readFileAsArrayUsingPromise } from "./server.js";

test(`read file as array using callback`, async () => {
  const str = await readFileAsArray("./sample.json", (err, str) => {
      expect(str.length).not.toBe(0);
  });
});
test(`read file as array using await`, async () => {
  const str = await readFileAsArrayUsingPromise("./sample.json");
  expect(str.length).not.toBe(0);
});

test(`read file as array using promise`, async () => {
  readFileAsArrayUsingPromise("./sample.json").then((str) => {
  expect(str.length).not.toBe(0);
  }).catch(err => {
      console.log(err);
  });
});
