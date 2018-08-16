import { readFileAsArray, readFileAsArrayUsingPromise } from "./server.js";
test(`read file as array using await`, async () => {
  const str = await readFileAsArrayUsingPromise("./sample.json");
  expect(str.length).not.toBe(0);
});
