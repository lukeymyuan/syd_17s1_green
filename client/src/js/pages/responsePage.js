const Page = require('watch_framework').Page;

const template = require('../../templates/pages/responsePage.hbs');

let option;

const responsePage = Page.extend({

  id: 'response',

  template,

  responses: {
    0: ['response 0.0', 'response 0.1', 'response 0.2'],
    1: ['response 1.0', 'response 1.1', 'response 1.2'],
    2: ['response 2.0', 'response 2.1', 'response 2.2'],
    3: ['response 3.0', 'response 3.1', 'response 3.2'],
    4: ['response 4.0', 'response 4.1', 'response 4.2'],
  },
  render() {
    option = 1; // This changes depending on option selected
    // Generate an index between 0 - 2
    const index = Math.floor(Math.random() * 3);

    this.$el.html(this.template({ response: this.responses[option][index] }));
    return this;
  },
});

module.exports = responsePage;
