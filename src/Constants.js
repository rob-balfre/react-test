var keyMirror = require('react/lib/keyMirror');

module.exports = {
  API: 'http://localhost:8000',

  ActionTypes: keyMirror({
    ARTICLES_LOADED: null,
    LOAD_ARTICLES: null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};