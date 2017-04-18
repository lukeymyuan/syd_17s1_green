const Page = require('watch_framework').Page;
const storage = require('../../storage');

const template = require('../../templates/pages/responsePage.hbs');

let option;

const responsePage = Page.extend({

  id: 'response',

  template,

  buttonEvents: {
    face: 'goToTap',
    top: 'goToTap',
  },
  responses: {
    0: ['Good for you', 'Keep on smiling', 'Thats amazing, have a beautiful day'], // Happy
    1: ['I hope you feel better soon', 'Keep your chin up champ', 'You are hot like sunrise'],                 // Confused
    2: ['Go and seek help, call 123456. Tap to continue'], // Unhappy
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

    this.$el.html(this.template({ response: this.responses[option][index] }));
    return this;
  },
});

module.exports = responsePage;
