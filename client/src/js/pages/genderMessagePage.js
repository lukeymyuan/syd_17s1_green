const Page = require('watch_framework').Page;

const template = require('../../templates/pages/genderMessagePage.hbs');

let option;

const responsePage = Page.extend({

  id: 'genderMessagePage',

  template,

  responses: {
    male: ['male msg 1', 'male msg 2'],
    female: ['female msg 1'],
    nonBinary: ['nonbinary msg 1'],
    unspecified: ['unspecified msg 1'],
  },

  goToHomePage() {
    window.App.navigate('home');
  },

  render() {
    const gender = 'male';
    // Generate an index between 0 - 9
    const index = Math.floor(Math.random() * 9);
    const genderMessage = '';

    switch (gender) {
      case 'male':
        if (index >= 0 && index <= 2) {
          // Show a male message
        } else {
          // Show an unspecified message
        }
        break;
      case 'female':
        if (index >= 0 && index <= 2) {
          // Show a male message
        } else {
          // Show an unspecified message
        }
        break;
      case 'nonBinary':
        if (index >= 0 && index <= 2) {
          // Show a male message
        } else {
          // Show an unspecified message
        }
        break;
      case 'unspecified':
        if (index >= 0 && index <= 2) {
          // Show a male message
        } else {
          // Show an unspecified message
        }
        break;
      default:

    }

    this.$el.html(this.template({ message: genderMessage }));
    return this;
  },
});

module.exports = responsePage;
