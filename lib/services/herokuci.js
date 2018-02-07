module.exports = {

  detect : function(){
    return (process.env.CI && process.env.HEROKU_TEST_RUN_ID !== undefined);
  },

  configuration : function(){
    console.log('    Heroku CI Detected');
    return {
      // service : 'herokuci',
      build : process.env.HEROKU_TEST_RUN_ID,
      // build_url : process.env.CI_BUILD_URL,
      commit : process.env.HEROKU_TEST_RUN_COMMIT_VERSION,
      branch : process.env.HEROKU_TEST_RUN_BRANCH
    };
  }
};
