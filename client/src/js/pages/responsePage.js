const Page = require('watch_framework').Page;

const template = require('../../templates/pages/responsePage.hbs');

let option;

const responsePage = Page.extend({

  id: 'response',

  template,

  buttonEvents: {
    face: 'goToHomePage',
  },

  responses: {
    0: ['response 0.0', 'response 0.1', 'response 0.2'], // don't record
    1: ['Go and seek help, call 123456'],                 // very sad
    2: ['I hope you feel better soon'], // slightly sad
    3: ['Good to know'], // slightly happy
    4: ['Awesome'], // very happy
  },

  goToHomePage() {
    window.App.navigate('home');
  },

  render() {
    option = 1; // This changes depending on option selected
    // Generate an index between 0 - 2
    const len = this.responses[option].length;
    const index = Math.floor(Math.random() * len);

    this.$el.html(this.template({ response: this.responses[option][index] }));
    return this;
  },
});

module.exports = responsePage;
