var { ActionTypes } = require('../Constants');
var AppDispatcher = require('../dispatcher/AppDispatcher');

//Action creators are nothing more than a call into the dispatcher

var ServerActionCreators = {
  loadedArticles (articles) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.ARTICLES_LOADED,
      articles: articles
    });
  }
};

module.exports = ServerActionCreators;

