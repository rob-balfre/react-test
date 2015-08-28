var AppDispatcher = require('../dispatcher/AppDispatcher');
var { EventEmitter } = require('events');
var { ActionTypes } = require('../Constants');
var assign = require('react/lib/Object.assign');

var events = new EventEmitter();
var CHANGE_EVENT = 'CHANGE';

var state = {
  articles: [],
  loaded: false
};

var setState = (newState) => {
  assign(state, newState);
  events.emit(CHANGE_EVENT);
};

var ArticleStore = {
  addChangeListener (fn) {
    events.addListener(CHANGE_EVENT, fn);
  },

  getState () {
    return state;
  }
};

ArticleStore.dispatchToken = AppDispatcher.register((payload) => {
  var { action } = payload;

  if (action.type === ActionTypes.ARTICLES_LOADED) {
    setState({
      loaded: true,
      articles: action.articles
    });
  }
});

module.exports = ArticleStore;