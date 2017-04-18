const Page = require('watch_framework').Page;
const template = require('../../templates/pages/tap.hbs');

const tapPage = Page.extend({

  id: 'tap',
  template,
  buttonEvents: {
    bottom: 'goToReportingPage',
    face: 'goToMessage',
  },
  goToMessage() {
    window.App.navigate('home');
  },

  goToReportingPage() {
    window.App.navigate('reporting');
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
