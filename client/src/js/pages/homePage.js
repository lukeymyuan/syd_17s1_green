const Page = require('watch_framework').Page;

const template = require('../../templates/pages/home.hbs');
const $ = require('jquery');

const homePage = Page.extend({

  id: 'home',

  template,

  buttonEvents: {
    right: 'goToMoodPage',
    top: 'scrollUp',
    bottom: 'scrollDown',
    left: 'goToMoodPage',
  },

  goToContacts() {
    window.App.navigate('contacts');
  },

  goToMoodPage() {
    window.App.navigate('mood');
  },

  scrollUp() {
    $('#watch-face').animate({ scrollTop: '-=70px' });
  },

  scrollDown() {
    $('#watch-face').animate({ scrollTop: '+=70px' });
  },

  render() {
    this.$el.html(this.template());
    return this;
  },

});

module.exports = homePage;
