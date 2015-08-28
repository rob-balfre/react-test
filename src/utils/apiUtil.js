var xhr = require('../lib/xhr');
var ServerActionCreators = require('../actions/ServerActionCreators');

var ApiUtils = {
  loadArticles (howMany) {
    xhr.getJSON('http://localhost:8000/articles.json', (err, res) => {
      ServerActionCreators.loadedArticles(res.slice(0, howMany));
    });
  }
};

module.exports = ApiUtils;

