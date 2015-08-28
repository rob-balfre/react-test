jest.autoMockOff();

describe('AppDispatcher', function () {
  var AppDispatcher;

  beforeEach(function () {
    AppDispatcher = require('../AppDispatcher.js');

  });

  it('sends actions to subscribers', function () {

    var listener = jest.genMockFunction();
    AppDispatcher.register(listener);

    var payload = {};
    AppDispatcher.dispatch(payload);


    expect(listener.mock.calls.length).toBe(1);
    expect(listener.mock.calls[0][0]).toBe(payload);
  });

  it('handles server action', function () {

    var listener = jest.genMockFunction();
    AppDispatcher.register(listener);

    var articles = [{id: 1, image: "http://placehold.it/300x250&text=image 1", title: "article title 1"}];

    var payload = {
      type: 'ARTICLES_LOADED',
      articles: articles
    };

    AppDispatcher.handleServerAction(payload);

    expect(listener.mock.calls.length).toBe(1);
    expect(listener.mock.calls[0][0].action).toBe(payload);
  });

  it('handles view action', function () {

    var listener = jest.genMockFunction();
    AppDispatcher.register(listener);

    var payload = {
      type: "LOAD_ARTICLES"
    };

    AppDispatcher.handleServerAction(payload);

    expect(listener.mock.calls.length).toBe(1);
    expect(listener.mock.calls[0][0].action).toBe(payload);
  });

});