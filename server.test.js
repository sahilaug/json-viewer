import { readFileAsArray, readFileAsArrayUsingPromise } from "./server.js";

// // Story1
test('it returns data as it is ', async () => {
  const str = await readFileAsArrayUsingPromise('./sample.json');
  expect(str).toBe("{name: 'sahil', city: 'bangalore', age: '28', address: { state: 'karnataka'}}");
});

test("shouts if when no file is available ", async () => {
  try {
    await readFileAsArrayUsingPromise("./sampleFileNotFound.json");
  } catch (error) {
    expect(error.length).not.toBe(0);
  }
});

// //Story2
test('it should have line number before each line', async() => {
  const withLineNumbers = true;
  const str = await readFileAsArrayUsingPromise("./sample.json", {withLineNumbers});
  expect(str).toBe("1 {name: 'sahil', city: 'bangalore', age: '28', address: { state: 'karnataka'}}");
});

// Story 3
test('it should prettify the JSON with identations', async () => {
  const makePretty = true;
  const str = await readFileAsArrayUsingPromise("./sample1.json", {makePretty});
  expect(str).toBe(`{
  "name": "sahil"
}`);
} )

