var runNewmanTest = require('../../../../test/codegen/newman/newmanTestUtil').runNewmanTest,
  convert = require('../../lib/index').convert;

// eslint-disable-next-line mocha/no-skipped-tests
describe.skip('convert for different request types', function () {
  var options = {indentCount: 3, indentType: 'Space', includeBoilerplate: true},
    testConfig = {
      compileScript: 'javac -cp *: main.java',
      runScript: 'java -cp *: main',
      fileName: 'main.java'
    };
  runNewmanTest(convert, options, testConfig);
});
