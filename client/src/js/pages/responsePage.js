const Page = require('watch_framework').Page;
const storage = require('../../storage');

const template = require('../../templates/pages/responsePage.hbs');

let option;

const responsePage = Page.extend({

  id: 'response',

  template,
  tap_msg: '',
  buttonEvents: {
    face: 'goToTap',
    top: 'goToTap',
  },
  responses: {
    0: ['Awesome! Remember to share the goodness by smiling at the people around you.',
      'Awesome! Keep it up, sunshine!'], // Happy
    1: ['Feeling a bit down? Give yourself something to look forward to! Plan a movie or a date with friends.',
      'Not the best day? Take a break: read a book, play a game, or have a chat with a good friend.',
      "Not feeling the best? If friends keep making you feel bad, perhaps they're not friends after all."],  // Meh
    2: ['Tell you what... Try giving these people a call...',
      'Sorry to hear that. Why not try talking to a professional?',
      'Oh no. Maybe these contacts will be able to help you...',
      'That sucks. Have you talked to some of these people?',
      'Are you in danger? These people can get you help...'], // Unhappy
  },

  goToTap() {
    const storageLen = storage.myData.mood.length - 1;
    option = storage.myData.mood[storageLen];
    if (option === 2) {
      window.App.navigate('reporting');
    } else {
      window.App.navigate('tap');
    }
  },

  render() {
    const storageLen = storage.myData.mood.length - 1;
    option = storage.myData.mood[storageLen]; // This changes depending on option selected
    // Generate an index between 0 - 2
    const len = this.responses[option].length;
    const index = Math.floor(Math.random() * len);
    if (option === 2) {
      this.tap_msg = 'Tap to continue';
    }

    this.$el.html(this.template({ response: this.responses[option][index], tap: this.tap_msg }));
    return this;
  },
});

module.exports = responsePage;
