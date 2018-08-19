import { readFileAsArray, readFileAsArrayUsingPromise } from "../src/app.js";

// Story1
test("it returns data from the stream as it is ", async () => {
  const str = await readFileAsArrayUsingPromise("./samples/sample.json");
  expect(str).toBe(
    "{name: 'sahil', city: 'bangalore', age: '28', address: { state: 'karnataka'}}"
  );
});

test("shouts if when no file is available ", async () => {
  try {
    await readFileAsArrayUsingPromise("../samples/sampleFileNotFound.json");
  } catch (error) {
    expect(error.length).not.toBe(0);
  }
});

//Story2
test("it should have line number before each line", async () => {
  const withLineNumbers = true;
  const str = await readFileAsArrayUsingPromise("./samples/sample.json", {
    withLineNumbers
  });
  expect(str).toBe(
    "1 {name: 'sahil', city: 'bangalore', age: '28', address: { state: 'karnataka'}}"
  );
});

// Story 3
test("it should prettify the JSON with identations", async () => {
  const makePretty = true;
  const str = await readFileAsArrayUsingPromise("./samples/sample1.json", {
    makePretty
  });
  expect(str).toBe(`{
  "name": "sahil"
}`);
});

// Story 4
// test("it should print pretty JSON with identations AND linenumbers", async () => {
//   const makePretty = true;
//   const withLineNumbers = true;
//   const str = await readFileAsArrayUsingPromise("./samples/sample1.json", {
//     makePretty,
//     withLineNumbers
//   });
//   expect(str).toBe(`{
//   "name": "sahil"
// }`);
// });