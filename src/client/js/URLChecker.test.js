import { checkForURL } from './URLChecker'

test('test if the function checkforURL is defined',  () => {
    expect(checkForURL).toBeDefined();
});


test('test it is validating URL correctlly; it should return true after excuting the test',  () => {
    expect(checkForURL("https://www.nytimes.com/2020/06/24/us/")).toBe(true);
});