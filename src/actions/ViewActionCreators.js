var { ActionTypes } = require('../Constants');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var ApiUtil = require('../utils/ApiUtil');

// Action creators are nothing more than a call into the dispatcher

var ViewActionCreators = {
  loadArticles (howMany) {

    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_ARTICLES
    });

    ApiUtil.loadArticles(howMany);
  }
};

module.exports = ViewActionCreators;