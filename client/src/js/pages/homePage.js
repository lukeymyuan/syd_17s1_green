const Page = require('watch_framework').Page;

const template = require('../../templates/pages/home.hbs');
const $ = require('jquery');

const homePage = Page.extend({

  id: 'home',

  template,

  buttonEvents: {
    right: 'goToMoodPage',
    top: 'scrollUp',
    left: 'goToResponse',
    face: 'updateMessage',
  },
  messages: ['Message 0', 'Message 1', 'Message 2', 'Message 3', 'Message 4'],
  prevIndex: 1,

  goToMoodPage() {
    window.App.navigate('mood');
  },

  scrollUp() {
    $('#watch-face').animate({ scrollTop: '-=70px' });
  },

  scrollDown() {
    $('#watch-face').animate({ scrollTop: '+=70px' });
  },

  goToResponse() {
    window.App.navigate('response');
  },

  updateMessage() {
    const len = this.messages.length;
    let index = Math.floor(Math.random() * len);
    while (index === this.prevIndex) {
      index = Math.floor(Math.random() * len);
    }
    this.prevIndex = index;
    this.$el.html(this.template({ message: this.messages[index] }));
    return this;
  },

  render() {
    this.$el.html(this.template({ message: 'Variable Positive Message' }));
    return this;
  },
  goToMyDemoPage() {
    window.App.navigate('demo');
  },

});

module.exports = homePage;
