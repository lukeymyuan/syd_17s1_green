const Page = require('watch_framework').Page;
const template = require('../../templates/pages/tap.hbs');

const tapPage = Page.extend({

  id: 'tap',
  template,
  buttonEvents: {
    face: 'goToMessage',
  },
  goToMessage() {
    window.App.navigate('home');
  },

  initialize() {
    this.render();
  },

  render() {
    this.$el.html(this.template());
    return this;
  },

});

module.exports = tapPage;
