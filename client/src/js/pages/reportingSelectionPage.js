const Page = require('watch_framework').Page;

const template = require('../../templates/pages/reportingSelectionPage.hbs');

const reportingSelectionPage = Page.extend({

  id: 'genderMessagePage',

  template,

  goToHomePage() {
    window.App.navigate('home');
  },

  render() {
    this.$el.html(this.template());
    return this;
  },
});

module.exports = reportingSelectionPage;
