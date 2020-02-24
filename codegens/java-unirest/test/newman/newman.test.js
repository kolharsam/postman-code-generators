var runNewmanTest = require('../../../../test/codegen/newman/newmanTestUtil').runNewmanTest,
  convert = require('../../lib/index').convert;

// eslint-disable-next-line mocha/no-skipped-tests
describe.skip('Convert for different types of request', function () {
  var testConfig = {
      runScript: 'java -cp *: main',
      compileScript: 'javac -cp *: main.java',
      fileName: 'main.java',
      skipCollections: ['formdataCollection']
    },
    options = {includeBoilerplate: true};

  runNewmanTest(convert, options, testConfig);
});
