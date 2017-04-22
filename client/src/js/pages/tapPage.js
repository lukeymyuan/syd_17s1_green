const Page = require('watch_framework').Page;
const template = require('../../templates/pages/tap.hbs');

const tapPage = Page.extend({

  id: 'tap',
  template,
  buttonEvents: {
    bottom: 'goToReportingPage',
    face: 'goToMessage',
    right: 'goToSettings',
    top: 'goToMood',
  },
  goToMessage() {
    window.App.navigate('home');
  },

  goToSettings() {
    window.App.navigate('settings');
  },

  goToReportingPage() {
    window.App.navigate('reporting');
  },

  goToMood() {
    window.App.navigate('mood');
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
