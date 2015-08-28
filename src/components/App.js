var React = require('react');
var ArticleStore = require('../stores/ArticleStore');
var ViewActionCreators = require('../actions/ViewActionCreators');

var App = React.createClass({
  getInitialState () {
    return ArticleStore.getState();
  },

  componentDidMount () {
    ArticleStore.addChangeListener(this.handleStoreChange);
    ViewActionCreators.loadArticles(3);
  },

  moreArticles (current) {
    ViewActionCreators.loadArticles(current += 3);
  },

  handleStoreChange () {
    this.setState(ArticleStore.getState());
  },

  renderArticles () {
    return this.state.articles.map((article, i) => {
      return <article key={i}>
        <h1>{ article.title }</h1>
        <img src={ article.image } />
      </article>;
    });
  },

  renderButton() {
    if (this.state.articles.length < 10) {
      return <button onClick={this.moreArticles.bind(this, this.state.articles.length)}>Load more...</button>
    } else {
      return <p>The end.</p>
    }
  },

  render () {
    if (!this.state.loaded) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="articles">{this.renderArticles()}</div>
        {this.renderButton()}
      </div>
    );
  }
});

module.exports = App;