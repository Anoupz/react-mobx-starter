(global as any).console = {
  warn: jest.fn()
};

window.scrollTo = () => {};

process.on('unhandledRejection', reason => {
  console.log('REJECTION', reason);
});

// jest.config.js
module.exports = {
  setupTestFrameworkScriptFile: require.resolve('../tests/jest.setup.js')
};
